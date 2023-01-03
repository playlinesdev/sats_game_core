import { GetPaymentsDto, IFinancialRepository, InvoiceCreateDto, InvoiceCreateResponse, InvoicePayDto, InvoicePayResponse, Payment, PaymentUser, PaymentWallet, UserCreateDto, UserCreateResponse } from "src/domain/financial/financial_repository.interface";
import axios from 'axios'

export class FinancialRepositoryImpl implements IFinancialRepository {
    lnbitsData: { endpoint: string, invoiceReadKey: string, adminKey: string }

    constructor() {
        this.loadLnbitsData()
    }

    loadLnbitsData() {
        this.lnbitsData = {
            // adminKey: this.config.get('LNBITS_ADMINKEY'),
            // endpoint: this.config.get('LNBITS_INVOICEREADKEY'),
            // invoiceReadKey: this.config.get('LNBITS_ENDPOINT')
            adminKey: process.env.LNBITS_ADMINKEY,
            endpoint: process.env.LNBITS_ENDPOINT,
            invoiceReadKey: process.env.LNBITS_INVOICEREADKEY
        }
    }

    async getPayments(data: GetPaymentsDto): Promise<Payment[]> {
        try {
            let url = `${this.lnbitsData.endpoint}${data.walletId ? '/usermanager/api/v1/transactions/' + data.walletId : '/api/v1/payments'}`
            let response = await axios.get(url, { headers: { 'X-Api-Key': data.adminKey ?? this.lnbitsData.adminKey } })
            let payments: Payment[] = []
            response.data.forEach((payment) => {
                payments.push({
                    amount: payment['amount'],
                    expiry: payment['expiry'],
                    fee: payment['fee'],
                    memo: payment['memo'],
                    pending: payment['pending'],
                    time: payment['time'],
                    walletId: payment['walletId']
                })
            })
            return payments
        } catch (error) {
            throw error
        }
    }

    async getUserWallets(userId: string): Promise<PaymentWallet[]> {
        try {
            var url = `${this.lnbitsData.endpoint}/usermanager/api/v1/wallets/${userId}`
            var response = await axios.get(url, { headers: { 'X-Api-Key': this.lnbitsData.adminKey } })
            let wallets: PaymentWallet[] = []
            response.data.forEach((wallet) => {
                wallets.push({
                    adminKey: wallet['adminkey'],
                    invoiceKey: wallet['inkey'],
                    name: wallet['name'],
                    id: wallet['id'],
                    user: wallet['user']
                })
            })
            return wallets
        } catch (error) {
            throw error
        }
    }

    async getTransactionsForUser(data: { userId?: string; walletId?: string; }): Promise<Payment[]> {
        let { walletId, userId } = data
        let _walletId

        if (!walletId) {
            let wallets = await this.getUserWallets(userId);
            _walletId = wallets[0].id
        }

        return this.getPayments({ walletId: _walletId })
    }

    async getUsers(): Promise<{ id: string; name: string; }[]> {
        try {
            let url = `${this.lnbitsData.endpoint}/usermanager/api/v1/users`
            let response = await axios.get(url, { headers: { 'X-Api-Key': this.lnbitsData.adminKey } })
            let users: PaymentUser[] = []
            response.data.forEach((user) => {
                users.push({
                    id: user['id'],
                    name: user['name'],
                    email: user['email'],
                    password: user['password'],
                    wallets: []
                })
            })
            return users
        } catch (error) {
            throw error
        }
    }

    async createUser(createDto: UserCreateDto): Promise<UserCreateResponse> {
        try {
            var url = `${this.lnbitsData.endpoint}/usermanager/api/v1/users`
            var response = await axios.post(url, createDto, { headers: { 'X-Api-Key': this.lnbitsData.adminKey } })
            return {
                email: response.data['email'],
                id: response.data['id'],
                name: response.data['name'],
                password: response.data['password'],
                wallets: response.data['wallets']
            }
        } catch (error) {
            throw error
        }
    }

    async createInvoice(createDto: InvoiceCreateDto): Promise<InvoiceCreateResponse> {
        var url = `${this.lnbitsData.endpoint}/api/v1/payments`
        var response = await axios.post(url, { ...createDto, out: false }, { headers: { 'X-Api-Key': createDto.invoiceKey ?? this.lnbitsData.invoiceReadKey } })
        return {
            paymentHash: response.data['payment_hash'],
            paymentRequest: response.data['payment_request']
        }
    }

    async payInvoice(dto: InvoicePayDto): Promise<InvoicePayResponse> {
        var url = `${this.lnbitsData.endpoint}/api/v1/payments`
        let headers = { 'X-Api-Key': dto.invoiceKey ?? this.lnbitsData.adminKey }
        let data = { bolt11: dto.data, out: true }
        var response = await axios.post(url, data, { headers: headers })
        return {
            paymentHash: response.data['payment_hash']
        }
    }

    async payToUser(data: { recipientId: string, amount: number }) {
        var userData = await this.getUserWallets(data.recipientId)
        var key = userData[0].adminKey
        let invoice = await this.createInvoice({ amount: data.amount, unit: 'sat', invoiceKey: key })
        let response = await this.payInvoice({ data: invoice.paymentRequest })
        return response
    }

    async userPayToGame(data: { payerId: string, amount: number }) {
        var userData = await this.getUserWallets(data.payerId)
        var key = userData[0].adminKey
        let invoice = await this.createInvoice({ amount: data.amount, unit: 'sat' })
        let response = await this.payInvoice({ data: invoice.paymentRequest, invoiceKey: key })
        return response
    }

    async userPayToUser(data: { recipientId: string, payerId: string, amount: number }) {
        await this.userPayToGame({ payerId: data.payerId, amount: data.amount })
        await this.payToUser({ recipientId: data.recipientId, amount: data.amount })
    }
}
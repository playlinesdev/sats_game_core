export interface IFinancialRepository {
    getPayments(data: GetPaymentsDto): Promise<Payment[]>
    getUsers(): Promise<{ id: string, name: string }[]>
    getTransactionsForUser(data: { userId?: string, walletId?: string }): Promise<Payment[]>
    createUser(createDto: UserCreateDto): Promise<UserCreateResponse>
    createInvoice(createDto: InvoiceCreateDto): Promise<InvoiceCreateResponse>
    payInvoice(dto: InvoicePayDto): Promise<InvoicePayResponse>
    getUserWallets(userId: string): Promise<PaymentWallet[]>
}

export const IFinancialRepository = Symbol('IFinancialRepository')

export interface GetPaymentsDto {
    userId?: string, walletId?: string, adminKey?: string
}

export interface InvoicePayResponse {
    paymentHash: string
    data?: any
}

export interface InvoicePayDto {
    invoiceKey?: string
    data: string
}

export interface InvoiceCreateResponse {
    paymentHash: string
    paymentRequest: string
}

export interface InvoiceCreateDto {
    invoiceKey?: string
    memo?: string
    webhook?: string
    amount: number
    unit: 'sat' | 'msat'
}

export interface Payment {
    amount: number, fee: number, memo: string, time: number, expiry: number, walletId: string, pending: boolean
}

export interface PaymentUser {
    id: string
    name: string
    email: string
    password: string
    wallets: PaymentWallet[]
}

export interface PaymentWallet {
    id: string
    name: string
    user: string
    adminKey: string
    invoiceKey: string
}

export interface UserCreateDto {
    userName: string
    password: string
    email: string
    walletName: string
}

export interface UserCreateResponse {
    id: string
    name: string
    email: string
    password: string
    wallets: PaymentWallet[]
}


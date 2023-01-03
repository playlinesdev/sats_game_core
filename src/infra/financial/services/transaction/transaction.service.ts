import { Injectable } from '@nestjs/common';
import { InvoiceCreateDto, InvoicePayDto } from 'src/domain/financial/financial_repository.interface';
import { FinancialRepositoryImpl } from '../../repositories/financial_repository_impl.repository';

@Injectable()
export class TransactionService {

    constructor(private financialRepository: FinancialRepositoryImpl) { }

    getUserPayments(data: { userId?: string; walletId?: string; }) {
        return this.financialRepository.getTransactionsForUser(data)
    }

    createInvoice(createDto: InvoiceCreateDto) {
        return this.financialRepository.createInvoice(createDto)
    }

    payInvoice(dto: InvoicePayDto) {
        return this.financialRepository.payInvoice(dto)
    }

    payToUser(data: { recipientId: string; amount: number; }) {
        return this.financialRepository.payToUser(data)
    }

    userPayToGame(data: { payerId: string; amount: number; }) {
        return this.financialRepository.userPayToGame(data)
    }

    userPayToUser(data: { recipientId: string, payerId: string, amount: number }) {
        return this.financialRepository.userPayToUser(data)
    }
}

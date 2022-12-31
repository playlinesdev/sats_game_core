import { Module } from '@nestjs/common';
import { TransactionController } from './controllers/transaction/transaction.controller';
import { FinancialRepositoryImpl } from './repositories/financial_repository_impl.repository';
import { TransactionService } from './services/transaction/transaction.service';

@Module({
  controllers: [TransactionController],
  providers: [
    FinancialRepositoryImpl,
    // { provide: IFinancialRepository, useClass: FinancialRepositoryImpl },
    TransactionService],

})
export class FinancialModule { }

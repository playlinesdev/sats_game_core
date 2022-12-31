import { Controller, Get, Query } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { ApiBody, ApiQuery } from '@nestjs/swagger';
import { InvoiceCreateDto, InvoicePayDto } from 'src/domain/financial/financial_repository.interface';
import { TransactionService } from '../../services/transaction/transaction.service';

@Controller('transaction')
export class TransactionController {
    constructor(private service: TransactionService) { }

    @ApiQuery({ required: false, name: 'userId', type: String })
    @ApiQuery({ required: false, name: 'walletId', type: String })
    @Get('/userPayments')
    getInvoices(@Query('userId') userId?: string, @Query('walletId') walletId?: string): Promise<any> {
        return this.service.getUserPayments({ userId: userId, walletId: walletId })
    }

    @ApiBody({ required: true })
    @Post('createInvoice')
    createInvoice(@Body() createDto: InvoiceCreateDto): Promise<any> {
        return this.service.createInvoice(createDto)
    }

    @ApiBody({ required: true })
    @Post('payInvoice')
    payInvoice(@Body() dto: InvoicePayDto): Promise<any> {
        return this.service.payInvoice(dto)
    }

    @ApiBody({ required: true })
    @Post('payToUser')
    payToUser(@Body() data: { recipientId: string; amount: number; }): Promise<any> {
        return this.service.payToUser(data)
    }

    @ApiBody({ required: true })
    @Post('userPayToGame')
    userPayToGame(@Body() data: { payerId: string; amount: number; }): Promise<any> {
        return this.service.userPayToGame(data)
    }

    @ApiBody({ required: true })
    @Post('userPayToUser')
    async userPayToUser(@Body() data: { recipientId: string, payerId: string, amount: number }) {
        return this.service.userPayToUser(data)
    }
}

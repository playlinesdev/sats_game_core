import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infra/config/environment-config/environment-config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule } from './infra/core/core.module';
import { FinancialModule } from './infra/financial/financial.module';

let host = process.env.DATABASE_HOST
let port = process.env.DATABASE_PORT
let user = process.env.DATABASE_USER
let pass = process.env.DATABASE_PASSWORD
const dbUrl = `mongodb://${user}:${pass}@${host}:${port}/`
console.log(dbUrl)

@Module({
  imports: [
    EnvironmentConfigModule,
    MongooseModule.forRoot(dbUrl),
    CoreModule,
    FinancialModule
  ],
  controllers: [],
})
export class AppModule { }

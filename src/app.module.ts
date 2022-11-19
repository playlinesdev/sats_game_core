import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infra/config/environment-config/environment-config.module';
import { TypeormConfigModule } from './infra/config/typeorm/typeorm.module';

@Module({
  imports: [EnvironmentConfigModule, TypeormConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { EnvironmentConfigService } from './environment-config.service';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: join(process.cwd(), '.env'),
    // ignoreEnvFile: process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'test' ? false : true,
    isGlobal: true,
  }),
  ],
  providers: [EnvironmentConfigService],
  exports: [EnvironmentConfigService]
})
export class EnvironmentConfigModule { }

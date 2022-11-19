import { Injectable } from '@nestjs/common';
import { IDatabaseConfig } from './database_config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentConfigService implements IDatabaseConfig {
    constructor(private config: ConfigService) { }

    getDatabaseHost(): string {
        return this.config.get<string>('DATABASE_HOST')
    }
    getDatabasePort(): number {
        return this.config.get<number>('DATABASE_PORT')
    }
    getDatabaseName(): string {
        return this.config.get<string>('DATABASE_NAME')
    }
    getDatabaseUser(): string {
        return this.config.get<string>('DATABASE_USER')
    }
    getDatabasePassword(): string {
        return this.config.get<string>('DATABASE_PASSWORD')
    }
    getDatabaseSchema(): string {
        return this.config.get<string>('DATABASE_SCHEMA')
    }
    getDatabaseSync(): boolean {
        return this.config.get<boolean>('DATABASE_SYNCHRONIZE')
    }
}

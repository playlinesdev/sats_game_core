export interface IDatabaseConfig {
    getDatabaseHost(): String;
    getDatabasePort(): number;
    getDatabaseName(): String;
    getDatabaseUser(): String;
    getDatabasePassword(): String;
    getDatabaseSchema(): String;
    getDatabaseUrl(): String;
    getDatabaseSync(): boolean;
}
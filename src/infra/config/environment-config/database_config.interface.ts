export interface IDatabaseConfig {
    getDatabaseHost(): String;
    getDatabasePort(): number;
    getDatabaseName(): String;
    getDatabaseUser(): String;
    getDatabasePassword(): String;
    getDatabaseSchema(): String;
    getDatabaseSync(): boolean;
}
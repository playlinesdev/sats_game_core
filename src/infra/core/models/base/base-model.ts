import { BaseEntity } from "typeorm";

export abstract class BaseModel<T, M> {
    abstract toEntity(): T
    static fromEntity<M>(): M {
        throw new Error('Must be implemented for model subclasses')
    }
}
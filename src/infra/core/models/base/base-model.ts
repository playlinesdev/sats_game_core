import { IBaseCreateDto } from "src/domain/core/dto/base/base-create.dto";
import { BaseEntity } from "src/domain/core/entities/core/base-entity";

export abstract class BaseModel<T> {
    constructor(createDto: IBaseCreateDto) { }
    abstract toEntity(): T
}

import { IBaseCrudController } from "./base/base-crud.controller";

export abstract class LandPlotTypeAbstract implements IBaseCrudController {
    abstract findOne(id: String): Promise<Object>;
    abstract find(query: any): Promise<Object[]>;
    abstract create(object: any): Promise<Object>;
    abstract update(id: String, data: any): Promise<Object>
    abstract deleteById(id: String): Promise<boolean>
    abstract deleteByQuery(query: any): Promise<boolean>
}
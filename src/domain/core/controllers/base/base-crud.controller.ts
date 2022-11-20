export interface IBaseCrudController {
    findOne(id: String): Promise<Object>
    find(query: any): Promise<Object[]>
    create(object: any): Promise<Object>
    update(id: String, data: any): Promise<Object>
    deleteById(id: String): Promise<boolean>
    deleteByQuery(query: any): Promise<boolean>
}
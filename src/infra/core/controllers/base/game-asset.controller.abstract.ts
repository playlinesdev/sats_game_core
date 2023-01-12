import { GameAssetService } from "../../services/game-asset/game-asset.service";
import { IBaseCrudController } from "./base-crud.controller";

export class GameAssetController implements IBaseCrudController {
    constructor(private gameAssetService: GameAssetService) { }

    findOne(id: String): Promise<Object> {
        throw new Error("Method not implemented.");
    }
    find(query: any): Promise<Object[]> {
        throw new Error("Method not implemented.");
    }
    create(object: any): Promise<Object> {
        throw new Error("Method not implemented.");
    }
    update(id: String, data: any): Promise<Object> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: String): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    deleteByQuery(query: any): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
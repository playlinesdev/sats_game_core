import { BaseModel } from "src/infra/core/models/base/base-model";
import { CreateUpdateGameAssetDto } from "../core/dto/game-asset/create-update-game-asset.dto";
import { GameAssetSearchDto } from "../core/dto/game-asset/game-asset-search.dto";
import GameAsset from "../core/entities/game-asset.entity";

export interface IGameAssetRepository {
    findOne(params: GameAssetSearchDto): Promise<BaseModel<GameAsset>>
    findMany(params: GameAssetSearchDto): Promise<BaseModel<GameAsset>[]>
    create(params: CreateUpdateGameAssetDto): Promise<BaseModel<GameAsset>>
    update(id: String, params: CreateUpdateGameAssetDto): Promise<BaseModel<GameAsset>>
    deleteById(id: String): Promise<boolean>
    deleteByQuery(params: GameAssetSearchDto): Promise<boolean>
}

export const IGameAssetRepository = Symbol('IGameAssetRepository')
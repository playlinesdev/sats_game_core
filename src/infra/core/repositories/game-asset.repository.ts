import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUpdateGameAssetDto } from "src/domain/core/dto/game-asset/create-update-game-asset.dto";
import { GameAssetSearchDto } from "src/domain/core/dto/game-asset/game-asset-search.dto";
import GameAsset from "src/domain/core/entities/game-asset.entity";
import { IGameAssetRepository } from "src/domain/repositories/game-asset.repository.interface";
import { stringToObjectId } from "src/external/utils/objectid-transformer";
import { BaseModel } from "../models/base/base-model";
import { GameAssetDocument, GameAssetModel, GameAssetSchema } from "../models/game-asset.model";

export class GameAssetRepositoryImpl implements IGameAssetRepository {
    constructor(@InjectModel(GameAsset.name) private readonly model: Model<GameAssetDocument>) { }
    async findOne(params: GameAssetSearchDto): Promise<BaseModel<GameAsset>> {
        let gameAsset = await this.model.findOne(params)
        return gameAsset
    }
    async findMany(params: GameAssetSearchDto): Promise<BaseModel<GameAsset>[]> {
        let gameAssets = await this.model.find(params)
        return gameAssets
    }
    async create(params: CreateUpdateGameAssetDto): Promise<BaseModel<GameAsset>> {
        let gameAsset = await this.model.create(params)
        return gameAsset
    }
    async update(id: string, params: CreateUpdateGameAssetDto): Promise<BaseModel<GameAsset>> {
        let _id = stringToObjectId(id)
        await this.model.updateOne({ _id: _id }, params, { upsert: true })
        let landPlotType = await this.model.findOne({ _id: _id })
        return landPlotType
    }
    async deleteById(id: String): Promise<boolean> {
        await this.model.deleteOne({ _id: id })
        return true
    }
    async deleteByQuery(params: GameAssetSearchDto): Promise<boolean> {
        await this.model.deleteMany(params)
        return true
    }
}
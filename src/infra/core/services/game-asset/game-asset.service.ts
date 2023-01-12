import { Inject, Injectable } from '@nestjs/common';
import { CreateUpdateGameAssetDto } from 'src/domain/core/dto/game-asset/create-update-game-asset.dto';
import { GameAssetSearchDto } from 'src/domain/core/dto/game-asset/game-asset-search.dto';
import GameAsset from 'src/domain/core/entities/game-asset.entity';
import { IGameAssetRepository } from 'src/domain/repositories/game-asset.repository.interface';
import { BaseModel } from '../../models/base/base-model';

@Injectable()
export class GameAssetService {
    constructor(@Inject(IGameAssetRepository) private repository: IGameAssetRepository) { }

    findOne(params: GameAssetSearchDto): Promise<BaseModel<GameAsset>> {
        return this.repository.findOne(params)
    }
    findMany(params: GameAssetSearchDto): Promise<BaseModel<GameAsset>[]> {
        return this.repository.findMany(params)
    }
    create(params: CreateUpdateGameAssetDto): Promise<BaseModel<GameAsset>> {
        return this.repository.create(params)
    }
    update(id: string, params: CreateUpdateGameAssetDto): Promise<BaseModel<GameAsset>> {
        return this.repository.update(id, params)
    }
    deleteById(id: string): Promise<boolean> {
        return this.repository.deleteById(id)
    }
    deleteByQuery(params: GameAssetSearchDto): Promise<boolean> {
        return this.repository.deleteByQuery(params)
    }
}

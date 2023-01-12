import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import e from "express";
import { HydratedDocument } from "mongoose";
import GameAsset from "src/domain/core/entities/game-asset.entity";
import { GameAssetType } from "src/external/enum/game-asset-type.enum";
import { BaseModel } from "./base/base-model";

export type GameAssetDocument = HydratedDocument<GameAssetModel>

@Schema()
export class GameAssetModel extends BaseModel<GameAsset>{
    toEntity(): GameAsset {
        return {
            description: this.description,
            name: this.name,
            type: this.type
        }
    }

    @Prop({ required: true })
    description: string

    @Prop({ required: true })
    name: string

    @Prop({
        required: true,
        enum: [GameAssetType.animal, GameAssetType.plant, GameAssetType.product, GameAssetType.structure, GameAssetType.uncategorized]
    })
    type: GameAssetType
}

export const GameAssetSchema = SchemaFactory.createForClass(GameAssetModel)
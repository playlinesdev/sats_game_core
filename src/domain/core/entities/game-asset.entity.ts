import { Prop, Schema } from "@nestjs/mongoose";
import { GameAssetType } from "src/external/enum/game-asset-type.enum";

// @Schema()
export default class GameAsset {
    // @Prop({ required: true })
    name: String

    // @Prop({
    //     enum: [GameAssetType.animal, GameAssetType.plant, GameAssetType.product, GameAssetType.structure, GameAssetType.uncategorized]
    // })
    type: GameAssetType
}
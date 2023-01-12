import { GameAssetType } from "src/external/enum/game-asset-type.enum"

export type GameAssetSearchDto = {
    _id?: String,
    name?: string
    description?: string
    type?: GameAssetType
}
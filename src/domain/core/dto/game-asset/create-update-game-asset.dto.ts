import { GameAssetType } from "src/external/enum/game-asset-type.enum";
import { IBaseCreateDto } from "../base/base-create.dto";

export class CreateUpdateGameAssetDto implements IBaseCreateDto {
    constructor(params: { name: string, description: string, type: GameAssetType }) {
        this.name = params.name
        this.description = params.description
        this.type = params.type
    }

    name: string
    description: string
    type: GameAssetType
}
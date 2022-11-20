import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"
import GameAsset from "./game-asset.entity";

// export type CropSlotDocument = HydratedDocument<CropSlot>;

export class CropSlot {
    plantedAsset: GameAsset

    plantedAt: Date
}

// export const CropSlotSchema = SchemaFactory.createForClass(CropSlot)
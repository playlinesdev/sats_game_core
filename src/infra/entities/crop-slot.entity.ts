import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"
import GameAsset from "./game-asset.entity";

export type CropSlotDocument = HydratedDocument<CropSlot>;

@Schema()
export class CropSlot {
    @Prop({ required: false })
    plantedAsset: GameAsset

    @Prop({ type: Date, required: false })
    plantedAt: Date
}

export const CropSlotSchema = SchemaFactory.createForClass(CropSlot)
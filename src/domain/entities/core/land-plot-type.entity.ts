import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type LandPlotTypeDocument = HydratedDocument<LandPlotType>

@Schema()
export class LandPlotType {
    @Prop({ required: true, type: String })
    name: string
}

export const LandPlotTypeSchema = SchemaFactory.createForClass(LandPlotType)
import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"
import { LandPlotType } from "src/domain/core/entities/land-plot-type.entity"
import { LandPlot } from "src/domain/core/entities/land-plot.entity"
import { BaseModel } from "./base/base-model"

export type LandPlotTypeDocument = HydratedDocument<LandPlotType>

@Schema()
export class LandPlotTypeModel extends BaseModel<LandPlotType> {
    toEntity(): LandPlotType {
        return {
            name: this.name
        }
    }
    @Prop({ required: true, type: String })
    name: string
}

export const LandPlotTypeSchema = SchemaFactory.createForClass(LandPlotType)
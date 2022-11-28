import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { CropSlot } from "src/domain/core/entities/crop-slot.entity";
import { LandPlotType } from "src/domain/core/entities/land-plot-type.entity";
import { LandPlot } from "src/domain/core/entities/land-plot.entity";
import { LandPlotQuality } from "src/external/enum/landplot-quality.enum";
import { BaseModel } from "./base/base-model";

export type LandPlotDocument = HydratedDocument<LandPlotModel>

@Schema()
export class LandPlotModel extends BaseModel<LandPlot, LandPlotModel> {
    @Prop({ required: true })
    x: number

    @Prop({ required: true })
    y: number

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'LandPlotType' })
    landPlotType: LandPlotType

    @Prop({
        enum: [LandPlotQuality.regular, LandPlotQuality.poor, LandPlotQuality.rare, LandPlotQuality.epic]
    })
    landPlotQuality: LandPlotQuality

    crops: CropSlot[]

    toEntity(): LandPlot {
        return {
            x: this.x,
            y: this.y,
            landPlotQuality: this.landPlotQuality,
            landPlotType: this.landPlotType,
            crops: this.crops
        }
    }
}

export const LandPlotSchema = SchemaFactory.createForClass(LandPlot)
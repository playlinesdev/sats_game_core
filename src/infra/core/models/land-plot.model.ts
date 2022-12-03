import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { CreateLandPlotDto } from "src/domain/core/dto/land-plot/create-land-plot-dto";
import { CropSlot } from "src/domain/core/entities/crop-slot.entity";
import { LandPlot } from "src/domain/core/entities/land-plot.entity";
import { LandPlotQuality } from "src/external/enum/landplot-quality.enum";
import { BaseModel } from "./base/base-model";

export type LandPlotDocument = HydratedDocument<LandPlotModel>

@Schema()
export class LandPlotModel extends BaseModel<LandPlot> {
    constructor(createDto: CreateLandPlotDto) {
        super(createDto);
        this.x = createDto.x
        this.y = createDto.y
        this.landPlotQuality = createDto.landPlotQuality
        this.landPlotTypeId = createDto.landPlotTypeId
    }

    @Prop({ required: true })
    x: number

    @Prop({ required: true })
    y: number

    @Prop({ required: true, type: String })
    landPlotTypeId: string

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
            landPlotTypeId: this.landPlotTypeId,
            crops: this.crops
        }
    }
}

export const LandPlotSchema = SchemaFactory.createForClass(LandPlotModel)
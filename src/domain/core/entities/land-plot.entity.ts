import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { LandPlotQuality } from 'src/external/enum/landplot-quality.enum';
import mongoose, { HydratedDocument } from 'mongoose';
import { LandPlotType } from './land-plot-type.entity';
import { CropSlot } from './crop-slot.entity';

export type LandPlotDocument = HydratedDocument<LandPlot>

@Schema()
export class LandPlot {
    @Prop({ required: true })
    x: number

    @Prop({ required: true })
    y: number

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'LandPlotType' })
    plotType: LandPlotType

    @Prop({
        enum: [LandPlotQuality.regular, LandPlotQuality.poor, LandPlotQuality.rare, LandPlotQuality.epic]
    })
    quality: LandPlotQuality

    crops: CropSlot[]
}

export const LandPlotSchema = SchemaFactory.createForClass(LandPlot)
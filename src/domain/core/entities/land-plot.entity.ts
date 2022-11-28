import { LandPlotQuality } from 'src/external/enum/landplot-quality.enum';
import { LandPlotType } from './land-plot-type.entity';
import { CropSlot } from './crop-slot.entity';

export class LandPlot {
    x: number
    y: number
    landPlotType: LandPlotType
    landPlotQuality: LandPlotQuality
    crops: CropSlot[]
}


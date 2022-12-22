import { LandPlotQuality } from 'src/external/enum/landplot-quality.enum';
import { StructureAbstract } from './core/structure.abstract';
import { CropSlot } from './crop-slot.entity';

export class LandPlot {
    x: number
    y: number
    landPlotTypeId: string
    landPlotQuality: LandPlotQuality
    buildings: StructureAbstract[]
    crops: CropSlot[]
}


import { Module } from '@nestjs/common';
import { LandPlotTypeController } from './controllers/land-plot-type/land-plot-type.controller';
import { LandPlotController } from './controllers/land-plot/land-plot.controller';
import { LandPlotService } from './services/land-plot/land-plot.service';

@Module({
    controllers: [LandPlotController, LandPlotTypeController],
    providers: [LandPlotService]
})
export class CoreModule { }

import { Module } from '@nestjs/common';
import { LandPlotTypeController } from './controllers/land-plot-type/land-plot-type.controller';
import { LandPlotController } from './controllers/land-plot/land-plot.controller';

@Module({
    controllers: [LandPlotController, LandPlotTypeController]
})
export class CoreModule { }

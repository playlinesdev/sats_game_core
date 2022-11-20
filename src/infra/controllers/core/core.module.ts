import { Module } from '@nestjs/common';
import { LandPlotController } from './land-plot/land-plot.controller';

@Module({
    controllers: [LandPlotController]
})
export class CoreModule { }

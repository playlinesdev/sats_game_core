import { Module } from '@nestjs/common';
import { LandPlotController } from 'src/infra/controllers/core/land-plot/land-plot.controller';

@Module({
    controllers: [LandPlotController]
})
export class CoreModule { }

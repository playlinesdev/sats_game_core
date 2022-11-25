import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LandPlot, LandPlotSchema } from 'src/domain/core/entities/land-plot.entity';
import { LandPlotController } from './controllers/land-plot/land-plot.controller';
import { LandPlotRepositoryImpl } from './repositories/land-plot.repository';
import { LandPlotService } from './services/land-plot/land-plot.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: LandPlot.name, schema: LandPlotSchema }])],
    controllers: [LandPlotController],
    providers: [LandPlotService, LandPlotRepositoryImpl],

})
export class CoreModule { }

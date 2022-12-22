import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LandPlotController } from './controllers/land-plot/land-plot.controller';
import { LandPlotRepositoryImpl } from './repositories/land-plot.repository';
import { LandPlotService } from './services/land-plot/land-plot.service';
import { LandPlotTypeService } from './services/land-plot-type/land-plot-type.service';
import { LandPlotTypeRepositoryImpl } from './repositories/land-plot-type.repository';
import { LandPlotTypeController } from './controllers/land-plot-type/land-plot-type.controller';
import { LandPlotType, LandPlotTypeSchema } from 'src/domain/core/entities/land-plot-type.entity';
import { ILandPlotTypeRepository } from '../../domain/repositories/land-plot-type.repository.interface';
import { LandPlotModel, LandPlotSchema } from './models/land-plot.model';
import { ILandPlotRepository } from 'src/domain/repositories/land-plot-repository.interface';

@Module({
    imports: [MongooseModule.forFeature([
        { name: LandPlotModel.name, schema: LandPlotSchema },
        { name: LandPlotType.name, schema: LandPlotTypeSchema },
    ])],
    controllers: [LandPlotController, LandPlotTypeController],
    providers: [
        LandPlotService,
        LandPlotRepositoryImpl,
        LandPlotTypeService,
        { provide: ILandPlotRepository, useClass: LandPlotRepositoryImpl },
        { provide: ILandPlotTypeRepository, useClass: LandPlotTypeRepositoryImpl }
    ],
})
export class CoreModule { }

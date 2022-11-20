import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infra/config/environment-config/environment-config.module';
import { LandPlot } from './infra/entities/land-plot.entity';
import { CropSlot } from './infra/entities/crop-slot.entity';
import GameAsset from './infra/entities/game-asset.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { LandPlotType } from './infra/entities/land-plot-type.entity';

@Module({
  imports: [EnvironmentConfigModule, MongooseModule.forRoot('mongodb://root:root@localhost:27017/')],
  controllers: [],
  providers: [LandPlot, LandPlotType, CropSlot, GameAsset],
})
export class AppModule { }

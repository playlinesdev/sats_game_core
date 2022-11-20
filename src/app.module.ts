import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infra/config/environment-config/environment-config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CropSlot } from './domain/core/entities/crop-slot.entity';
import { CoreModule } from './domain/core/core.module';
import GameAsset from './domain/core/entities/game-asset.entity';
import { LandPlotType } from './domain/core/entities/land-plot-type.entity';
import { LandPlot } from './domain/core/entities/land-plot.entity';

@Module({
  imports: [EnvironmentConfigModule, MongooseModule.forRoot('mongodb://root:root@localhost:27017/'), CoreModule],
  controllers: [],
  providers: [LandPlot, LandPlotType, CropSlot, GameAsset],
})
export class AppModule { }

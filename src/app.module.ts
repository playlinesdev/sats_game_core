import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infra/config/environment-config/environment-config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CropSlot } from './domain/entities/core/crop-slot.entity';
import GameAsset from './domain/entities/core/game-asset.entity';
import { LandPlotType } from './domain/entities/core/land-plot-type.entity';
import { LandPlot } from './domain/entities/core/land-plot.entity';
import { CoreModule } from './domain/entities/core/core.module';

@Module({
  imports: [EnvironmentConfigModule, MongooseModule.forRoot('mongodb://root:root@localhost:27017/'), CoreModule],
  controllers: [],
  providers: [LandPlot, LandPlotType, CropSlot, GameAsset],
})
export class AppModule { }

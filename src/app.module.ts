import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infra/config/environment-config/environment-config.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { CoreModule } from './domain/core/core.module';
import { CoreModule } from './infra/core/core.module';

@Module({
  imports: [EnvironmentConfigModule, MongooseModule.forRoot('mongodb://root:root@localhost:27017/'), CoreModule],
  controllers: [],
  // providers: []
  // providers: [LandPlot, LandPlotType, CropSlot, GameAsset],
})
export class AppModule { }

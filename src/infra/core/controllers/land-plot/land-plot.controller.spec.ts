import { Test, TestingModule } from '@nestjs/testing';
import { LandPlotController } from './land-plot.controller';

describe('LandPlotController', () => {
  let controller: LandPlotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LandPlotController],
    }).compile();

    controller = module.get<LandPlotController>(LandPlotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { LandPlotTypeController } from './land-plot-type.controller';

describe('LandPlotTypeController', () => {
  let controller: LandPlotTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LandPlotTypeController],
    }).compile();

    controller = module.get<LandPlotTypeController>(LandPlotTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { LandPlotService } from './land-plot.service';

describe('LandPlotService', () => {
  let service: LandPlotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LandPlotService],
    }).compile();

    service = module.get<LandPlotService>(LandPlotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

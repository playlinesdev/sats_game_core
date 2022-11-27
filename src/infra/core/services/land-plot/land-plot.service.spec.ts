import { Test, TestingModule } from '@nestjs/testing';
import { ILandPlotRepository } from '../../repositories/base/land-plot-repository.interface';
import { LandPlotService } from './land-plot.service';
import { Mock } from 'moq.ts'

describe('LandPlotService', () => {
  let service: LandPlotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LandPlotService,
        {
          useClass: Mock<ILandPlotRepository>,
          provide: ILandPlotRepository,
        }
      ],
    }).compile();

    service = module.get<LandPlotService>(LandPlotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

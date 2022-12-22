import { Test, TestingModule } from '@nestjs/testing';
import { LandPlotService } from './land-plot.service';
import { Mock } from 'moq.ts'
import { ILandPlotRepository } from 'src/domain/repositories/land-plot-repository.interface';

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

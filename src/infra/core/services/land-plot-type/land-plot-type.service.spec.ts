import { Test, TestingModule } from '@nestjs/testing';
import { ILandPlotTypeRepository } from '../../../../domain/repositories/land-plot-type.repository.interface';
import { LandPlotTypeService } from './land-plot-type.service';
import { Mock } from "moq.ts";

describe('LandPlotTypeService', () => {
  let service: LandPlotTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LandPlotTypeService,
        {
          useClass: Mock<ILandPlotTypeRepository>,
          provide: ILandPlotTypeRepository,
        }
      ],
    }).compile();

    service = module.get<LandPlotTypeService>(LandPlotTypeService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });
});

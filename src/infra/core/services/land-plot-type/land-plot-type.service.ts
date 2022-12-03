import { Inject, Injectable } from '@nestjs/common';
import { CreateUpdateLandPlotTypeDto } from 'src/domain/core/dto/land-plot-type/create-update-land-plot.dto';
import { LandPlotTypeSearchDto } from 'src/domain/core/dto/land-plot-type/land-plot-type-search.dto';
import { LandPlotType } from 'src/domain/core/entities/land-plot-type.entity';
import { ILandPlotTypeRepository } from '../../../../domain/repositories/land-plot-type.repository.interface';

@Injectable()
export class LandPlotTypeService {
    constructor(@Inject(ILandPlotTypeRepository) private repository: ILandPlotTypeRepository) { }

    findOne(params: LandPlotTypeSearchDto): Promise<LandPlotType> {
        return this.repository.findOne(params)
    }
    findMany(params: LandPlotTypeSearchDto): Promise<LandPlotType[]> {
        return this.repository.findMany(params)
    }
    create(params: CreateUpdateLandPlotTypeDto): Promise<LandPlotType> {
        return this.repository.create(params)
    }
    update(id: string, params: CreateUpdateLandPlotTypeDto): Promise<LandPlotType> {
        return this.repository.update(id, params)
    }
    deleteById(id: string): Promise<boolean> {
        return this.repository.deleteById(id)
    }
    deleteByQuery(params: CreateUpdateLandPlotTypeDto): Promise<boolean> {
        return this.repository.deleteByQuery(params)
    }
}

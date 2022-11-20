import { Injectable } from '@nestjs/common';
import { CreateLandPlotDto } from 'src/domain/core/dto/land-plot/create-land-plot-dto';
import { LandPlotSearchDto } from 'src/domain/core/dto/land-plot/land-plot-search.dto';
import { UpdateLandPlotDto } from 'src/domain/core/dto/land-plot/update-land-plot.dto';
import { LandPlotModel } from '../../models/land-plot.model';
import { LandPlotRepositoryImpl } from '../../repositories/land-plot.repository';

@Injectable()
export class LandPlotService {
    constructor(private repository: LandPlotRepositoryImpl) { }

    findOne(params: LandPlotSearchDto): Promise<LandPlotModel> {
        return this.repository.findOne(params)
    }
    findMany(params: LandPlotSearchDto): Promise<[LandPlotModel]> {
        return this.repository.findMany(params)
    }
    create(params: CreateLandPlotDto): Promise<LandPlotModel> {
        return this.repository.create(params)
    }
    update(params: UpdateLandPlotDto): Promise<LandPlotModel> {
        return this.repository.update(params)
    }
    deleteById(id: String): Promise<boolean> {
        return this.repository.deleteById(id)
    }
    deleteByQuery(params: LandPlotSearchDto): Promise<boolean> {
        return this.repository.deleteByQuery(params)
    }
}

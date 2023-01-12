import { Inject, Injectable } from '@nestjs/common';
import { CreateLandPlotDto } from 'src/domain/core/dto/land-plot/create-land-plot-dto';
import { LandPlotSearchDto } from 'src/domain/core/dto/land-plot/land-plot-search.dto';
import { UpdateLandPlotDto } from 'src/domain/core/dto/land-plot/update-land-plot.dto';
import { LandPlot } from 'src/domain/core/entities/land-plot.entity';
import { ILandPlotRepository } from 'src/domain/repositories/land-plot-repository.interface';
import { BaseModel } from '../../models/base/base-model';

@Injectable()
export class LandPlotService {
    constructor(@Inject(ILandPlotRepository) private repository: ILandPlotRepository) { }

    findOne(params: LandPlotSearchDto): Promise<BaseModel<LandPlot>> {
        return this.repository.findOne(params)
    }
    findMany(params: LandPlotSearchDto): Promise<BaseModel<LandPlot>[]> {
        return this.repository.findMany(params)
    }
    create(params: CreateLandPlotDto): Promise<BaseModel<LandPlot>> {
        return this.repository.create(params)
    }
    update(id: string, params: UpdateLandPlotDto): Promise<BaseModel<LandPlot>> {
        return this.repository.update(id, params)
    }
    deleteById(id: string): Promise<boolean> {
        return this.repository.deleteById(id)
    }
    deleteByQuery(params: LandPlotSearchDto): Promise<boolean> {
        return this.repository.deleteByQuery(params)
    }
}


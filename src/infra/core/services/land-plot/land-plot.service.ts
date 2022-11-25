import { Injectable } from '@nestjs/common';
import { CreateLandPlotDto } from 'src/domain/core/dto/land-plot/create-land-plot-dto';
import { LandPlotSearchDto } from 'src/domain/core/dto/land-plot/land-plot-search.dto';
import { UpdateLandPlotDto } from 'src/domain/core/dto/land-plot/update-land-plot.dto';
import { LandPlot } from 'src/domain/core/entities/land-plot.entity';
import { LandPlotRepositoryImpl } from '../../repositories/land-plot.repository';

@Injectable()
export class LandPlotService {
    constructor(private repository: LandPlotRepositoryImpl) { }

    findOne(params: LandPlotSearchDto): Promise<LandPlot> {
        return this.repository.findOne(params)
    }
    findMany(params: LandPlotSearchDto): Promise<LandPlot[]> {
        return this.repository.findMany(params)
    }
    create(params: CreateLandPlotDto): Promise<LandPlot> {
        return this.repository.create(params)
    }
    update(id: string, params: UpdateLandPlotDto): Promise<LandPlot> {
        return this.repository.update(id, params)
    }
    deleteById(id: string): Promise<boolean> {
        return this.repository.deleteById(id)
    }
    deleteByQuery(params: LandPlotSearchDto): Promise<boolean> {
        return this.repository.deleteByQuery(params)
    }
}

import { CreateLandPlotDto } from "src/domain/core/dto/land-plot/create-land-plot-dto"
import { LandPlotSearchDto } from "src/domain/core/dto/land-plot/land-plot-search.dto"
import { UpdateLandPlotDto } from "src/domain/core/dto/land-plot/update-land-plot.dto"
import { LandPlot } from "src/domain/core/entities/land-plot.entity"
import { BaseModel } from "src/infra/core/models/base/base-model"

export interface ILandPlotRepository {
    findOne(params: LandPlotSearchDto): Promise<BaseModel<LandPlot>>
    findMany(params: LandPlotSearchDto): Promise<BaseModel<LandPlot>[]>
    create(params: CreateLandPlotDto): Promise<BaseModel<LandPlot>>
    update(id: String, params: UpdateLandPlotDto): Promise<BaseModel<LandPlot>>
    deleteById(id: String): Promise<boolean>
    deleteByQuery(params: LandPlotSearchDto): Promise<boolean>
}

export const ILandPlotRepository = Symbol('ILandPlotRepository')
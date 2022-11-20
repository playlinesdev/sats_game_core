import { CreateLandPlotDto } from "src/domain/core/dto/land-plot/create-land-plot-dto"
import { LandPlotSearchDto } from "src/domain/core/dto/land-plot/land-plot-search.dto"
import { UpdateLandPlotDto } from "src/domain/core/dto/land-plot/update-land-plot.dto"
import { LandPlotModel } from "../../models/land-plot.model"

export interface ILandPlotRepository {
    findOne(params: LandPlotSearchDto): Promise<LandPlotModel>
    findMany(params: LandPlotSearchDto): Promise<[LandPlotModel]>
    create(params: CreateLandPlotDto): Promise<LandPlotModel>
    update(params: UpdateLandPlotDto): Promise<LandPlotModel>
    deleteById(id: String): Promise<boolean>
    deleteByQuery(params: LandPlotSearchDto): Promise<boolean>
}
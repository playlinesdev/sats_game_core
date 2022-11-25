import { CreateLandPlotDto } from "src/domain/core/dto/land-plot/create-land-plot-dto"
import { LandPlotSearchDto } from "src/domain/core/dto/land-plot/land-plot-search.dto"
import { UpdateLandPlotDto } from "src/domain/core/dto/land-plot/update-land-plot.dto"
import { LandPlot } from "src/domain/core/entities/land-plot.entity"

export interface ILandPlotRepository {
    findOne(params: LandPlotSearchDto): Promise<LandPlot>
    findMany(params: LandPlotSearchDto): Promise<LandPlot[]>
    create(params: CreateLandPlotDto): Promise<LandPlot>
    update(id: String, params: UpdateLandPlotDto): Promise<LandPlot>
    deleteById(id: String): Promise<boolean>
    deleteByQuery(params: LandPlotSearchDto): Promise<boolean>
}
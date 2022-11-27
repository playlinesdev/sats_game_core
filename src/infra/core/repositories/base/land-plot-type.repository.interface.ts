import { CreateUpdateLandPlotTypeDto } from "src/domain/core/dto/land-plot-type/create-update-land-plot.dto"
import { LandPlotTypeSearchDto } from "src/domain/core/dto/land-plot-type/land-plot-type-search.dto"
import { LandPlotType } from "src/domain/core/entities/land-plot-type.entity"

export interface ILandPlotTypeRepository {
    findOne(params: LandPlotTypeSearchDto): Promise<LandPlotType>
    findMany(params: LandPlotTypeSearchDto): Promise<LandPlotType[]>
    create(params: CreateUpdateLandPlotTypeDto): Promise<LandPlotType>
    update(id: String, params: CreateUpdateLandPlotTypeDto): Promise<LandPlotType>
    deleteById(id: String): Promise<boolean>
    deleteByQuery(params: CreateUpdateLandPlotTypeDto): Promise<boolean>
}

export const ILandPlotTypeRepository = Symbol('ILandPlotTypeRepository')
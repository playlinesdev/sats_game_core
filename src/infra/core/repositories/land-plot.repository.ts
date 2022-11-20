import { CreateLandPlotDto } from "src/domain/core/dto/land-plot/create-land-plot-dto";
import { LandPlotSearchDto } from "src/domain/core/dto/land-plot/land-plot-search.dto";
import { UpdateLandPlotDto } from "src/domain/core/dto/land-plot/update-land-plot.dto";
import { LandPlotModel } from "../models/land-plot.model";
import { ILandPlotRepository } from "./base/land-plot-repository.interface";

export class LandPlotRepositoryImpl implements ILandPlotRepository {
    findOne(params: LandPlotSearchDto): Promise<LandPlotModel> {
        throw new Error("Method not implemented.");
    }
    findMany(params: LandPlotSearchDto): Promise<[LandPlotModel]> {
        throw new Error("Method not implemented.");
    }
    create(params: CreateLandPlotDto): Promise<LandPlotModel> {
        throw new Error("Method not implemented.");
    }
    update(params: UpdateLandPlotDto): Promise<LandPlotModel> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: String): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    deleteByQuery(params: LandPlotSearchDto): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
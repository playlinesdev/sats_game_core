import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUpdateLandPlotTypeDto } from "src/domain/core/dto/land-plot-type/create-update-land-plot.dto";
import { LandPlotTypeSearchDto } from "src/domain/core/dto/land-plot-type/land-plot-type-search.dto";
import { LandPlotType } from "src/domain/core/entities/land-plot-type.entity";
import { ILandPlotTypeRepository } from "src/domain/repositories/land-plot-type.repository.interface";
import { stringToObjectId } from "src/external/utils/objectid-transformer";
import { LandPlotTypeDocument } from "../models/land-plot-type.model";

export class LandPlotTypeRepositoryImpl implements ILandPlotTypeRepository {
    constructor(@InjectModel(LandPlotType.name) private readonly landPlotTypeModel: Model<LandPlotTypeDocument>) { }

    async findOne(params: LandPlotTypeSearchDto): Promise<LandPlotType> {
        let landPlotType = await this.landPlotTypeModel.findOne(params)
        return landPlotType
    }
    async findMany(params: LandPlotTypeSearchDto): Promise<LandPlotType[]> {
        let landPlotTypes = await this.landPlotTypeModel.find(params)
        return landPlotTypes
    }
    async create(params: CreateUpdateLandPlotTypeDto): Promise<LandPlotType> {
        let landPlotType = await this.landPlotTypeModel.create(params)
        return landPlotType
    }
    async update(id: string, params: CreateUpdateLandPlotTypeDto): Promise<LandPlotType> {
        let _id = stringToObjectId(id)
        await this.landPlotTypeModel.updateOne({ _id: _id }, params, { upsert: true })
        let landPlotType = await this.landPlotTypeModel.findOne({ _id: _id })
        return landPlotType
    }
    async deleteById(id: string): Promise<boolean> {
        await this.landPlotTypeModel.deleteOne({ _id: id })
        return true
    }
    async deleteByQuery(params: CreateUpdateLandPlotTypeDto): Promise<boolean> {
        await this.landPlotTypeModel.deleteMany(params)
        return true
    }
}
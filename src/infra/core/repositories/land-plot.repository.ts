import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateLandPlotDto } from "src/domain/core/dto/land-plot/create-land-plot-dto";
import { LandPlotSearchDto } from "src/domain/core/dto/land-plot/land-plot-search.dto";
import { UpdateLandPlotDto } from "src/domain/core/dto/land-plot/update-land-plot.dto";
import { ILandPlotRepository } from "src/domain/repositories/land-plot-repository.interface";
import { stringToObjectId } from "src/external/utils/objectid-transformer";
import { LandPlotDocument, LandPlotModel } from "../models/land-plot.model";

export class LandPlotRepositoryImpl implements ILandPlotRepository {
    constructor(@InjectModel(LandPlotModel.name) private readonly plotModelObject: Model<LandPlotDocument>) { }

    async findOne(params: LandPlotSearchDto): Promise<LandPlotModel> {
        let landPlot = await this.plotModelObject.findOne(params);
        return landPlot
    }
    async findMany(params: LandPlotSearchDto): Promise<LandPlotModel[]> {
        let landPlots = await this.plotModelObject.find(params)
        return landPlots
    }

    async create(params: CreateLandPlotDto): Promise<LandPlotModel> {
        let dto = new CreateLandPlotDto({
            x: params.x,
            y: params.y,
            landPlotTypeId: params.landPlotTypeId,
            landPlotQuality: params.landPlotQuality
        })
        let model = new LandPlotModel(dto)
        let landPlot = await this.plotModelObject.create(model)
        return landPlot
    }

    async update(id: string, params: UpdateLandPlotDto): Promise<LandPlotModel> {
        let _id = stringToObjectId(id)
        await this.plotModelObject.updateOne({ _id: _id }, { $set: params }, { upsert: true })
        let landPlot = await this.plotModelObject.findOne({ _id: _id })
        return landPlot
    }

    async deleteById(id: string): Promise<boolean> {
        let _id = stringToObjectId(id)
        let result = await this.plotModelObject.deleteOne({ _id: _id })
        return result?.deletedCount > 0 ?? false
    }

    deleteByQuery(params: LandPlotSearchDto): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
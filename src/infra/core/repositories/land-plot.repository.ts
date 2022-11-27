import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateLandPlotDto } from "src/domain/core/dto/land-plot/create-land-plot-dto";
import { LandPlotSearchDto } from "src/domain/core/dto/land-plot/land-plot-search.dto";
import { UpdateLandPlotDto } from "src/domain/core/dto/land-plot/update-land-plot.dto";
import { LandPlot, LandPlotDocument } from "src/domain/core/entities/land-plot.entity";
import { stringToObjectId } from "src/external/utils/objectid-transformer";
import { ILandPlotRepository } from "./base/land-plot-repository.interface";

export class LandPlotRepositoryImpl implements ILandPlotRepository {
    constructor(@InjectModel(LandPlot.name) private readonly plotModelObject: Model<LandPlotDocument>) { }

    async findOne(params: LandPlotSearchDto): Promise<LandPlot> {
        let landPlot = await this.plotModelObject.findOne(params);
        return landPlot
    }
    async findMany(params: LandPlotSearchDto): Promise<LandPlot[]> {
        let landPlots = await this.plotModelObject.find(params)
        return landPlots
    }
    async create(params: CreateLandPlotDto): Promise<LandPlot> {
        let data = {
            x: params.x,
            y: params.y,
            landPlotType: stringToObjectId(params['landPlotType']),
            landPlotQuality: params.landPlotQuality
        }
        let landPlot = await this.plotModelObject.create(data)
        return landPlot
    }
    async update(id: string, params: UpdateLandPlotDto): Promise<LandPlot> {
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
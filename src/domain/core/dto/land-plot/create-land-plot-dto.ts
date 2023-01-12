import { ApiProperty } from "@nestjs/swagger"
import { LandPlotQuality } from "src/external/enum/landplot-quality.enum"
import { IBaseCreateDto } from "../base/base-create.dto"

export class CreateLandPlotDto implements IBaseCreateDto {
    constructor(params: { x: number, y: number, landPlotTypeId: string, landPlotQuality: number }) {
        this.x = params.x
        this.y = params.y
        this.landPlotTypeId = params.landPlotTypeId
        this.landPlotQuality = params.landPlotQuality
    }

    @ApiProperty({ name: 'x', type: Number })
    x: number

    @ApiProperty({ name: 'y', type: Number })
    y: number

    @ApiProperty({ name: 'landPlotTypeId', type: String })
    landPlotTypeId: string

    @ApiProperty({
        name: 'landPlotQuality', enum: [
            LandPlotQuality.poor,
            LandPlotQuality.regular,
            LandPlotQuality.rare,
            LandPlotQuality.epic
        ]
    })
    landPlotQuality: number
}
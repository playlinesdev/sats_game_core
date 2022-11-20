import { ApiProperty } from "@nestjs/swagger"

export class UpdateLandPlotDto {
    @ApiProperty({ name: '_id', type: String, required: false })
    _id?: String

    @ApiProperty({ name: 'x', type: Number })
    x: number

    @ApiProperty({ name: 'y', type: Number })
    y: number

    @ApiProperty({ name: 'landPlotType', type: Number })
    landPlotType: number

    @ApiProperty({ name: 'landPlotQuality', type: Number })
    landPlotQuality: number
}
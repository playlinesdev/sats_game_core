import { ApiProperty } from "@nestjs/swagger"

export class CreateLandPlotDto {
    @ApiProperty({ name: 'x', type: Number })
    x: number

    @ApiProperty({ name: 'y', type: Number })
    y: number

    @ApiProperty({ name: 'landPlotType', type: Number })
    landPlotType: number

    @ApiProperty({ name: 'landPlotQuality', type: Number })
    landPlotQuality: number
}
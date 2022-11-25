import { ApiProperty } from "@nestjs/swagger"
import { LandPlotQuality } from "src/external/enum/landplot-quality.enum"

export class CreateLandPlotDto {
    @ApiProperty({ name: 'x', type: Number })
    x: number

    @ApiProperty({ name: 'y', type: Number })
    y: number

    @ApiProperty({ name: 'landPlotType', type: String })
    landPlotType: string

    @ApiProperty({ name: 'landPlotQuality', enum: [LandPlotQuality.poor, LandPlotQuality.regular, LandPlotQuality.rare, LandPlotQuality.epic] })
    landPlotQuality: number
}
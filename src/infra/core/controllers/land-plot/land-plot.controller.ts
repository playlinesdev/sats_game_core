import { Controller, Delete, Get, Post, Put, Query, Param, Body, Inject } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { LandPlotControllerAbstract } from 'src/infra/core/controllers/base/land-plot.controller.abstract';
import { CreateLandPlotDto } from 'src/domain/core/dto/land-plot/create-land-plot-dto';
import { UpdateLandPlotDto } from 'src/domain/core/dto/land-plot/update-land-plot.dto';
import { LandPlotService } from '../../services/land-plot/land-plot.service';

@ApiTags('Land Plot')
@Controller('land-plot')
export class LandPlotController implements LandPlotControllerAbstract {
    constructor(@Inject(LandPlotService) private landPlotService: LandPlotService) { }

    @Get('/:id')
    findOne(@Param('id') id: String): Promise<Object> {
        return this.landPlotService.findOne({ _id: id })
    }

    @ApiQuery({ name: 'x', type: Number, required: false, example: 1 })
    @ApiQuery({ name: 'y', type: Number, required: false, example: 2 })
    @ApiQuery({ name: 'landPlotType', type: String, required: false, example: 3 })
    @ApiQuery({ name: 'landPlotQuality', type: Number, required: false, example: 4 })
    @Get('/find/query')
    async find(@Query() params: CreateLandPlotDto): Promise<Object[]> {
        return this.landPlotService.findMany(params)
    }

    @Post()
    create(@Body() createLandPlotDto: CreateLandPlotDto): Promise<Object> {
        return this.landPlotService.create(createLandPlotDto)
    }

    @ApiParam({ name: 'id', type: String })
    @Put(':id')
    update(@Param() id: string, @Body() data: UpdateLandPlotDto): Promise<Object> {
        return this.landPlotService.update(id, data)
    }

    @ApiParam({ name: 'id', type: String })
    @Delete(':id')
    deleteById(@Param() id: string): Promise<boolean> {
        return this.landPlotService.deleteById(id)
    }

    @ApiQuery({ name: 'id', type: String })
    @ApiQuery({ name: 'x', type: Number })
    @ApiQuery({ name: 'y', type: Number })
    @ApiQuery({ name: 'landPlotType', type: Number })
    @ApiQuery({ name: 'landPlotQuality', type: Number })
    @Delete('/query/q')
    deleteByQuery(@Query() params): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}

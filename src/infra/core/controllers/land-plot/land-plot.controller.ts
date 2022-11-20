import { Controller, Delete, Get, Post, Put, Query, Param, Body } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { LandPlotControllerAbstract } from 'src/infra/core/controllers/base/land-plot.controller.abstract';
import { CreateLandPlotDto } from 'src/domain/core/dto/land-plot/create-land-plot-dto';
import { UpdateLandPlotDto } from 'src/domain/core/dto/land-plot/update-land-plot.dto';

@ApiTags('Land Plot')
@Controller('land-plot')
export class LandPlotController implements LandPlotControllerAbstract {
    @Get('/:id')
    findOne(@Param('id') id: String): Promise<Object> {
        throw new Error('Method not implemented.');
    }

    @ApiQuery({ name: 'x', type: Number, required: false, example: 1 })
    @ApiQuery({ name: 'y', type: Number, required: false, example: 2 })
    @ApiQuery({ name: 'landPlotType', type: Number, required: false, example: 3 })
    @ApiQuery({ name: 'landPlotQuality', type: Number, required: false, example: 4 })
    @Get('/find/query')
    async find(@Query() params: CreateLandPlotDto): Promise<Object[]> {
        return []
    }

    @Post()
    create(@Body() createLandPlotDto: CreateLandPlotDto): Promise<Object> {
        throw new Error('Method not implemented.');
    }

    @ApiParam({ name: 'id', type: Number })
    @Put(':id')
    update(@Param() id: String, @Body() data: UpdateLandPlotDto): Promise<Object> {
        throw new Error('Method not implemented.');
    }

    @ApiParam({ name: 'id', type: Number })
    @Delete(':id')
    deleteById(id: String): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    @ApiQuery({ name: 'id', type: String })
    @ApiQuery({ name: 'x', type: Number })
    @ApiQuery({ name: 'y', type: Number })
    @ApiQuery({ name: 'landPlotType', type: String })
    @ApiQuery({ name: 'landPlotQuality', type: String })
    @Delete('/query/q')
    deleteByQuery(@Query() params): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}

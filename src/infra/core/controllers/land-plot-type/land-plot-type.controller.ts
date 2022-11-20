import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiQuery, ApiParam, ApiTags } from '@nestjs/swagger';
import { LandPlotTypeAbstract } from 'src/domain/core/controllers/land-plot-type.controller.abstract';
import { CreateUpdateLandPlotTypeDto } from 'src/domain/core/dto/land-plot-type/create-update-land-plot.dto';

@ApiTags('Land Plot Type')
@Controller('land-plot-type')
export class LandPlotTypeController extends LandPlotTypeAbstract {
    @Get('/:id')
    findOne(@Param('id') id: String): Promise<Object> {
        throw new Error('Method not implemented.');
    }

    @ApiQuery({ name: 'name', type: String, required: false, example: 'mountains' })
    @Get('/find/query')
    find(@Query() params: String): Promise<Object[]> {
        throw new Error('Method not implemented.');
    }

    @Post()
    create(@Body() createUpdateLandPlotTypeDto: CreateUpdateLandPlotTypeDto): Promise<Object> {
        throw new Error('Method not implemented.');
    }

    @ApiParam({ name: 'id', type: Number })
    @Put(':id')
    update(@Param() id: String, @Body() data: CreateUpdateLandPlotTypeDto): Promise<Object> {
        throw new Error('Method not implemented.');
    }

    @ApiParam({ name: 'id', type: Number })
    @Delete(':id')
    deleteById(id: String): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    @ApiQuery({ name: 'name', type: String })
    @Delete('/query/q')
    deleteByQuery(@Query() params): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}

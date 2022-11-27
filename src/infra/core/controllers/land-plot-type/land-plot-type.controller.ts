import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query } from '@nestjs/common';
import { ApiQuery, ApiParam, ApiTags } from '@nestjs/swagger';
import { LandPlotTypeAbstract } from 'src/infra/core/controllers/base/land-plot-type.controller.abstract';
import { CreateUpdateLandPlotTypeDto } from 'src/domain/core/dto/land-plot-type/create-update-land-plot.dto';
import { LandPlotTypeService } from '../../services/land-plot-type/land-plot-type.service';
import { LandPlotTypeSearchDto } from 'src/domain/core/dto/land-plot-type/land-plot-type-search.dto';

@ApiTags('Land Plot Type')
@Controller('land-plot-type')
export class LandPlotTypeController implements LandPlotTypeAbstract {
    constructor(@Inject(LandPlotTypeService) private landPlotTypeService: LandPlotTypeService) { }

    @Get('/:id')
    findOne(@Param('id') id: string): Promise<Object> {
        return this.landPlotTypeService.findOne({ _id: id })
    }

    @ApiQuery({ name: 'name', type: String, required: false, example: 'mountains' })
    @Get('/find/query')
    find(@Query() searchDto: LandPlotTypeSearchDto): Promise<Object[]> {
        return this.landPlotTypeService.findMany(searchDto)
    }

    @Post()
    create(@Body() createUpdateLandPlotTypeDto: CreateUpdateLandPlotTypeDto): Promise<Object> {
        return this.landPlotTypeService.create(createUpdateLandPlotTypeDto)
    }

    @ApiParam({ name: 'id', type: String })
    @Put(':id')
    update(@Param() id: string, @Body() data: CreateUpdateLandPlotTypeDto): Promise<Object> {
        return this.landPlotTypeService.update(id, data)
    }

    @ApiParam({ name: 'id', type: String })
    @Delete(':id')
    deleteById(id: string): Promise<boolean> {
        return this.landPlotTypeService.deleteById(id)
    }

    @ApiQuery({ name: 'name', type: String })
    @Delete('/query/q')
    deleteByQuery(@Query() params): Promise<boolean> {
        return this.landPlotTypeService.deleteByQuery(params)
    }
}

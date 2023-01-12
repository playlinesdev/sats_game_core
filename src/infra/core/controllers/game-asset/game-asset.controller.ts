import { Body, Controller, Get, Inject, Param, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUpdateGameAssetDto } from 'src/domain/core/dto/game-asset/create-update-game-asset.dto';
import { GameAssetSearchDto } from 'src/domain/core/dto/game-asset/game-asset-search.dto';
import { GameAssetType } from 'src/external/enum/game-asset-type.enum';
import { GameAssetService } from '../../services/game-asset/game-asset.service';

@ApiTags('Game Asset')
@Controller('game-asset')
export class GameAssetController {
    constructor(@Inject(GameAssetService) private service: GameAssetService) { }

    @Get('/:id')
    findOne(@Param('id') id: String): Promise<Object> {
        return this.service.findOne({ _id: id })
    }

    @ApiQuery({ name: 'name', type: String, required: false, example: 'Example name' })
    @ApiQuery({ name: 'description', type: String, required: false, example: 'Description sample' })
    @ApiQuery({
        enumName: 'GameAssetType', description: '0 - Uncategorized<br/>1 - Plant<br/>2 - Animal<br/>3 - Structure<br/>4 - Product',
        name: 'type', type: String, required: false, enum: [
            GameAssetType.uncategorized,
            GameAssetType.plant,
            GameAssetType.animal,
            GameAssetType.structure,
            GameAssetType.product,
        ]
    })
    @Get('/find/query')
    async find(@Query() params: GameAssetSearchDto): Promise<Object[]> {
        return this.service.findMany(params)
    }

    @Post()
    create(@Body() createDto: CreateUpdateGameAssetDto): Promise<Object> {
        return this.service.create(createDto)
    }
}

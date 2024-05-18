import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/createSong.dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post('/create')
  create(@Body() createSongDto: CreateSongDTO) {
    return this.songsService.createSong(createSongDto);
  }

  @Get('/')
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.songsService.findOne(id);
  }

  @Put(':id')
  UpdateOne() {
    return 'Update song by Id';
  }

  @Delete(':id')
  DeleteOne() {
    return 'Delete song by Id';
  }
}

import { Injectable } from '@nestjs/common';
import { CreateSongDTO } from './dto/createSong.dto';

@Injectable()
export class SongsService {
  songs = [];

  createSong(song: CreateSongDTO) {
    return this.songs.push(song);
  }

  findAll() {
    return this.songs;
  }

  findOne(id) {
    return `this will return a song with id ${id} ${typeof id}`;
    // return this.songs[id];
  }

  update(id, song) {
    return (this.songs[id] = song);
  }

  delete(id) {
    return this.songs.splice(id, 1);
  }
}

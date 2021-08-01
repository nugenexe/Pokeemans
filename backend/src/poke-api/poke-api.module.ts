import { Module } from '@nestjs/common';
import { PokeApiService } from './poke-api.service';
import { PokeApiController } from './poke-api.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    })
  ],
  providers: [PokeApiService],
  controllers: [PokeApiController]
})
export class PokeApiModule {}

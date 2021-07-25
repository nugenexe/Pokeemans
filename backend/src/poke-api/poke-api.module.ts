import { Module } from '@nestjs/common';
import { PokeApiService } from './poke-api.service';
import { PokeApiController } from './poke-api.controller';

@Module({
  providers: [PokeApiService],
  controllers: [PokeApiController]
})
export class PokeApiModule {}

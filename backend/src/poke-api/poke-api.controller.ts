import { Controller, Get } from '@nestjs/common';
import { PokeApiService } from './poke-api.service'

@Controller('poke-api')
export class PokeApiController {
    constructor(private pokeApiService: PokeApiService) {
  
    }
  
    @Get('getPokemons')
    public getPokemons(): any {
      return this.pokeApiService.foo;
    }
}

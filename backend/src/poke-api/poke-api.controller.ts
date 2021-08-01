import { Controller, Get } from '@nestjs/common';
import { PokeApiService } from './poke-api.service'

@Controller('poke-api')
export class PokeApiController {
    constructor(private pokeApiService: PokeApiService) {
  
    }
  
    @Get('getPokemon')
    public getPokemon(): any {
      // return this.pokeApiService.foo;
      let page = this.pokeApiService.getPage(1);

      // return this.pokeApiService.foo;
      return 0;
    }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon$: Observable<any> | undefined;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemon$ = this.pokemonService.getPokemon();
  }

}

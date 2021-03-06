import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public getPokemon(): Observable<any> {
    return this.http.get('http://localhost:3000/pokemon');
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Pokemon } from 'src/models/pokemon';
import { lastValueFrom, Observable, of, timer } from 'rxjs';
import { switchMap, map, mergeMap, tap, concatMap, last } from 'rxjs/operators';

@Injectable()
export class PokeApiService {
    private limit = 5;
    foo = {
        'what': 'test',
    }

    constructor(private httpService: HttpService) {}

    async getPage(page: number) {
        // call to get all pokemon, and for each, call to get details


        let foo = this.httpService.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.limit * page}`);
        // let foo1 = await lastValueFrom(foo);

        // return foo.pipe(switchMap(x => {
        //     // console.log(x)
        //     let wat = x;
        //     x.data.results.forEach(pokemon => {
        //         console.log(pokemon.name)
        //         console.log(pokemon.url)
        //     });
        //     let asdf = timer(1000);
            
        //     let asdf2 = asdf.subscribe(val => console.log(val + 'Got here'))
        //     return this.httpService.get('https://pokeapi.co/api/v2/pokemon/9/').pipe(map(x => x.data));
        //     return of(x.data);
        // }))

        //some pipes take in only predicates like last(), meaning return only true or false

        //mergemap gets promises and executes another promise to send to subscribe
        //concatmap gets promises and executes another promise in order of received to subscribe
        //switchmap getspromises and executes and cancels promises as others come in
        //exhaustmap gets promises and executes new promise and ignores others coming in until done and then executes next incoming
        
        foo.pipe(
            tap(o => {let fo =1;return Logger.log(o.data)}),
            map(o => {
                return this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${o}`);
            })
        ).subscribe(o => {
            Logger.log(11111);
        })

        // foo.subscribe(data => {
        //     let foo = data;
        // })
        // foo.subscribe(data => {
        //     let foo = data;
        // })

        // // let bar = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.limit * page}`)
        // //     .then(response => {
        // //         if (response.ok) {
        // //             return response.json();
        // //         } else {
        // //             return null;
        // //         }
        // //     })


        // //https://pokeapi.co/api/v2/pokemon?limit=50&offset=50
        // return foo;
    }
}

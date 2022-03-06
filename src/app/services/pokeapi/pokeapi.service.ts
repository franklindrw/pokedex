import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(public http: HttpClient) {}

  /**
   *
   */

  getPokedex() {
    return new Promise((resolve, reject) => {
      this.http.get('https://pokeapi.co/api/v2/pokedex/2').subscribe(
        (data: any) => resolve(data),
        (err: any) => reject(err)
      );
    });
  }

  /**
   *
   * @param id
   * @returns
   */

  getPokemon(id) {
    return new Promise((resolve, reject) => {
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe(
        (data: any) => resolve(data),
        (err: any) => reject(err)
      );
    });
  }
}

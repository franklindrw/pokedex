import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {
  pokemons: any = [];

  /**
   *
   * @param pokeapiService
   */

  constructor(private pokeapiService: PokeapiService) {
    this.getPokedex();
  }

  getPokedex() {
    this.pokeapiService
      .getPokedex()
      .then((data: any) => {
        this.pokemons = data.pokemon_entries;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  ngOnInit() {}
}

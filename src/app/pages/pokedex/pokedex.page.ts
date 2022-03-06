import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {
  pokemons: any = [];
  busca: string;

  /**
   *
   * @param pokeapiService
   */

  constructor(private pokeapiService: PokeapiService, private router: Router) {
    this.getPokedex();
  }

  /**
   *
   */

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

  verMais(pokemon: any) {
    this.router.navigate([`pokemon/${pokemon.entry_number}`]);
  }
}

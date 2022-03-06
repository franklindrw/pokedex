import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  pokemonId: string;
  pokemon: any = {};

  /**
   *
   * @param activatedRoute
   * @param pokeapiService
   * @param navCtrl
   */

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeapiService: PokeapiService,
    private navCtrl: NavController,
    private router: Router
  ) {}

  /**
   *
   */

  ngOnInit() {
    this.pokemonId = this.activatedRoute.snapshot.paramMap.get('id');

    this.pokeapiService.getPokemon(this.pokemonId).then((pokemon: any) => {
      this.pokemon = pokemon;
    });
  }

  pokedex() {
    this.router.navigate(['pokedex/']);
  }
}

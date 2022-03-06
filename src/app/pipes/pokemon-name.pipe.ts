import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName',
})
export class PokemonNamePipe implements PipeTransform {
  /**
   *
   * @param pokemons
   * @param name
   * @returns
   */

  transform(pokemons: any, name: string) {
    if (name == null || name == undefined || name == '') return pokemons;

    return pokemons.filter(
      (item) => item.pokemon_species.name.indexOf(name) !== -1
    );
  }
}

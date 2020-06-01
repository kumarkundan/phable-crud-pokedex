import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private upersons: Pokemon[] = [
    {
      id: 1,
      hp: "22",
      attack: "36",
      type: "abc"
    },
    {
      id:2,
      hp: "56",
      attack: "96",
      type: "xyz"
    }
  ];

  constructor() { }

  getPokemonFromData(): Pokemon[] {
    return this.upersons;
  }

  addPokemon(pokemon: Pokemon) {
    pokemon.id = this.upersons.length + 1;
    this.upersons.push(pokemon);

  }
  updatePokemon(pokemon: Pokemon) {
    const index = this.upersons.findIndex(u => pokemon.id === u.id);
    this.upersons[index] = pokemon;
  }
  deletePokemon(pokemon: Pokemon) {
    this.upersons.splice(this.upersons.indexOf(pokemon), 1);
  }

}

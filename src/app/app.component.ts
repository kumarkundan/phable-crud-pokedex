import { Component, OnInit } from '@angular/core';
import { Pokemon } from './models/pokemon';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phable-crud-pokedex';

  pokemons: Pokemon[];
  pokemonForm: boolean;
  isNewpokemon: boolean;
  newPokemon: any = {};
  editPokemonForm: boolean;
  editedpokemon: any = {};

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemons = this.getpokemons();
  }

  getpokemons(): Pokemon[] {
    return this.pokemonService.getPokemonFromData();
  }

  showEditPokemonForm(pokemon: Pokemon) {

    if (!pokemon) {
      this.pokemonForm = false;
      return;
    }
    this.editPokemonForm = true;
    this.editedpokemon = pokemon;
  }

  showAddPokemonForm() {
    // resets form if edited pokemon
    if (this.pokemons.length) {
      this.newPokemon = {};
    }
    this.pokemonForm = true;
    this.isNewpokemon = true;

  }

  savePokemon(pokemon: Pokemon) {
    if (this.isNewpokemon) {
      // add a new pokemon
      this.pokemonService.addPokemon(pokemon);
    }
    this.pokemonForm = false;
  }

  updatePokemon() {
    this.pokemonService.updatePokemon(this.editedpokemon);
    this.editPokemonForm = false;
    this.editedpokemon = {};
  }

  removePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemon(pokemon);
  }

  cancelEdits() {
    this.editedpokemon = {};
    this.editPokemonForm = false;
  }

  cancelNewPokemon() {
    this.newPokemon = {};
    this.pokemonForm = false;
  }
}

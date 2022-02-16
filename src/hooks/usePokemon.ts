import axios from "axios";
import { useEffect, useState } from "react";

import { IPokemon } from "../types/IPokemon";

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  async function fetchPokemon() {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=150`)
      .then((response) => {
        const listPokemons: IPokemon[] = [];

        // Percorre por todos os pokemons e cria um novo resultado adicionando id e sprite
        response.data.results.map(
          (
            pokemon: { name: string; url: string; sprite: string },
            id: number
          ) => {
            listPokemons.push({
              id: Number(id) + 1,
              name: pokemon.name,
              sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                Number(id) + 1
              }.png`,
            });
          }
        );

        setPokemons(listPokemons);
      });
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return pokemons;
};

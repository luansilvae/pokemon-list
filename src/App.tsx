import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import PokemonTable from "./components/PokemonTable";
import { IPokemon } from "./types/IPokemon";

function App() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  async function fetchPokemon() {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=150`)
      .then((response) => {
        const listPokemons: any[] = [];

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

  return (
    <main>
      <Navbar />
      <PokemonTable rows={pokemons} />
    </main>
  );
}

export default App;

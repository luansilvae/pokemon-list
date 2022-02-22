import React from "react";
import PokemonTable from "../../components/PokemonTable";
import { usePokemon } from "../../hooks/usePokemon";

const Main: React.FC = () => {
  const pokemons = usePokemon()
  return (
    <main>
      <PokemonTable rows={pokemons} />
    </main>
  );
};

export default Main;

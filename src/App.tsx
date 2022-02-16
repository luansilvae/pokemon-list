import Navbar from "./components/Navbar";
import PokemonTable from "./components/PokemonTable";
import { usePokemon } from "./hooks/usePokemon";

function App() {
  const pokemons = usePokemon()

  return (
    <main>
      <Navbar />
      <PokemonTable rows={pokemons} />
    </main>
  );
}

export default App;

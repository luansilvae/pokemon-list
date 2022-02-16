import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { IPokemon } from "./types/IPokemon";
import PokemonTable from "./components/PokemonTable";

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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <Button color="inherit">Pokedex</Button>
            </Box>
          </Container>
        </AppBar>
      </Box>
      <PokemonTable rows={pokemons} />
    </main>
  );
}

export default App;

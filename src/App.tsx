import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface IPokemon {
  id: number;
  name: string;
  sprite: string;
}

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

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Nome", width: 130 },
    {
      field: "sprite",
      headerName: "Sprite",
      width: 130,
      renderCell: (params) => <img src={params.value} />,
    },
  ];

  return (
    <div>
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
      <Container maxWidth="lg">
        <div style={{ height: 600, marginTop: "50px" }}>
          <DataGrid
            rows={pokemons}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            rowHeight={80}
            sx={{
              textTransform: "capitalize",
              "& .MuiDataGrid-cell > img": {
                width: "80px",
              },
            }}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;

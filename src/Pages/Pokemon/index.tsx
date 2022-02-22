import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Button, Container, Grid, Typography } from "@mui/material";

import { format } from "../../utils/formatValue";

import axios from "axios";

interface PokemonProps {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: [{ ability: { name: string } }];
  types: [{ type: { name: string } }];
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export function Pokemon() {
  const { pokemonId } = useParams();

  const [pokemonData, setPokemonData] = useState<PokemonProps | null>();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => {
        setPokemonData(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <main>
      {pokemonData && (
        <>
          <Box
            sx={{
              pt: 5,
              pb: 5,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="text.primary"
                textTransform="capitalize"
              >
                {pokemonData.name}
                <Typography
                  component="span"
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                  sx={{ ml: 2 }}
                >
                  Nº {pokemonData.id}
                </Typography>
              </Typography>
            </Container>
          </Box>
          <Container maxWidth="md">
            <Grid container spacing={2}>
              <Grid item xs={16} sm={12} md={6}>
                <Box
                  sx={{
                    bgcolor: "#F2F2F2",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={pokemonData.sprites.other.dream_world.front_default}
                    width="100%"
                  />
                </Box>
              </Grid>

              <Grid item xs={16} sm={12} md={6}>
                <Box
                  sx={{
                    bgcolor: "#30A7D7",
                    display: "grid",
                    gap: "20px",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    padding: "20px",
                    borderRadius: "8px",
                  }}
                >
                  <Typography
                    component="h6"
                    variant="subtitle1"
                    color="#fff"
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    Height
                    <Typography
                      component="span"
                      variant="h6"
                      color="#212121"
                      fontWeight="400"
                    >
                      {format(pokemonData.height)} m
                    </Typography>
                  </Typography>

                  <Typography
                    component="h6"
                    variant="subtitle1"
                    color="#fff"
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    Abilities
                    <Typography
                      component="span"
                      variant="h6"
                      color="#212121"
                      fontWeight="400"
                      textTransform="capitalize"
                    >
                      {pokemonData.abilities[0].ability.name}
                    </Typography>
                  </Typography>

                  <Typography
                    component="h6"
                    variant="subtitle1"
                    color="#fff"
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    Weight
                    <Typography
                      component="span"
                      variant="h6"
                      color="#212121"
                      fontWeight="400"
                    >
                      {format(pokemonData.weight)} kg
                    </Typography>
                  </Typography>
                </Box>

                <Typography
                  component="h6"
                  variant="h6"
                  color="#212121"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: "20px",
                    fontWeight: "400",
                    gap: "10px",
                  }}
                >
                  Tipo
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px"
                    }}
                  >
                    {pokemonData.types.map((pokemon) => (
                      <Button variant="outlined" color="inherit">{pokemon.type.name}</Button>
                    ))}
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </main>
  );
}

export default Pokemon;

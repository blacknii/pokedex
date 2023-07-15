import { Stack, Typography, Pagination } from "@mui/material";
import "./App.css";

import { usePokemonsData } from "./hooks/usePokemonsData";
import Generations from "./components/Generations";
import Pokemons from "./components/Pokemons";
import PokemonsSkeleton from "./components/PokemonsSkeleton";
import Types from "./components/Types";

function App() {
  const { isLoading, data } = usePokemonsData();

  return (
    <Stack spacing={2} sx={{ alignItems: "center" }}>
      <Typography component="h1" variant="h3">
        Pokedex
      </Typography>
      <Generations />
      <Types />
      {isLoading ? (
        <PokemonsSkeleton />
      ) : (
        <Pokemons data={data && data.slice(0, 20)} />
      )}
      <Pagination count={10} siblingCount={0} />
    </Stack>
  );
}

export default App;

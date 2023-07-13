import { Stack, Typography } from "@mui/material";
import "./App.css";

import Generations from "./components/Generations";
import Pokemons from "./components/Pokemons";
import Types from "./components/Types";

function App() {
  return (
    <Stack spacing={2}>
      <Typography component="h1" variant="h3">
        Pokedex
      </Typography>
      <Generations />
      <Types />
      <Pokemons />
    </Stack>
  );
}

export default App;

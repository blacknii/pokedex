import { Stack, Typography, Pagination } from "@mui/material";
import { regions } from "./data/regions";
import "./App.css";

import { usePokemonsData } from "./hooks/usePokemonsData";
import Generations from "./components/Generations";
import Pokemons from "./components/Pokemons";
import PokemonsSkeleton from "./components/PokemonsSkeleton";
import Types from "./components/Types";
import { useState } from "react";

function App() {
  const { isLoading, rawData } = usePokemonsData();

  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  const filteredPokemons = rawData?.filter(
    (pokemon) =>
      pokemon.id >= selectedRegion.start &&
      pokemon.id <= selectedRegion.end &&
      (selectedTypes[0] === undefined ||
        pokemon.types.includes(selectedTypes[0])) &&
      (selectedTypes[1] === undefined ||
        pokemon.types.includes(selectedTypes[1]))
  );

  const pageAmount = filteredPokemons ? filteredPokemons?.length : 0;

  return (
    <Stack spacing={2} sx={{ alignItems: "center" }}>
      <Typography component="h1" variant="h3">
        Pokedex
      </Typography>
      <Generations setSelectedRegion={setSelectedRegion} />
      <Types
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
      />
      <Pagination
        count={Math.ceil(pageAmount / 20)}
        page={page}
        onChange={handleChange}
      />
      {isLoading ? (
        <PokemonsSkeleton />
      ) : (
        <Pokemons
          data={
            filteredPokemons &&
            filteredPokemons.slice((page - 1) * 20, page * 20)
          }
        />
      )}
      <Pagination
        count={Math.ceil(pageAmount / 20)}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}

export default App;

import Regions from "./components/Regions";
import Pokemons from "./components/Pokemons";
import PokemonsSkeleton from "./components/PokemonsSkeleton";
import Types from "./components/Types";
import { usePokemonsData } from "./hooks/usePokemonsData";
import { regions } from "./data/regions";
import { Stack, Typography, Pagination, ThemeProvider } from "@mui/material";
import { useState } from "react";
import theme from "./theme";
import "./App.css";

function App() {
  const { isLoading, rawData } = usePokemonsData();
  const [page, setPage] = useState(1);

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  const isCorrectRegion = (id: number) => {
    return id >= selectedRegion.start && id <= selectedRegion.end;
  };

  const isCorrectType = (types: string[]) => {
    return (
      (selectedTypes[0] === undefined || types.includes(selectedTypes[0])) &&
      (selectedTypes[1] === undefined || types.includes(selectedTypes[1]))
    );
  };

  const filteredPokemons = rawData?.filter(
    (pokemon) => isCorrectRegion(pokemon.id) && isCorrectType(pokemon.types)
  );

  const pageAmount = filteredPokemons
    ? Math.ceil(filteredPokemons.length / 20)
    : 1;

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const pagination = (
    <Pagination count={pageAmount} page={page} onChange={handlePageChange} />
  );

  const pokemons = isLoading ? (
    <PokemonsSkeleton />
  ) : (
    <Pokemons
      data={
        filteredPokemons && filteredPokemons.slice((page - 1) * 20, page * 20)
      }
    />
  );

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <Typography component="h1" variant="h3">
          Pokedex
        </Typography>
        <Regions
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          setPage={setPage}
        />
        <Types
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          setPage={setPage}
        />
        {pagination}
        {pokemons}
        {pagination}
      </Stack>
    </ThemeProvider>
  );
}

export default App;

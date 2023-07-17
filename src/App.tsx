import Regions from "./components/Regions";
import Pokemons from "./components/Pokemons";
import PokemonsSkeleton from "./components/PokemonsSkeleton";
import Types from "./components/Types";
import { usePokemonsData } from "./hooks/usePokemonsData";
import { regions } from "./data/regions";
import {
  Stack,
  Typography,
  Pagination,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { useState } from "react";
import theme from "./theme";
import "./App.css";
import Header from "./components/Header";

function App() {
  const { isLoading, rawData, error } = usePokemonsData();
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

  const pokemons = isLoading ? (
    <PokemonsSkeleton />
  ) : (
    <Pokemons
      data={
        filteredPokemons && filteredPokemons.slice((page - 1) * 20, page * 20)
      }
    />
  );

  const isPokemonsArrEmpty = filteredPokemons?.length === 0 && !isLoading;

  const pagination = !isPokemonsArrEmpty && !error && (
    <Pagination count={pageAmount} page={page} onChange={handlePageChange} />
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <Header />
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
        {error && (
          <Typography
            component="h2"
            variant="h3"
            color={"gray"}
            sx={{ padding: "30px" }}
          >
            <strong>ERROR 404</strong>
          </Typography>
        )}
        {isPokemonsArrEmpty ? (
          <Typography
            component="h2"
            variant="h5"
            color={"gray"}
            sx={{ padding: "30px" }}
          >
            there is no pokemon matching the description
          </Typography>
        ) : (
          pokemons
        )}
        {pagination}
      </Stack>
    </ThemeProvider>
  );
}

export default App;

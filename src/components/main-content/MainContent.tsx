import Regions from "./Regions";
import Pokemons from "./Pokemons";
import PokemonsSkeleton from "./PokemonsSkeleton";
import Types from "./Types";
import { usePokemonsData } from "../../hooks/usePokemonsData";
import { regions } from "../../data/regions";
import { Typography, Pagination, Stack, Box } from "@mui/material";
import { useState } from "react";

const MainContent = () => {
  const { isLoading, error, rawPokemons } = usePokemonsData();
  const [page, setPage] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState([regions[0]]);

  const isCorrectRegion = (id: number) => {
    return selectedRegion.some(
      (region) => id >= region.start && id <= region.end
    );
  };

  const isCorrectType = (types: string[]) => {
    return (
      (selectedTypes[0] === undefined || types.includes(selectedTypes[0])) &&
      (selectedTypes[1] === undefined || types.includes(selectedTypes[1]))
    );
  };

  const filteredPokemons = rawPokemons?.filter(
    (pokemon) => isCorrectRegion(pokemon.id) && isCorrectType(pokemon.types)
  );

  const pageAmount = filteredPokemons
    ? Math.ceil(filteredPokemons.length / 20)
    : 1;

  const isPokemonsArrEmpty = filteredPokemons?.length === 0 && !isLoading;

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const pagination = !isPokemonsArrEmpty && !error && (
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

  const errorMessage = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexGrow: "1",
      }}
    >
      <Typography
        component="h2"
        variant="h3"
        color={"gray"}
        sx={{ padding: "30px" }}
      >
        <strong>ERROR 404</strong>
      </Typography>
    </Box>
  );
  const emptyArrMessage = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexGrow: "1",
      }}
    >
      <Typography
        component="h2"
        variant="h5"
        color={"gray"}
        sx={{ padding: "40px 0", textAlign: "center" }}
      >
        there is no pokemon matching the description
      </Typography>
    </Box>
  );

  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: "center",
        maxWidth: "94rem",
        height: "100%",
        padding: "0 1.25rem",
      }}
    >
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
      {error && errorMessage}
      {isPokemonsArrEmpty ? emptyArrMessage : pokemons}
      {pagination}
    </Stack>
  );
};

export default MainContent;

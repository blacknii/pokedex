import Regions from "./Regions";
import Pokemons from "./Pokemons";
import PokemonsSkeleton from "./PokemonsSkeleton";
import Types from "./Types";
import { usePokemonsData } from "../hooks/usePokemonsData";
import { regions } from "../data/regions";
import { Typography, Pagination, Stack } from "@mui/material";
import { useState } from "react";

const MainContent = () => {
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
    <Stack
      spacing={2}
      sx={{
        alignItems: "center",
        maxWidth: "1500px",
        flexGrow: "1fr",
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
  );
};

export default MainContent;

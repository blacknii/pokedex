import {
  Stack,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from "@mui/material";
import Modal from "./Modal";
import { useState } from "react";
import { types } from "../../data/types";

interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: string[];
  generation: string;
  img: string;
}

type PokemonProps = {
  data: Pokemon[] | undefined;
};

const dummyPokemon = {
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/.png",
  id: 0,
  name: "N/A",
  weight: 0,
  height: 0,
  types: ["N/A"],
  generation: "N/A",
};

const Pokemons = ({ data }: PokemonProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState(dummyPokemon);

  const handleOpen = (pokemon: Pokemon) => {
    setModalData(pokemon);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Modal open={open} handleClose={handleClose} modalData={modalData} />
      {data &&
        data.map((pokemon: Pokemon) => (
          <Card
            key={pokemon.id}
            sx={{
              textAlign: "center",
              width: 250,
              padding: 1,
              margin: 2,
              cursor: "pointer",
            }}
            elevation={3}
            onClick={() => {
              handleOpen(pokemon);
            }}
          >
            <CardMedia
              sx={{ height: 250 }}
              image={pokemon.img}
              title={pokemon.name}
              src={pokemon.img}
            />
            <CardContent>
              <Typography variant="subtitle1" component="div" color="GrayText">
                #{pokemon.id}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {pokemon.name}
              </Typography>
              <Stack
                direction={"row"}
                gap={1}
                sx={{ justifyContent: "center" }}
              >
                {pokemon.types.map((textType) => {
                  const foundType = types.find(
                    (element) => element.name === textType
                  );
                  const iconWhite = foundType?.iconWhite;
                  const bgColor = foundType
                    ? `pokemonTypes.${foundType.name}.main`
                    : "";
                  const contrastText = foundType
                    ? `pokemonTypes.${textType}.contrastText`
                    : "";
                  return (
                    <Chip
                      key={textType}
                      label={textType}
                      icon={iconWhite}
                      sx={{
                        backgroundColor: bgColor,
                        color: contrastText,
                        cursor: "pointer",
                      }}
                    />
                  );
                })}
              </Stack>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};

export default Pokemons;

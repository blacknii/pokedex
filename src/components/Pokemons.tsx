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

const Pokemons = ({ data }: PokemonProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const [modalData, setModalData] = useState({
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
    id: 4,
    name: "charmander",
    weight: 85,
    height: 6,
    types: ["fire"],
    generation: "Kanto",
  });

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
            sx={{ width: 250, padding: 1, margin: 2, cursor: "pointer" }}
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
              <Stack direction={"row"} gap={1}>
                {pokemon.types.map((type) => (
                  <Chip key={type} label={type} />
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};

export default Pokemons;

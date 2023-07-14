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

const Pokemons = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Modal open={open} handleOpen={handleOpen} />
      {DUMMY_DATA.pokedex.map((pokemon) => (
        <Card
          key={pokemon.id}
          sx={{ width: 250, padding: 1, margin: 2, cursor: "pointer" }}
          onClick={handleOpen}
        >
          <CardMedia
            sx={{ height: 250 }}
            image={pokemon.img}
            title={pokemon.name}
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

const DUMMY_DATA = {
  pokedex: [
    {
      id: 1,
      name: "bulbasaur",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
      types: ["grass", "poison"],
    },
    {
      id: 2,
      name: "ivysaur",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
      types: ["grass", "poison"],
    },
    {
      id: 3,
      name: "venusaur",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
      types: ["grass", "poison"],
    },
    {
      id: 4,
      name: "charmander",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
      types: ["fire"],
    },
    {
      id: 5,
      name: "charmeleon",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
      types: ["fire"],
    },
    {
      id: 6,
      name: "charizard",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
      types: ["fire", "flying"],
    },
    {
      id: 7,
      name: "squirtle",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
      types: ["water"],
    },
    {
      id: 8,
      name: "wartortle",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png",
      types: ["water"],
    },
    {
      id: 9,
      name: "blastoise",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
      types: ["water"],
    },
    {
      id: 10,
      name: "caterpie",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png",
      types: ["bug"],
    },
    {
      id: 11,
      name: "metapod",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/11.png",
      types: ["bug"],
    },
    {
      id: 12,
      name: "butterfree",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/12.png",
      types: ["bug", "flying"],
    },
    {
      id: 13,
      name: "weedle",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png",
      types: ["bug", "poison"],
    },
    {
      id: 14,
      name: "kakuna",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png",
      types: ["bug", "poison"],
    },
    {
      id: 15,
      name: "beedrill",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png",
      types: ["bug", "poison"],
    },
    {
      id: 16,
      name: "pidgey",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png",
      types: ["normal", "flying"],
    },
    {
      id: 17,
      name: "pidgeotto",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/17.png",
      types: ["normal", "flying"],
    },
    {
      id: 18,
      name: "pidgeot",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png",
      types: ["normal", "flying"],
    },
    {
      id: 19,
      name: "rattata",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/19.png",
      types: ["normal"],
    },
    {
      id: 20,
      name: "raticate",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
      types: ["normal"],
    },
  ],
};

export default Pokemons;

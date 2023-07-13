import {
  Stack,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from "@mui/material";

const Pokemons = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {DUMMY_DATA.pokedex.map((pokemon) => (
        <Card key={pokemon.id} sx={{ width: 250, margin: 2 }}>
          <CardMedia
            sx={{ height: 250 }}
            image={pokemon.img}
            title={pokemon.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pokemon.name}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              color="GrayText"
            >
              #{pokemon.id}
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
    {
      id: 21,
      name: "spearow",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/21.png",
      types: ["normal", "flying"],
    },
    {
      id: 22,
      name: "fearow",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/22.png",
      types: ["normal", "flying"],
    },
    {
      id: 23,
      name: "ekans",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/23.png",
      types: ["poison"],
    },
    {
      id: 24,
      name: "arbok",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/24.png",
      types: ["poison"],
    },
    {
      id: 25,
      name: "pikachu",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
      types: ["electric"],
    },
    {
      id: 26,
      name: "raichu",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png",
      types: ["electric"],
    },
    {
      id: 27,
      name: "sandshrew",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/27.png",
      types: ["ground"],
    },
    {
      id: 28,
      name: "sandslash",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/28.png",
      types: ["ground"],
    },
    {
      id: 29,
      name: "nidoran-f",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/29.png",
      types: ["poison"],
    },
    {
      id: 30,
      name: "nidorina",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/30.png",
      types: ["poison"],
    },
  ],
};

export default Pokemons;

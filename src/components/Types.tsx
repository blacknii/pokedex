import { Box, Chip } from "@mui/material";

const Types = () => {
  return (
    <Box>
      {DUMMY_DATA.map((type) => (
        <Chip key={type.name} label={type.name} sx={{ margin: 0.4 }} />
      ))}
    </Box>
  );
};

const DUMMY_DATA = [
  {
    name: "all",
  },
  {
    name: "normal",
  },
  {
    name: "fire",
  },
  {
    name: "water",
  },
  {
    name: "electric",
  },
  {
    name: "grass",
  },
  {
    name: "ice",
  },
  {
    name: "fighting",
  },
  {
    name: "poison",
  },
  {
    name: "ground",
  },
  {
    name: "flying",
  },
  {
    name: "psychic",
  },
  {
    name: "bug",
  },
  {
    name: "rock",
  },
  {
    name: "ghost",
  },
  {
    name: "dragon",
  },
  {
    name: "dark",
  },
  {
    name: "steel",
  },
  {
    name: "fairy",
  },
];

export default Types;

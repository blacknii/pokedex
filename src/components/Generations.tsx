import { Box, Chip } from "@mui/material";

const Generations = () => {
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
    name: "All regions",
    start: 1,
    end: 898,
  },
  {
    name: "Kanto",
    start: 1,
    end: 151,
  },
  {
    name: "Johto",
    start: 152,
    end: 251,
  },
  {
    name: "Hoenn",
    start: 252,
    end: 386,
  },
  {
    name: "Sinnoh",
    start: 387,
    end: 493,
  },
  {
    name: "Unova",
    start: 494,
    end: 649,
  },
  {
    name: "Kalos",
    start: 650,
    end: 721,
  },
  {
    name: "Alola",
    start: 722,
    end: 809,
  },
  {
    name: "Galar",
    start: 810,
    end: 905,
  },
  {
    name: "Paldea",
    start: 906,
    end: 1010,
  },
];

export default Generations;

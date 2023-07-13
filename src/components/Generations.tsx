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
    name: "all generations",
    start: 1,
    end: 898,
  },
  {
    name: "generationI",
    start: 1,
    end: 151,
  },
  {
    name: "generationII",
    start: 152,
    end: 251,
  },
  {
    name: "generationIII",
    start: 252,
    end: 386,
  },
  {
    name: "generationIV",
    start: 387,
    end: 493,
  },
  {
    name: "generationV",
    start: 494,
    end: 649,
  },
  {
    name: "generationVI",
    start: 650,
    end: 721,
  },
  {
    name: "generationVII",
    start: 722,
    end: 809,
  },
  {
    name: "generationVIII",
    start: 810,
    end: 898,
  },
];

export default Generations;

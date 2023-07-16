import { Box, Chip } from "@mui/material";
import { regions } from "../data/regions";

interface Region {
  name: string;
  start: number;
  end: number;
}

interface TypesProps {
  selectedRegion: Region;
  setSelectedRegion: (newRegion: Region) => void;
  setPage: (newPage: number) => void;
}

const Generations = ({
  selectedRegion,
  setSelectedRegion,
  setPage,
}: TypesProps) => {
  return (
    <Box>
      {regions.map((type) => {
        const color = type.name === selectedRegion.name ? "primary" : "default";
        return (
          <Chip
            key={type.name}
            label={type.name}
            color={color}
            sx={{ margin: 0.4 }}
            onClick={() => {
              setSelectedRegion(type);
              setPage(1);
            }}
          />
        );
      })}
    </Box>
  );
};

export default Generations;

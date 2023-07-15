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
        const isSelected =
          type.name === selectedRegion.name ? "#69c3e9" : "e4e4e4";
        return (
          <Chip
            key={type.name}
            label={type.name}
            sx={{ margin: 0.4, backgroundColor: isSelected }}
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

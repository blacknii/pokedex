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

const Regions = ({
  selectedRegion,
  setSelectedRegion,
  setPage,
}: TypesProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "4px",
      }}
    >
      {regions.map((region) => {
        const color =
          region.name === selectedRegion.name ? "primary" : "default";
        return (
          <Chip
            key={region.name}
            label={region.name}
            color={color}
            onClick={() => {
              setSelectedRegion(region);
              setPage(1);
            }}
          />
        );
      })}
    </Box>
  );
};

export default Regions;
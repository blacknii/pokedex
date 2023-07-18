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
        let color;

        if (region.name === selectedRegion.name) {
          color = {
            backgroundColor: `primary.main`,
            color: `primary.contrastText`,
            border: "solid 1px",
            borderColor: "pokemonTypes.main.outline",
            "&:hover": { backgroundColor: "primary.light" },
          };
        } else {
          color = {
            border: "solid 1px",
            borderColor: "pokemonTypes.main.outline",
            backgroundColor: "pokemonTypes.main.main",
          };
        }
        return (
          <Chip
            sx={color}
            key={region.name}
            label={region.name}
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

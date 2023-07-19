import { Box, Chip } from "@mui/material";
import { regions } from "../../data/regions";

interface Region {
  name: string;
  start: number;
  end: number;
}

interface TypesProps {
  selectedRegion: Region[];
  setSelectedRegion: (newRegion: Region[]) => void;
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

        if (selectedRegion.find((r) => r.name === region.name)) {
          color = {
            backgroundColor: `primary.main`,
            color: `primary.contrastText`,
            border: "solid 1px",
            borderColor: "pokemonTypes.chip.outline",
            "&:hover": { backgroundColor: "primary.light" },
          };
        } else {
          color = {
            border: "solid 1px",
            borderColor: "pokemonTypes.chip.outline",
            backgroundColor: "pokemonTypes.chip.fill",
          };
        }
        return (
          <Chip
            sx={color}
            key={region.name}
            label={region.name}
            onClick={() => {
              let newSelectedRegions = [...selectedRegion];

              if (region.name === "all regions") {
                newSelectedRegions = [region];
              } else {
                newSelectedRegions = newSelectedRegions.filter(
                  (r) => r.name !== "all regions"
                );

                if (newSelectedRegions.find((r) => r.name === region.name)) {
                  newSelectedRegions = newSelectedRegions.filter(
                    (r) => r.name !== region.name
                  );
                } else {
                  newSelectedRegions.push(region);
                }
                if (newSelectedRegions.length === 0)
                  newSelectedRegions.push({
                    name: "all regions",
                    start: 1,
                    end: 1010,
                  });
              }

              setSelectedRegion(newSelectedRegions);
              setPage(1);
            }}
          />
        );
      })}
    </Box>
  );
};

export default Regions;

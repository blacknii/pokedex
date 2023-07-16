import { Box, Chip } from "@mui/material";
import { types } from "../data/types";

interface TypesProps {
  selectedTypes: string[];
  setSelectedTypes: (newTypes: string[]) => void;
  setPage: (newTypes: number) => void;
}

const Types = ({ selectedTypes, setSelectedTypes, setPage }: TypesProps) => {
  const handleTypes = (newtype: string) => {
    if (newtype === "all") {
      setSelectedTypes([]);
    } else if (
      selectedTypes.includes(newtype) === false &&
      selectedTypes.length < 2
    ) {
      setSelectedTypes([...selectedTypes, newtype]);
    } else if (
      selectedTypes.includes(newtype) === false &&
      selectedTypes.length === 2
    ) {
      setSelectedTypes([selectedTypes[1], newtype]);
    } else if (selectedTypes.includes(newtype) === true) {
      setSelectedTypes(selectedTypes.filter((value) => value !== newtype));
    }
    setPage(1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "4px",
      }}
    >
      {types.map((type) => {
        let color;
        let icon;
        if (selectedTypes.includes(type.name)) {
          color = {
            backgroundColor: `pokemonTypes.${type.name}.main`,
            color: "white",
            border: "solid #ededed 1px",
            "&:hover": { backgroundColor: `pokemonTypes.${type.name}.light` },
          };
          icon = true;
        } else if (selectedTypes.length === 0 && type.name === "all") {
          color = {
            backgroundColor: `#1976d2`,
            color: "white",
            border: "solid #ededed 1px",
            "&:hover": { backgroundColor: `#42a5f5` },
          };
          icon = true;
        } else {
          color = { backgroundColor: "white", border: "solid #ededed 1px" };
          icon = false;
        }

        return (
          <Chip
            icon={icon ? type.iconWhite : type.iconColored}
            // sx={{ padding: "0 0 0 8px" }}
            key={type.name}
            label={type.name}
            // color={color as "default" | "primary"}
            sx={color}
            onClick={() => {
              handleTypes(type.name);
            }}
          />
        );
      })}
    </Box>
  );
};

export default Types;

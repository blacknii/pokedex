import { Box, Chip } from "@mui/material";
import { types } from "../../data/types";

interface TypesProps {
  selectedTypes: string[];
  setSelectedTypes: (newTypes: string[]) => void;
  setPage: (newTypes: number) => void;
}

const Types = ({ selectedTypes, setSelectedTypes, setPage }: TypesProps) => {
  const handleTypes = (newtype: string) => {
    if (newtype === "all types") {
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
            color: `pokemonTypes.${type.name}.contrastText`,
            border: "solid 1px",
            borderColor: "pokemonTypes.chip.outline",
            "&:hover": { backgroundColor: `pokemonTypes.${type.name}.light` },
          };
          icon = true;
        } else if (selectedTypes.length === 0 && type.name === "all types") {
          color = {
            backgroundColor: `primary.main`,
            color: `pokemonTypes.chip.contrastText`,
            border: "solid 1px",
            borderColor: "pokemonTypes.chip.outline",
            "&:hover": { backgroundColor: `primary.light` },
          };
          icon = true;
        } else {
          color = {
            border: "solid 1px",
            borderColor: "pokemonTypes.chip.outline",
            backgroundColor: "pokemonTypes.chip.fill",
            "&:hover": { backgroundColor: `primary` },
          };
          icon = false;
        }

        return (
          <Chip
            icon={icon ? type.iconWhite : type.iconColored}
            key={type.name}
            label={type.name}
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

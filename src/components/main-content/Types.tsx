import { Box, Chip } from "@mui/material";
import { types } from "../../data/types";

interface TypesProps {
  selectedTypes: string[];
  setSelectedTypes: (newTypes: string[]) => void;
  setPage: (newTypes: number) => void;
}

type ColorType = {
  backgroundColor?: string;
  color?: string;
  "&:hover"?: { backgroundColor: string };
  border: string;
  borderColor: string;
};

type TypeData =
  | {
      name: string;
      color: string;
      iconWhite: undefined;
      iconColored: undefined;
    }
  | {
      name: string;
      color: string;
      iconWhite: JSX.Element;
      iconColored: JSX.Element;
    };

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

  const getColorAndIcon = (type: TypeData, selectedTypes: string[]) => {
    let color: ColorType = {
      border: "solid 1px",
      borderColor: "pokemonTypes.chip.outline",
    };
    let icon;

    if (selectedTypes.includes(type.name)) {
      color = {
        ...color,
        backgroundColor: `pokemonTypes.${type.name}.main`,
        color: `pokemonTypes.${type.name}.contrastText`,
        "&:hover": { backgroundColor: `pokemonTypes.${type.name}.light` },
      };
      icon = true;
    } else if (selectedTypes.length === 0 && type.name === "all types") {
      color = {
        ...color,
        backgroundColor: `primary.main`,
        color: `pokemonTypes.chip.contrastText`,
        "&:hover": { backgroundColor: `primary.light` },
      };
      icon = true;
    } else {
      color = {
        ...color,
        backgroundColor: "pokemonTypes.chip.fill",
        "&:hover": { backgroundColor: `primary` },
      };
      icon = false;
    }

    return { color, icon };
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
        const { color, icon } = getColorAndIcon(type, selectedTypes);
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

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
        if (selectedTypes.includes(type.name)) {
          color = "primary";
        } else if (selectedTypes.length === 0 && type.name === "all") {
          color = "primary";
        } else {
          color = "default";
        }

        return (
          <Chip
            icon={type.iconColored}
            // sx={{ padding: "0 0 0 8px" }}
            key={type.name}
            label={type.name}
            color={color as "default" | "primary"}
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

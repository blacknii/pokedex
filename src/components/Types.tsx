import { Box, Chip } from "@mui/material";
import { types } from "../data/types";

interface typesProps {
  selectedTypes: string[];
  setSelectedTypes: (newTypes: string[]) => void;
  setPage: (newTypes: number) => void;
}

const Types = ({ selectedTypes, setSelectedTypes, setPage }: typesProps) => {
  const handleTypes = (newtype: string) => {
    console.log(selectedTypes);
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
    <Box>
      {types.map((type) => {
        let color;
        if (selectedTypes.includes(type.name)) {
          color = "#69c3e9";
        } else if (selectedTypes.length === 0 && type.name === "all") {
          color = "#69c3e9";
        } else {
          color = "e4e4e4";
        }
        return (
          <Chip
            key={type.name}
            label={type.name}
            sx={{
              margin: 0.4,
              backgroundColor: color,
            }}
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

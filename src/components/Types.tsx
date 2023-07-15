import { Box, Chip } from "@mui/material";
import { types } from "../data/types";

const Types = ({ selectedTypes, setSelectedTypes }) => {
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
  };

  return (
    <Box>
      {types.map((type) => (
        <Chip
          key={type.name}
          label={type.name}
          sx={{ margin: 0.4 }}
          onClick={() => {
            handleTypes(type.name);
          }}
        />
      ))}
    </Box>
  );
};

export default Types;

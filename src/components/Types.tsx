import { Box, Chip } from "@mui/material";
import { types } from "../data/types";

const Types = () => {
  return (
    <Box>
      {types.map((type) => (
        <Chip key={type.name} label={type.name} sx={{ margin: 0.4 }} />
      ))}
    </Box>
  );
};

export default Types;

import { Box, Chip } from "@mui/material";
import { regions } from "../data/regions";

const Generations = ({ setSelectedRegion }) => {
  return (
    <Box>
      {regions.map((type) => (
        <Chip
          key={type.name}
          label={type.name}
          sx={{ margin: 0.4 }}
          onClick={() => {
            setSelectedRegion(type);
          }}
        />
      ))}
    </Box>
  );
};

export default Generations;

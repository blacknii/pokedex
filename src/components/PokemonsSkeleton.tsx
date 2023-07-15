import { Box, Card, CardContent, Typography, Skeleton } from "@mui/material";

const PokemonsSkeleton = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {Array(20)
        .fill(0)
        .map((_, i) => (
          <Card sx={{ width: 250, padding: 1, margin: 2 }} key={i}>
            <Skeleton
              variant="rectangular"
              width={250}
              height={250}
              sx={{ borderRadius: 1 }}
            />
            <CardContent>
              <Typography variant="subtitle1" component="div" color="GrayText">
                <Skeleton />
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                <Skeleton />
              </Typography>
              <Typography variant="h5" component="div">
                <Skeleton width="50%" />
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};

export default PokemonsSkeleton;

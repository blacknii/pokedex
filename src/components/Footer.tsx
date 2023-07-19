import { AppBar, Toolbar, Typography, Stack, Link } from "@mui/material";

const Footer = () => {
  return (
    <AppBar sx={{ position: "static", alignItems: "center" }}>
      <Toolbar>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Typography
            sx={{
              fontSize: {
                sm: 18,
                xs: 15,
              },
              textAlign: "center",
            }}
          >
            POKEDEX powered by{" "}
            <Link color="secondary" href="https://pokeapi.co/" target="_blank">
              PokéAPI
            </Link>{" "}
            |{" "}
            <Link
              color="secondary"
              href="https://www.pokemon.com/"
              target="_blank"
            >
              Pokemon
            </Link>{" "}
            |{" "}
            <Link
              color="secondary"
              href="https://github.com/duiker101/pokemon-type-svg-icons"
              target="_blank"
            >
              Type Icons
            </Link>
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

import { AppBar, Toolbar, Typography, Stack } from "@mui/material";

const Footer = () => {
  return (
    <AppBar sx={{ position: "static", alignItems: "center" }}>
      <Toolbar>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Typography>
            POKEDEX Powered by{" "}
            <a href="https://pokeapi.co/" target="_blank">
              PokéAPI
            </a>{" "}
            |{" "}
            <a href="https://pokemondb.net/" target="_blank">
              Pokemon Database
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/duiker101/pokemon-type-svg-icons"
              target="_blank"
            >
              Type Icons
            </a>
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

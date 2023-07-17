import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Switch,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = () => {
  return (
    <AppBar sx={{ position: "static" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            POKEDEX
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <LightModeIcon />
          <Switch color="secondary" />
          <DarkModeIcon />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

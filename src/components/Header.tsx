import { AppBar, Toolbar, Typography, Stack, Switch } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setDarkMode, darkMode }: HeaderProps) => {
  return (
    <AppBar sx={{ position: "static" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <CatchingPokemonIcon aria-label="logo" />
          <Typography variant="h6" component="div">
            POKEDEX
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <DarkModeIcon />
          <Switch
            checked={!darkMode}
            onChange={() => {
              setDarkMode(!darkMode);
            }}
            color="secondary"
          />
          <LightModeIcon />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

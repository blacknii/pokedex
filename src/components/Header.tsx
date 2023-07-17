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
import { useState } from "react";

const Header = ({ setDarkMode }) => {
  const [checked, setChecked] = useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setDarkMode(checked);
  };

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
          <DarkModeIcon />
          <Switch checked={checked} onChange={handleChange} color="secondary" />
          <LightModeIcon />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

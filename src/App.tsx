import {
  Box,
  Stack,
  ThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { red } from "@mui/material/colors";
import { pokemonTypesPalette } from "./data/pokemonTypesPalette";
import { useState } from "react";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    pokemonTypes?: PalettePokemonTypesOptions;
  }

  interface PalettePokemonTypesOptions {
    chip?: {
      fill?: string;
      outline?: string;
      contrastText?: string;
    };
  }
}

function App() {
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const mode = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: red,
      secondary: {
        main: "#fefefe",
      },
      pokemonTypes: {
        chip: {
          fill: "transparent",
          outline: darkMode ? "#424242" : "#efefef",
          contrastText: "#fff",
        },
        ...pokemonTypesPalette,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack spacing={2} sx={{ alignItems: "center", height: "100vh" }}>
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <MainContent />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App;

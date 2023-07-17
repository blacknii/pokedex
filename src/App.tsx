import {
  Box,
  Stack,
  ThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const mode = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: mode,
      pokemonTypes: {
        normal: {
          main: "#A0A29F",
          light: "#AEB0AD",
        },
        fire: {
          main: "#FBA54C",
          light: "#FCB267",
        },
        water: {
          main: "#539DDF",
          light: "#6DACE4",
        },
        electric: {
          main: "#F2D94E",
          light: "#F4DF69",
        },
        grass: {
          main: "#5FBD58",
          light: "#77C771",
        },
        ice: {
          main: "#75D0C1",
          light: "#8AD7CA",
        },
        fighting: {
          main: "#D3425F",
          light: "#DA5E77",
        },
        poison: {
          main: "#B763CF",
          light: "#C27AD6",
        },
        ground: {
          main: "#DA7C4D",
          light: "#E09068",
        },
        flying: {
          main: "#A1BBEC",
          light: "#AFC5EF",
        },
        psychic: {
          main: "#FA8581",
          light: "#FB9794",
        },
        bug: {
          main: "#92BC2C",
          light: "#A7D23F",
        },
        rock: {
          main: "#C9BB8A",
          light: "#D1C59C",
        },
        ghost: {
          main: "#5F6DBC",
          light: "#7783C6",
        },
        dragon: {
          main: "#0C69C8",
          light: "#107FF1",
        },
        dark: {
          main: "#595761",
          light: "#716E7B",
        },
        steel: {
          main: "#5695A3",
          light: "#6EA6B2",
        },
        fairy: {
          main: "#EE90E6",
          light: "#F1A1EA",
        },
        components: {
          MuiButton: {
            styleOverrides: {
              outlinedPrimary: {
                borderRadius: 20,
              },
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack spacing={2} sx={{ alignItems: "center", height: "100vh" }}>
        <Header setDarkMode={setDarkMode} />
        <Box sx={{ flexGrow: "1" }}>
          <MainContent />
        </Box>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App;

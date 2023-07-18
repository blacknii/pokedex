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
import { red } from "@mui/material/colors";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const mode = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: red,
      secondary: {
        main: "#fefefe",
      },

      pokemonTypes: {
        main: {
          main: darkMode ? "transparent" : "transparent",
          light: "red",
          outline: darkMode ? "#424242" : "#efefef",
          contrastText: "#fff",
        },
        normal: {
          main: "#828782",
          light: "#AEB0AD",
          contrastText: "#fff",
        },
        fire: {
          main: "#FBA54C",
          light: "#FCB267",
          contrastText: "#0A0A0A",
        },
        water: {
          main: "#539DDF",
          light: "#6DACE4",
          contrastText: "#fff",
        },
        electric: {
          main: "#F2D94E",
          light: "#F4DF69",
          contrastText: "#212121",
        },
        grass: {
          main: "#5FBD58",
          light: "#77C771",
          contrastText: "#fff",
        },
        ice: {
          main: "#75D0C1",
          light: "#8AD7CA",
          contrastText: "#182F2F",
        },
        fighting: {
          main: "#D3425F",
          light: "#DA5E77",
          contrastText: "#fff",
        },
        poison: {
          main: "#B763CF",
          light: "#C27AD6",
          contrastText: "#fff",
        },
        ground: {
          main: "#DA7C4D",
          light: "#E09068",
          contrastText: "#fff",
        },
        flying: {
          main: "#A1BBEC",
          light: "#AFC5EF",
          contrastText: "#0F234D",
        },
        psychic: {
          main: "#FA8581",
          light: "#FB9794",
          contrastText: "#fff",
        },
        bug: {
          main: "#92BC2C",
          light: "#A7D23F",
          contrastText: "#25320B",
        },
        rock: {
          main: "#C9BB8A",
          light: "#D1C59C",
          contrastText: "#353018",
        },
        ghost: {
          main: "#5F6DBC",
          light: "#7783C6",
          contrastText: "#fff",
        },
        dragon: {
          main: "#0C69C8",
          light: "#107FF1",
          contrastText: "#fff",
        },
        dark: {
          main: "#595761",
          light: "#716E7B",
          contrastText: "#fff",
        },
        steel: {
          main: "#5695A3",
          light: "#6EA6B2",
          contrastText: "#fff",
        },
        fairy: {
          main: "#EE90E6",
          light: "#F1A1EA",
          contrastText: "#fff",
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

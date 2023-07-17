import { Box, Stack, ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack spacing={2} sx={{ alignItems: "center", height: "100vh" }}>
        <Header />
        <Box sx={{ flexGrow: "1" }}>
          <MainContent />
        </Box>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App;

import { Stack, ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <Header />
        <MainContent />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App;

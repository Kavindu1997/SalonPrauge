import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/navbar";
import Home from "./pages/home/home";
import Confirmation from "./pages/booking/confirmation";
import ServiceDetail from "./pages/booking/serviceDetail";
import BookingDetail from "./pages/booking/bookingDetail";
import { theme } from "./styles/mainTheme";
import "./styles/slick.css";
import "./styles/slick-theme.css";
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicedetail/:id" element={<ServiceDetail />} />
            <Route path="/bookingdetail/" element={<BookingDetail />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;

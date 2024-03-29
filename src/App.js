import {
    ThemeProvider,
    createTheme,
    responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import League from "./components/League";
import NotFound from "./components/NotFound";

let theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#5061BC",
        },
    },
});

theme = responsiveFontSizes(theme);

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route exact path="/" element={<Home />} />
                    <Route
                        exact
                        path="/league/:league_id"
                        element={<League />}
                    />
                </Routes>
                <Footer />
            </ThemeProvider>
        </div>
    );
}

export default App;

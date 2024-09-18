import { Stack } from "@chakra-ui/react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Homepage from "./pages/Homepage";
import RmbgPage from "./pages/Feature/RmbgPage";
import ProfilePage from "./pages/ProfilePage";
import CountriesPage from "./pages/Countries/CountriesPage";
import FlagQuizPage from "./pages/Countries/FlagQuizPage";
import CapitalQuizPage from "./pages/Countries/CapitalQuizPage";
import CryptoPage from "./pages/Crypto/CryptoPage";

export const BASE_URL =
    import.meta.env.MODE === "development"
        ? "http://127.0.0.1:5001/api"
        : "/api";

function App() {
    return (
        <Stack minH={"100vh"} px={10} pb={10}>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/feature/rmbg" element={<RmbgPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/countries" element={<CountriesPage />} />
                    <Route path="/countries/flagQuiz" element={<FlagQuizPage />} />
                    <Route path="/countries/capitalQuiz" element={<CapitalQuizPage />} />
                    <Route path="/crypto" element={<CryptoPage />} />
                </Routes>
            </BrowserRouter>
        </Stack>
    );
}

export default App;

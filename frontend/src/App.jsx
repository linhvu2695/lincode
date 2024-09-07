import { Stack } from "@chakra-ui/react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Homepage from "./pages/Homepage";
import RmbgPage from "./pages/Feature/RmbgPage";

export const BASE_URL =
    import.meta.env.MODE === "development"
        ? "http://127.0.0.1:5001/api"
        : "/api";

function App() {
    return (
        <Stack minH={"100vh"} px={10}>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/feature/rmbg" element={<RmbgPage />} />
                </Routes>
            </BrowserRouter>
        </Stack>
    );
}

export default App;

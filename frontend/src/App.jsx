import { Stack } from "@chakra-ui/react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Homepage from "./pages/Homepage";

export const BASE_URL =
    import.meta.env.MODE === "development"
        ? "http://127.0.0.1:5000/api"
        : "/api";

function App() {
    return (
        <Stack minH={"100vh"} px={10}>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </BrowserRouter>
        </Stack>
    );
}

export default App;

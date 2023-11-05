import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import TournamentList from "./routes/TournamentList";
import TournamentRegister from "./routes/TournamentRegister";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box, Flex } from "@chakra-ui/react";
import { UserProvider } from "./helper/Context";

export default function App() {
    return (
        <UserProvider>
            <Flex direction="column" minH="100vh">
                <Box flex="1">
                    <Router>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route
                                path="/tournament-list"
                                element={<TournamentList />}
                            />
                            <Route
                                path="/tournament-register/:tournamentId"
                                element={<TournamentRegister />}
                            />
                        </Routes>
                    </Router>
                </Box>
                <Box>
                    <Footer />
                </Box>
            </Flex>
        </UserProvider>
    );
}

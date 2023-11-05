import React, { useEffect, useState } from "react";
import { Button, Container, Heading, VStack } from "@chakra-ui/react";
import TournamentCard from "../components/TournamentCard";
import useWindowDimensions from "../helper/dimensions";
import { GetAllTournaments, GetUserData } from "../helper/api";
import { UserContext } from "../helper/Context";
import Cookies from "js-cookie";

export default function TournamentList() {
    const { user, setUser } = React.useContext(UserContext);

    const { width } = useWindowDimensions();

    useEffect(() => {
        const fetchTournaments = async () => {
            let tournamentData = await GetAllTournaments();
            setTournamentData(tournamentData.tournaments);
        };

        fetchTournaments();
    }, []);

    const handleLogout = () => {
        setUser(null);
        Cookies.remove("user");
        location.href = "/";
    };

    const [TournamentData, setTournamentData] = useState([]);

    return (
        <Container>
            <Heading>Tournament List</Heading>
            <VStack spacing="1" mt="5">
                {TournamentData.map((tournament, index) => (
                    <TournamentCard
                        key={index}
                        tournament={tournament}
                        width="100%"
                    />
                ))}
                <Button onClick={handleLogout}>Logout</Button>
            </VStack>
        </Container>
    );
}

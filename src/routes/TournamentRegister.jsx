import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Container,
    Heading,
    VStack,
    Button,
    Text,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Badge,
} from "@chakra-ui/react";
import { GetTournament, GetUserData } from "../helper/api";
import TournamentCard from "../components/TournamentCard";
import { UserContext } from "../helper/Context";

export default function TournamentRegister() {
    const { user, setUser } = React.useContext(UserContext);

    const { tournamentId } = useParams();

    const [tournament, setTournament] = useState({});
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchTournament = async () => {
            let tournamentData = await GetTournament(parseInt(tournamentId));
            setTournament(tournamentData.tournament);
        };

        fetchTournament();
    }, []);

    function calculateAge(birthdate) {
        // Parse the birthdate string into a Date object
        const birthDate = new Date(birthdate);

        // Get today's date
        const today = new Date();

        // Calculate the difference in years
        let age = today.getFullYear() - birthDate.getFullYear();

        // Check if the birthdate has not occurred yet this year
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (
            monthDifference < 0 ||
            (monthDifference === 0 && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }

        return age;
    }

    useEffect(() => {
        const fetchUserData = async () => {
            GetUserData(user)
                .then((res) => {
                    setUserData(res.user);
                    console.log(res);
                })
                .catch((err) => {
                    alert(err);
                });
        };
        if (user != null) {
            fetchUserData();
        }
    }, [user]);

    return (
        <Container>
            <VStack spacing="1" align="start">
                <Heading>{tournament.name}</Heading>
                <Text>{tournament.location}</Text>
                <Text>{tournament.date}</Text>
                <Badge colorScheme="green">{tournament.status}</Badge>
            </VStack>

            <VStack spacing="1" align="start" mt="5">
                <Text>Personal Info:</Text>
                <Text>Name: {userData.name}</Text>
                <Text>Surname: {userData.surname}</Text>
                <Text>Age: {calculateAge(userData.birthdate)}</Text>
                <Text>Gender: {userData.gender}</Text>
            </VStack>
        </Container>
    );
}

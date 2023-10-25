import { Container, Heading, VStack, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import useWindowDimensions from "../helper/dimensions";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
    const [count, setCount] = useState(0);
    const { width, height } = useWindowDimensions();

    return (
        <Container maxW="100%">
            <Heading>Young Blood Archery Tournament Registration Page</Heading>
            <VStack spacing="5" maxW="100%" mt="2">
                <Button
                    size="lg"
                    w={width * 0.8}
                    onClick={() => {
                        // go to register page
                        location.href = "/register";
                    }}
                >
                    Register
                </Button>
                <Button
                    size="lg"
                    w={width * 0.8}
                    onClick={() => {
                        // go to login page
                        location.href = "/login";
                    }}
                >
                    Login
                </Button>
            </VStack>
        </Container>
    );
}

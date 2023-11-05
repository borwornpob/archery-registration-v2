import React, { useState } from "react";
import {
    Card,
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Flex,
    Spacer,
    Badge,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

export default function TournamentCard({ tournament, width }) {
    return (
        <Card
            w={width}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}
            onClick={() => {
                location.href = `/tournament-register/${tournament.id}`;
            }}
        >
            <Flex minW="max-content">
                <VStack spacing="1" align="start">
                    <Heading>{tournament.name}</Heading>
                    <Text>{tournament.location}</Text>
                    <Text>{tournament.date}</Text>
                    <Badge colorScheme="green">{tournament.status}</Badge>
                </VStack>
                <Spacer />
                <HStack>
                    <ArrowRightIcon />
                </HStack>
            </Flex>
        </Card>
    );
}

import React, { useState } from "react";
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
    Spinner,
} from "@chakra-ui/react";
import { RegisterUser } from "../helper/api";

export default function Register() {
    const [userData, setUserData] = useState({
        password: "",
        telnumber: "",
        name: "",
        surname: "",
    }); // [username, password
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        setLoading(true);
        const result = await RegisterUser(userData);
        if (result.error == null) {
            alert("Register success");
            location.href = "/login";
        } else {
            alert(result.error);
        }
        setLoading(false);
    };

    return (
        <Container>
            <VStack spacing="1">
                <Heading>Register</Heading>
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        placeholder="Name"
                        onChange={(e) =>
                            setUserData({ ...userData, name: e.target.value })
                        }
                    />
                </FormControl>
                <FormControl id="surname" isRequired>
                    <FormLabel>Surname</FormLabel>
                    <Input
                        placeholder="Surname"
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                surname: e.target.value,
                            })
                        }
                    />
                </FormControl>
                <FormControl id="telnumber" isRequired>
                    <FormLabel>Tel. Number</FormLabel>
                    <Input
                        placeholder="Tel. Number"
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                telnumber: e.target.value,
                            })
                        }
                    />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                        placeholder="Password"
                        type="password"
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                password: e.target.value,
                            })
                        }
                    />
                </FormControl>
                <Button isLoading={loading} onClick={handleRegister}>
                    Register
                </Button>
                {loading ? <Spinner /> : null}
            </VStack>
        </Container>
    );
}

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
    Select,
} from "@chakra-ui/react";
import { RegisterUser } from "../helper/api";
import { Form } from "react-router-dom";
import { SingleDatepicker } from "chakra-dayzed-datepicker";

export default function Register() {
    const [userData, setUserData] = useState({
        password: "",
        telnumber: "",
        name: "",
        surname: "",
        birthdate: new Date(),
        gender: "",
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
                <FormControl id="birthdate" isRequired>
                    <FormLabel>Birthdate</FormLabel>
                    <SingleDatepicker
                        date={userData.birthdate}
                        onDateChange={(date) =>
                            setUserData({ ...userData, birthdate: date })
                        }
                        configs={{
                            dateFormat: "dd/MM/yyyy",
                        }}
                    />
                </FormControl>
                <FormControl id="gender" isRequired>
                    <FormLabel>Gender</FormLabel>
                    <Select
                        placeholder="Select your gender"
                        onChange={(e) => {
                            setUserData({
                                ...userData,
                                gender: e.target.value,
                            });
                        }}
                        value={userData.gender}
                    >
                        <option value="M">Male</option>
                        <option value="W">Female</option>
                        <option value="N">Not specified</option>
                    </Select>
                </FormControl>
                <FormControl id="telnumber" isRequired>
                    <FormLabel>Phone Number (Important for login)</FormLabel>
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

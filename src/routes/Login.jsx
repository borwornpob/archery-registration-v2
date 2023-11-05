import React, { useEffect, useState, useContext } from "react";
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
} from "@chakra-ui/react";
import { LoginUser } from "../helper/api";
import { UserContext } from "../helper/Context";
import Cookies from "js-cookie";

export default function Login() {
    const [telnumber, setTelnumber] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { user, setUser } = useContext(UserContext);

    const handleLogin = () => {
        setLoading(true);
        LoginUser({ telnumber, password })
            .then((res) => {
                if (res.error == null) {
                    Cookies.set("user", telnumber, { expires: 7 });
                    alert("Login success");
                    location.href = "/tournament-list";
                } else {
                    alert(res.error);
                }
            })
            .catch((err) => {
                alert(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        const user = Cookies.get("user");
        if (user) {
            setUser(user);
            location.href = "/tournament-list";
        }
    });

    return (
        <Container>
            <VStack spacing="1">
                <Heading>Login</Heading>
                <FormControl id="username" isRequired>
                    <FormLabel>Tel. Number</FormLabel>
                    <Input
                        placeholder="Username"
                        onChange={(e) => setTelnumber(e.target.value)}
                    />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
                <Button isLoading={loading} onClick={handleLogin}>
                    Login
                </Button>
            </VStack>
        </Container>
    );
}

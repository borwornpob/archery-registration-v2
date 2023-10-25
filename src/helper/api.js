const apiEndpoint = "http://localhost:3000/";

export const RegisterUser = async (user) => {
    const response = await fetch(`${apiEndpoint}register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: user.name,
            surname: user.surname,
            telnumber: user.telnumber,
            password: user.password,
        }),
    });

    const data = await response.json();
    return data;
};

export const LoginUser = async (user) => {
    const response = await fetch(`${apiEndpoint}login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            telnumber: user.telnumber,
            password: user.password,
        }),
    });

    const data = await response.json();
    return data;
};

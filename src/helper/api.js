const apiEndpoint = "http://localhost:3000/";

export const RegisterUser = async (user) => {
    let isFieldEmpty = false;
    // check if user's data is fully filled
    Object.keys(user).forEach((key) => {
        if (user[key] === "") {
            isFieldEmpty = true;
            return;
        }
    });

    if (isFieldEmpty) {
        return {
            error: "Please fill all the fields",
        };
    }

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
            gender: user.gender,
            birthdate: user.birthdate,
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

export const GetAllTournaments = async () => {
    const response = await fetch(`${apiEndpoint}tournaments`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    return data;
};

export const GetTournament = async (id) => {
    const response = await fetch(`${apiEndpoint}tournament/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    return data;
};

export const RegisterAthlete = async (athlete) => {
    const response = await fetch(`${apiEndpoint}athlete`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            tournamentId: athlete.tournamentId,
            name_en: athlete.name_en,
            name_th: athlete.name_th,
            surname_en: athlete.surname_en,
            surname_th: athlete.surname_th,
            sex: athlete.sex,
            division: athlete.division,
            classAthlete: athlete.classAthlete,
            payment_status: athlete.payment_status,
            telnumber: athlete.telnumber,
        }),
    });

    const data = await response.json();
    return data;
};

export const GetUserData = async (telnumber) => {
    const response = await fetch(`${apiEndpoint}user/${telnumber}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    return data;
};

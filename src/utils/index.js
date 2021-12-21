export const fetchRequest = async (username, email, password, setter) => {
    // setter will recieve the setUser data
    try {
        const response = await fetch("http://localhost:5000/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        console.log(data);
        setter(data.user);
    } catch (error) {
        console.log(error);
    }
};

export const readRequest = async (username, setter) => {
    try {
        const response = await fetch("http://localhost:5000/user", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username
            }),
        });
        const data = await response.json();
        setter(data.user);
    } catch (error) {
        console.log(error);
    }
};
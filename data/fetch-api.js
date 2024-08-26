import axios from "axios";
const BASE_URL = "http://localhost:8000/v1/users/login"

async function login(email, password) {
    try {
        const response = await axios.post(BASE_URL, {
            email: {email},
            password:{password}
        })
        console.log(response.data);
        return response.data;
    } catch(error) {
        console.log(error);
    }
};

export {login};
import axios from "axios";

export const ApiService = axios.create({
    baseURL: "https://myteacher-api.fly.dev",
    headers:{
        'Content-Type': 'application/json'
    }
})
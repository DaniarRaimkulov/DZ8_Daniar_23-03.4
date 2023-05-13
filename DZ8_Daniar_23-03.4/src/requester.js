import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2'

export const requester = axios.create({
    baseURL: BASE_URL
})

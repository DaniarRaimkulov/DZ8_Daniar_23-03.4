import { requester } from '../requester'

export const fetchPoke = async ({ limit, offset }) => {
    try {
        const { data } = await requester.get(`/pokemon?limit=${limit}&offset=${offset}`)
        return data
    }
    catch (error) {console.log(error)}
}
export const getPokemonId = async ( id ) => {
    try {
        const { data } = await requester.get(`/pokemon/${id}`)
        return data
    }
    catch (error) {console.log(error)}
}

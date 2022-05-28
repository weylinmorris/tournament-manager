import useSWR from "swr"
import axios, {get, post} from "axios"

// SWR data hooks
export function useCaddies() {
    const {data, error} = useSWR('/api/v1/caddies', (...args) => get(...args).then(res => res.data))

    return {
        caddies: data,
        isLoading: !error && !data,
        error: error,
    }
}

export function useCaddie(id) {
    const {data, error} = useSWR(`/api/v1/caddies/${id}`, (...args) => get(...args).then(res => res.data))

    return {
        caddie: data,
        isLoading: !error && !data,
        error: error,
    }
}

// Custom data functions
export async function createCaddie(data) {
    await post("/api/v1/caddies", data)
}

export async function updateCaddie(id, data) {
    await axios(`/api/v1/caddies/${id}`, {
        method: "PUT",
        data,
    })
}

export function deleteCaddie(id) {
    axios(`/api/v1/caddies/${id}`, {
        method: "DELETE"
    })
}

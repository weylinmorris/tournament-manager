import useSWR from "swr"
import axios, {get, post} from "axios"

// SWR data hooks
export function useTournaments() {
    const {data, error} = useSWR('/api/v1/tournaments', (...args) => get(...args).then(res => res.data))

    return {
        tournaments: data,
        isLoading: !error && !data,
        error: error,
    }
}

export function useTournament(id) {
    const {data, error} = useSWR(`/api/v1/tournaments/${id}`, (...args) => get(...args).then(res => res.data))

    return {
        tournament: data,
        isLoading: !error && !data,
        error: error,
    }
}

// Custom data functions
export async function createTournament(data) {
    await post("/api/v1/tournaments", data)
}

export async function updateTournament(id, data) {
    await axios(`/api/v1/tournaments/${id}`, {
        method: "PUT",
        data,
    })
}

export function deleteTournament(id) {
    axios(`/api/v1/tournaments/${id}`, {
        method: "DELETE"
    })
}

export function addCaddie(tournamentId, caddieId) {
    post(`/api/v1/tournament/add-caddie/${tournamentId}/${caddieId}`)
}

export function removeCaddie(tournamentId, caddieId) {

    console.log(tournamentId, caddieId)

    post(`/api/v1/tournament/remove-caddie/${tournamentId}/${caddieId}`)
}

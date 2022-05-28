import React, {useEffect, useState} from "react"
import {addCaddie, deleteTournament, removeCaddie, updateTournament, useTournament} from "../../state/tournaments";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export default function Tournament() {
    let {id} = useParams()
    const {tournament, isLoading, error} = useTournament(id)

    const [tournamentName, setTournamentName] = useState("")
    const [courseName, setCourseName] = useState("")
    const [date, setDate] = useState("")
    const [tournamentCaddies, setTournamentCaddies] = useState([])
    const [otherCaddies, setOtherCaddies] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if (!tournament) return

        setTournamentName(tournament.tournament.tournament_name)
        setCourseName(tournament.tournament.course_name)
        setDate(tournament.tournament.date)

        setTournamentCaddies(tournament?.tournament_caddies)
        setOtherCaddies(tournament?.other_caddies)
    }, [tournament, isLoading, error])

    async function saveTournament(e) {
        e.preventDefault()

        if (!tournament) return

        await updateTournament(id, {
            tournament_name: tournamentName,
            course_name: courseName,
            date: date,
        })

        navigate("/tournaments")
    }

    function boundAddCaddie(caddieId) {
        setTournamentCaddies([...tournamentCaddies, otherCaddies.find(caddie => caddie.id === caddieId)])
        setOtherCaddies(otherCaddies.filter(caddie => caddie.id !== caddieId))

        addCaddie(tournament.tournament.id, caddieId)
    }

    function boundRemoveCaddie(caddieId) {
        setTournamentCaddies(tournamentCaddies.filter(caddie => caddie.id !== caddieId))
        setOtherCaddies([...otherCaddies, tournamentCaddies.find(caddie => caddie.id === caddieId)])

        removeCaddie(tournament.tournament.id, caddieId)
    }

    function boundDeleteTournament() {
        if (!tournament) return

        if (!confirm("Are you sure you want to delete this tournament?")) return

        deleteTournament(tournament.tournament.id)
        navigate("/tournaments")
    }

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Failed to load tournaments</p>

    return (
        <main className="m-8">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-lg">{tournament.tournament.tournament_name}</h1>

                <button
                    onClick={boundDeleteTournament}
                    className="border-2 border-red-500 text-sm text-red-500 rounded-md px-8 py-1"
                >Delete</button>
            </div>

            <section className="mt-4">
                <form className="flex flex-col gap-2 items-start">
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm" htmlFor="tournament-name">
                            Tournament Name
                        </label>
                        <input
                            className="shadow border rounded min-w-96 py-1 px-3 text-gray-700 text-sm"
                            id="tournament-name"
                            type="text"
                            value={tournamentName}
                            onChange={e => setTournamentName(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm" htmlFor="course-name">
                            Course Name
                        </label>
                        <input
                            className="shadow border rounded min-w-96 py-1 px-3 text-gray-700 text-sm"
                            id="course-name"
                            type="text"
                            value={courseName}
                            onChange={e => setCourseName(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm" htmlFor="date">
                            Date
                        </label>
                        <input
                            className="shadow border rounded min-w-96 py-1 px-3 text-gray-700 text-sm"
                            id="date"
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                    </div>

                    <button
                        id="button"
                        className="text-sm px-8 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                        onClick={saveTournament}
                    >Save
                    </button>
                </form>
            </section>

            <h3 className="text-sm font-bold mt-8">Assigned Caddies</h3>
            <section className="flex flex-col divide-y divide-gray-300 border border-gray-300">
                {tournamentCaddies
                    .map((caddie, index) => (
                        <div key={index} className="flex justify-between items-center p-4">
                            <div>
                                <h3 className="text-sm font-bold">{caddie.caddie_name} - {caddie.location}</h3>
                                <p className="text-sm">{caddie.rating} / 5</p>
                            </div>

                            <button
                                id="button"
                                className="text-sm px-8 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                                onClick={() => boundRemoveCaddie(caddie.id)}
                            >Remove
                            </button>
                        </div>
                    ))}
            </section>

            <h3 className="text-sm font-bold mt-8">Other Caddies</h3>
            <section className="flex flex-col divide-y divide-gray-300 border border-gray-300">
                {otherCaddies
                    .map((caddie, index) => (
                        <div key={index} className="flex justify-between items-center p-4">
                            <div>
                                <h3 className="text-sm font-bold">{caddie.caddie_name} - {caddie.location}</h3>
                                <p className="text-sm">{caddie.rating} / 5</p>
                            </div>

                            <button
                                className="text-sm px-8 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                                onClick={() => boundAddCaddie(caddie.id)}
                            >Add
                            </button>
                        </div>
                    ))}
            </section>
        </main>
    )
}

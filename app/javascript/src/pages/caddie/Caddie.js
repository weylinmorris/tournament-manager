import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {deleteCaddie, updateCaddie, useCaddie} from "../../state/caddies";
import dayjs from "dayjs";

export default function Caddie() {
    let {id} = useParams()
    const {caddie, isLoading, error} = useCaddie(id)

    const [caddieName, setCaddieName] = useState("")
    const [location, setLocation] = useState("")
    const [rating, setRating] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        if (!caddie) return

        setCaddieName(caddie.caddie.caddie_name)
        setLocation(caddie.caddie.location)
        setRating(caddie.caddie.rating)
    }, [caddie, isLoading, error])

    async function saveCaddie(e) {
        e.preventDefault()

        if (!caddie) return

        await updateCaddie(id, {
            caddie_name: caddieName,
            location,
            rating,
        })

        navigate("/caddies")
    }

    function boundDeleteCaddie() {
        if (!caddie) return

        if (!confirm("Are you sure you want to delete this caddie?")) return

        deleteCaddie(caddie.caddie.id)
        navigate("/caddies")
    }

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Failed to load caddies</p>

    return (
        <main className="m-8">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-lg">{caddie.caddie.caddie_name}</h1>

                <button
                    onClick={boundDeleteCaddie}
                    className="border-2 border-red-500 text-sm text-red-500 rounded-md px-8 py-1"
                >Delete</button>
            </div>

            <section className="mt-4">
                <form className="flex flex-col gap-2 items-start">
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm" htmlFor="caddie-name">
                            Caddie Name
                        </label>
                        <input
                            className="shadow border rounded min-w-96 py-1 px-3 text-gray-700 text-sm"
                            id="caddie-name"
                            type="text"
                            value={caddieName}
                            onChange={e => setCaddieName(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm" htmlFor="location">
                            Location
                        </label>
                        <input
                            className="shadow border rounded min-w-96 py-1 px-3 text-gray-700 text-sm"
                            id="location"
                            type="text"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm" htmlFor="rating">
                            Rating
                        </label>
                        <input
                            className="shadow border rounded min-w-96 py-1 px-3 text-gray-700 text-sm"
                            id="rating"
                            type="text"
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <button
                        id="button"
                        className="text-sm px-8 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                        onClick={saveCaddie}
                    >Save
                    </button>
                </form>
            </section>

            <h3 className="text-sm font-bold mt-8">Assigned Tournaments</h3>
            <section className="flex flex-col divide-y divide-gray-300 border border-gray-300">
                {caddie.tournaments
                    .map((tournament, index) => (
                        <Link to={`/tournaments/${tournament.id}`} key={index}>
                            <div className="flex justify-between items-center p-4 hover:cursor-pointer">
                                <div>
                                    <h3 className="text-sm font-bold">{tournament.tournament_name}</h3>
                                    <p className="text-sm">{tournament.course_name} - {dayjs(tournament.date).format("MMMM D, YYYY")}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
            </section>

        </main>
    )
}

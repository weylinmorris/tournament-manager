import React, {useEffect} from "react"
import {useTournaments} from "../../state/tournaments";
import {Link} from "react-router-dom";
import dayjs from "dayjs";

export default function Tournaments() {
    const {tournaments, isLoading, error} = useTournaments()
    const [date, setDate] = React.useState(null)

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Failed to load tournaments</p>

    return (
        <main className="m-8">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-lg">Tournaments</h1>

                <input
                    className="bg-white border border-gray-300 rounded-lg py-2 px-4 text-sm"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>

            <section className="flex flex-col my-6 divide-y divide-gray-300 border border-gray-300">
                {
                    tournaments
                        .filter(tournament => {
                            if (date) return dayjs(tournament.date).isSame(date, 'day')
                            else return true
                        })
                        .map((tournament, index) => (
                            <Link to={`/tournaments/${tournament.id}`}>
                                <div key={index} className="flex justify-between p-4 hover:bg-gray-50">
                                    <div>
                                        <h3 className="font-bold">{tournament.tournament_name}</h3>
                                        <p className="text-sm">{tournament.course_name}</p>
                                    </div>

                                    <div className="flex flex-col items-end">
                                        <p className="text-sm font-bold">{dayjs(tournament.date).format("MMMM D, YYYY")}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                }
            </section>
        </main>
    )
}

import React from "react"
import {Link} from "react-router-dom";
import {useCaddies} from "../../state/caddies";

export default function Caddies() {
    const {caddies, isLoading, error} = useCaddies()

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Failed to load tournaments</p>

    return (
        <main className="m-8">
            <h1 className="font-bold text-lg">Caddies</h1>

            <section className="flex flex-col my-6 divide-y divide-gray-300 border border-gray-300">
                {
                    caddies.map((caddie, index) => (
                        <Link to={`/caddies/${caddie.id}`}>
                            <div key={index} className="flex justify-between p-4 hover:bg-gray-50">
                                <div>
                                    <h3 className="font-bold">{caddie.caddie_name}</h3>
                                    <p className="text-sm">{caddie.location}</p>
                                </div>

                                <div className="flex flex-col items-end">
                                    <p className="text-sm font-bold">{caddie.rating} / 5</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </section>
        </main>
    )
}

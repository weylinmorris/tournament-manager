import React from "react"
import {NavLink} from "react-router-dom";

export default function Navbar() {
    const navItems = [
        {
            name: "Tournaments",
            to: "/tournaments"
        },
        {
            name: "Caddies",
            to: "/caddies"
        }
    ]

    return (
        <nav className="flex justify-end gap-6 px-12 py-4 shadow-lg">
            {
                navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.to}
                        className={({isActive}) => ` ${isActive && "font-bold"}`}
                    >{item.name}</NavLink>
                ))
            }
        </nav>
    )
}

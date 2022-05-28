import React from "react"
import * as ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./src/components/ui/Navbar";
import Tournaments from "./src/pages/tournament/Tournaments";
import Tournament from "./src/pages/tournament/Tournament";
import CreateTournament from "./src/pages/tournament/CreateTournament";
import Caddies from "./src/pages/caddie/Caddies";
import CreateCaddie from "./src/pages/caddie/CreateCaddie";
import Caddie from "./src/pages/caddie/Caddie";

const RoutedApp = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/tournaments" element={<Tournaments />} />
                <Route path="/tournaments/:id" element={<Tournament />} />
                <Route path="/tournaments/create" element={<CreateTournament />} />

                <Route path="/caddies" element={<Caddies />} />
                <Route path="/caddies/:id" element={<Caddie />} />
                <Route path="/caddies/create" element={<CreateCaddie />} />

                <Route path="*" element={<Tournaments />} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<RoutedApp />, document.getElementById("root"))

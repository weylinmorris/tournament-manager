import React from "react"
import * as ReactDOM from "react-dom";
import Navbar from "./src/components/ui/Navbar";

const RoutedApp = () => {
    return (
        <div>
            <Navbar />
        </div>
    )
}

ReactDOM.render(<RoutedApp />, document.getElementById("root"))

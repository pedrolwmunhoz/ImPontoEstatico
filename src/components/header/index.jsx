import React from "react"
import Clock from "../clock";

const Header = () => {
    return (
        <div className="flex flex-col w-full bg-blue-500 gap-4 rounded-b-2xl p-2 pb-8">
            <h1 className="text-white font-bold">ImPonto</h1>
            <Clock/>
        </div>
    )
}

export default Header;
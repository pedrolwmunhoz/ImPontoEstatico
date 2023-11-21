import React from "react";
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegCalendarCheck } from "react-icons/fa6";

const NavBar = () => {
    return(
        <div className="flex flex-row border-t-0 justify-between p-4 border-black border-solid">
            <IoHome size={40} color="blue"/>
            <CgProfile size={40} color="blue"/>
            <FaRegCalendarCheck size={40} color="blue"/>
        </div>
    )
}

export default NavBar;
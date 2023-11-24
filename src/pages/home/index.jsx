import React from "react";

import Header from "../../components/header";
import Registro from "../../components/registro";



const Home = () => {
    return(
        <div className="flex flex-col w-screen gap-10 items-center">
            <Header />
            <div className="w-4/5">
                <Registro />
            </div>

        </div>
    )
}

export default Home;
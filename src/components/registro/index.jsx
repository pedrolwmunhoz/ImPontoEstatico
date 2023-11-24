import React from "react";

const Registro = () => {
    return (
        <div className="flex flex-col items-center border-solid border-gray-400 border-2 py-12 rounded-md">
            <div className="flex flex-col">
                <p>Registrar ponto</p>
                <input className="border-gray-500 border-solid border-2 rounded-md py-2 px-2" placeholder="ID usuario"></input>
                <input className="border-gray-500 border-solid border-2 rounded-md py-2 px-2" placeholder="Senha"></input>
                <button>Registrar</button>
            </div>

        </div>
    )
}

export default Registro;
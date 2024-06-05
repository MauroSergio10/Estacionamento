import React from "react";
import { useNavigate } from "react-router-dom";

function ConsultarPlaca(){
    const navigate = useNavigate();
    return(
        <div className="flex w-full h-screen justify-center items-center">
            
            <div className="flex flex-col bg-gray-800 w-4/12 min-h-96 justify-center items-center rounded-xl space-y-5">
                <p className="text-white mb-4 text-xl">DIGITE SUA PLACA</p>
                <input
                    className="h-16 text-black px-2 focus:outline-none focus:border-2 focus:border-indigo-700 w-44 mb-4 uppercase text-2xl font-bold"
                />
                <button className="bg-indigo-700 text-white h-16 w-44 rounded-full" onClick={() => navigate('/Pagamento')}>Pesquisar</button>
            </div>
        </div>
    )
}


export default ConsultarPlaca;
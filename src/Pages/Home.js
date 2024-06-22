import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faHistory, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import bd from '../bd.json';
import { useUser } from "../UserContext";
import { Link } from 'react-router-dom'; // Importe o Link para navegação

function Home() {
    const { user, setUser } = useUser();
    const calculateTariff = useCallback((dataEntrada) => {
        if (!dataEntrada) return 0;
        const entrada = new Date(dataEntrada);
        const agora = new Date();
        const diffMinutes = (agora - entrada) / 60000;
        return diffMinutes * 0.10;
    }, []);

    const [tariffs, setTariffs] = useState([]);

    // Atualiza os dados sempre que o componente é montado e sempre que bd.json é atualizado
    useEffect(() => {
        const updatedTariffs = bd.map(item => ({
            id: item.id,
            tariff: item.active ? calculateTariff(item.dataEntrada) : calculateTariff(item.dataEntrada)
        }));
        setTariffs(updatedTariffs);
    }, [calculateTariff]);

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedTariffs = bd.map(item => ({
                id: item.id,
                tariff: item.active ? calculateTariff(item.dataEntrada) : calculateTariff(item.dataEntrada)
            }));
            setTariffs(updatedTariffs);
        }, 1000);

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(interval);
    }, [calculateTariff]);

    return (
        <div>
            <header className="bg-gray-800 text-white text-center py-4 items-center flex justify-between flex-row-reverse">
                <div className="flex items-center w-1/3 justify-end">
                    <Link to="/historico" className="text-gray-300 hover:text-white mr-4">
                        <FontAwesomeIcon icon={faHistory} />
                        <span className="ml-2">Histórico</span>
                    </Link>
                    <button onClick={() => setUser(null)} className="text-gray-300 hover:text-white mr-4">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span className="ml-2">Logout</span>
                    </button>
                </div>
                <div className="flex-grow w-1/3">
                    <h1 className="text-2xl font-bold">Estacionamento</h1>
                </div>
                <div className="flex items-center w-1/3">
                    <img src={user?.photo} alt="User" className="rounded-full h-10 w-10 ml-4" />
                </div>
            </header>
            {/* Restante do conteúdo... */}
            <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
                <div className="px-4 md:px-20 flex flex-col md:flex-row w-full">
                    <div className="text-white font-bold bg-gray-800 rounded-2xl px-4 md:px-10 pb-2 w-full">
                        <h1 className="font-bold text-white text-xl w-full flex justify-center items-center py-8">Gerenciamento de Vagas</h1>
                        <div className="flex flex-col md:flex-row md:space-x-8 w-full">
                            <div className="w-full flex flex-wrap">
                                {bd.slice(0, 10).map((item) => {

                                    const tariff = tariffs.find(t => t.id === item.id)?.tariff || 0;
                                    return (
                                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-2" key={item.id}>
                                            <div className={`h-32 rounded-2xl lg:justify-center lg:items-center flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start space-y-2 lg:space-y-0 p-4 ${item.active ? 'bg-green-500' : 'bg-red-500'}`}>
                                                <h1 className="text-xl lg:rotate-90">{item.id}</h1>
                                                <h1 className="text-xl lg:rotate-90 border p-1 rounded-xl">{item.placa}</h1>
                                                <FontAwesomeIcon className="text-xl lg:rotate-90" icon={faCar} />
                                                {!item.active && (
                                                    <h1 className="text-xl">
                                                        Tarifa: R${tariff.toFixed(2)}
                                                    </h1>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="hidden md:flex md:w-10 flex-col justify-between">
                                <div className="bg-gray-300 w-full h-1/4 my-3 rounded-md shadow-2xl"></div>
                                <div className="bg-gray-300 w-full h-1/4 my-3 rounded-md shadow-2xl"></div>
                                <div className="bg-gray-300 w-full h-1/4 my-3 rounded-md shadow-2xl"></div>
                                <div className="bg-gray-300 w-full h-1/4 my-3 rounded-md shadow-2xl"></div>
                            </div>
                            <div className="w-full flex flex-wrap">
                                {bd.slice(10, 20).map((item) => {
                                    const tariff = tariffs.find(t => t.id === item.id)?.tariff || 0;
                                    return (
                                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-2" key={item.id}>
                                            <div className={`h-32 rounded-2xl lg:justify-center lg:items-center flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start space-y-2 lg:space-y-0 p-4 ${item.active ? 'bg-green-500' : 'bg-red-500'}`}>
                                                <h1 className="text-xl lg:rotate-90">{item.id}</h1>
                                                <h1 className="text-xl lg:rotate-90 border p-1 rounded-xl">{item.placa}</h1>
                                                <FontAwesomeIcon className="text-xl lg:rotate-90 " icon={faCar} />
                                                {!item.active && (
                                                    <h1 className="text-xl">
                                                        Tarifa: R${tariff.toFixed(2)}
                                                    </h1>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

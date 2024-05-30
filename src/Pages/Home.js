import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

function Home() {
    const list = [
        { id: 1, active: true, placa: 'DISPONIVEL' },
        { id: 2, active: true, placa: 'DISPONIVEL' },
        { id: 3, active: false, placa: 'GHI3J45' },
        { id: 4, active: true, placa: 'DISPONIVEL' },
        { id: 5, active: true, placa: 'DISPONIVEL' },
        { id: 6, active: true, placa: 'DISPONIVEL' },
        { id: 7, active: true, placa: 'DISPONIVEL' },
        { id: 8, active: true, placa: 'DISPONIVEL' },
        { id: 9, active: true, placa: 'DISPONIVEL' },
        { id: 10, active: false, placa: 'BCD1C23' },
        { id: 11, active: true, placa: 'DISPONIVEL' },
        { id: 12, active: false, placa: 'HIJ3E45' },
        { id: 13, active: true, placa: 'DISPONIVEL' },
        { id: 14, active: false, placa: 'NOP5G67' },
        { id: 15, active: true, placa: 'DISPONIVEL' },
        { id: 16, active: false, placa: 'TUV7I89' },
        { id: 17, active: true, placa: 'DISPONIVEL' },
        { id: 18, active: true, placa: 'DISPONIVEL' },
        { id: 19, active: true, placa: 'DISPONIVEL' },
        { id: 20, active: false, placa: 'FGH2M34' },
    ];

    return (
        <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
            <div className="px-4 md:px-20 flex flex-col md:flex-row w-full">
                <div className="text-white font-bold bg-gray-800 rounded-2xl px-4 md:px-10 pb-2 w-full">
                    <h1 className="font-bold text-white text-xl w-full flex justify-center items-center py-8">Gereciamento de Vagas</h1>
                    <div className="flex flex-col md:flex-row md:space-x-8 w-full">
                        <div className="w-full flex flex-wrap">
                            {list.slice(0, 10).map((item) => (
                                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-2" key={item.id}>
                                    <div className={`h-32 rounded-2xl lg:justify-center lg:items-center flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start space-y-2 lg:space-y-0 p-4 ${item.active ? 'bg-green-500' : 'bg-red-500'}`}>
                                        <h1 className="text-xl lg:rotate-90">{item.id}</h1>
                                        <h1 className="text-xl lg:rotate-90 border p-1 rounded-xl">{item.placa}</h1>
                                        <FontAwesomeIcon className="text-xl lg:rotate-90" icon={faCar} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="hidden md:flex md:w-10 flex-col justify-between">
                            <div className="bg-gray-300 w-full h-1/4 my-3 rounded-md shadow-2xl"></div>
                            <div className="bg-gray-300 w-full h-1/4 my-3 rounded-md shadow-2xl"></div>
                            <div className="bg-gray-300 w-full h-1/4 my-3 rounded-md shadow-2xl"></div>
                            <div className="bg-gray-300 w-full h-1/4 my-3 rounded-md shadow-2xl"></div>
                        </div>
                        <div className="w-full flex flex-wrap">
                            {list.slice(10, 20).map((item) => (
                                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-2" key={item.id}>
                                    <div className={`h-32 rounded-2xl lg:justify-center lg:items-center flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start space-y-2 lg:space-y-0 p-4 ${item.active ? 'bg-green-500' : 'bg-red-500'}`}>
                                        <h1 className="text-xl lg:rotate-90">{item.id}</h1>
                                        <h1 className="text-xl lg:rotate-90 border p-1 rounded-xl">{item.placa}</h1>
                                        <FontAwesomeIcon className="text-xl lg:rotate-90" icon={faCar} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

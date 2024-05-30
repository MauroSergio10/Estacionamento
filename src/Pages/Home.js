import React from "react";
// icone de vaga de veiculo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

function Home() {

    // lista com 20 elementos coloque um id e se esta ativo ou nao
    const list = [
        { id: 1, active: true },
        { id: 2, active: true },
        { id: 3, active: false },
        { id: 4, active: true },
        { id: 5, active: true },
        { id: 6, active: true },
        { id: 7, active: true },
        { id: 8, active: true },
        { id: 9, active: true },
        { id: 10, active: false },
        { id: 11, active: true },
        { id: 12, active: false },
        { id: 13, active: true },
        { id: 14, active: false },
        { id: 15, active: true },
        { id: 16, active: false },
        { id: 17, active: true },
        { id: 18, active: true },
        { id: 19, active: true },
        { id: 20, active: false }
    ];

    return (
        <div className=" justify-center itmes-center h-screen space-y-4">
            <header className="bg-indigo-700 w-full h-20">

            </header>
            <div className="px-20 flex ">
                <div className="text-white font-bold bg-gray-800 rounded-2xl px-10 pb-2">
                    <h1 className="font-bold text-white text-xl w-full flex justify-center items-center py-8 ">Gereciamento de Vagas</h1>
                    <div className="flex space-x-8 ">
                        <div className="w-full flex flex-wrap ">
                            {/* ate o item 9 */}
                            {list.slice(0, 10).map((item) => (
                                <div className="w-1/2">
                                    <div className="p-2">
                                        <div className={`h-32 rounded-2xl flex justify-between items-center p-8 ${item.active ? 'bg-green-500' : 'bg-red-500'}`}>
                                            <h1 className=" rotate-90 text-xl">{item.id}</h1>
                                            <FontAwesomeIcon className="rotate-90 text-xl" icon={faCar} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-10 flex flex-col justify-between">
                            <div className="bg-gray-300 w-full h-1/4 my-3 rounded-md shadow-2xl"></div>
                            <div className="bg-gray-300 w-full h-1/4 my-3 rounded-md shadow-2xl"></div>
                            <div className="bg-gray-300 w-full h-1/4 my-3 rounded-md shadow-2xl"></div>
                            <div className="bg-gray-300 w-full h-1/4 my-3 rounded-md shadow-2xl"></div>
                        </div>
                        <div className="w-full flex flex-wrap">
                            {/* do item 10 ao 20 */}
                            {list.slice(10, 20).map((item) => (
                                <div className="w-1/2">
                                    <div className="p-2">
                                        <div className={`h-32 rounded-2xl flex justify-between items-center p-8 ${item.active ? 'bg-green-500' : 'bg-red-500'}`}>
                                            <h1 className=" rotate-90 text-xl">{item.id}</h1>
                                            <FontAwesomeIcon className="rotate-90 text-xl" icon={faCar} />
                                        </div>
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


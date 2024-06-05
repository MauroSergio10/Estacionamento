import React, { useState } from "react";

function Pagamento() {
    return (
        <div className="items-center text-white w-full h-screen space-y-8">
            <div className="h-20 bg-indigo-700 w-screen">
            </div>
            <div className="space-y-28 px-32">
                <h1 className="text-4xl text-center py-4 font-bold">Pagamento</h1>
                <div className="flex flex-col px-20">
                    <p className="text-2xl pb-4 w-full font-bold">Resumo</p>
                    <div className="font-bold flex border border-white rounded-2xl justify-between px-8 text-2xl">
                        <div class="Entrada" className="flex flex-col justify-center items-center p-4 space-y-4">
                            <p className="">Entrada</p>
                            <p>17:45</p>
                        </div>
                        <div class="Entrada" className="flex flex-col justify-center items-center p-4 space-y-4">
                            <p>Saída</p>
                            <p>17:45</p>
                        </div>
                        <div class="Entrada" className="flex flex-col justify-center items-center p-4 space-y-4">
                            <p>Duração</p>
                            <p>17:45</p>
                        </div>
                        <div class="Entrada" className="flex flex-col justify-center items-center p-4 space-y-4">
                            <p>Valor Total</p>
                            <p>17:45</p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-azulroxado h-0.5">
                </div>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <div className="flex bg-azulroxado p-6 rounded-xl space-x-4 h-24">
                            <h1 className="font-bold text-xl flex items-center">Adicionar cupom</h1>
                            <div className="flex">
                                <input className="text-black px-2 focus:outline-none focus:border-2 focus:border-indigo-700 rounded-l-md" type="text"></input>
                                <button className="bg-stone-800 px-12 rounded-r-md text-azulroxado font-bold hover:bg-gray-900/50 border border-transparent hover:text-white hover:border-gray-900 transition-all duration-300 ease-in-out">Utilizar</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-32 space-y-4">
                <div>
                    <p className="text-2xl font-bold">Total: 9,00R$</p>
                </div>
                <div>
                    <button className="bg-azulroxado h-10 w-44 rounded-full">Finalizar</button>
                </div>
            </div>

        </div >
    );
}

function ConsultarPlaca(){
    return(
        <div className="flex w-full h-screen justify-center items-center">
            
            <div className="flex flex-col bg-gray-800 w-4/12 min-h-96 justify-center items-center rounded-xl space-y-5">
                <p className="text-white mb-4 text-xl">DIGITE SUA PLACA</p>
                <input
                    className="h-16 text-black px-2 focus:outline-none focus:border-2 focus:border-indigo-700 w-44 mb-4 uppercase text-2xl font-bold"
                />
                <button className="bg-indigo-700 text-white h-16 w-44 rounded-full">Pesquisar</button>
            </div>
        </div>
    )
}


export default ConsultarPlaca;
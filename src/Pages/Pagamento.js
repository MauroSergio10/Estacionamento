import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import dadosEstacionamento from '../bd.json'; // Importe seu arquivo JSON aqui

function Pagamento() {
    const navigate = useNavigate();
    const location = useLocation();
    const { dadosEstacionamento } = location.state; // Recebe os dados da consulta de placa

    const calculateTariff = useCallback((dataEntrada, dataSaida) => {
        if (!dataEntrada || !dataSaida) return 0;

        const entrada = new Date(dataEntrada);
        const saida = new Date(dataSaida);
        const diffMilliseconds = saida - entrada;
        const diffMinutes = diffMilliseconds / (1000 * 60);
        return diffMinutes * 0.10;
    }, []);

    const [valorTotal, setValorTotal] = useState(0);
    const [horaAtual, setHoraAtual] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setHoraAtual(new Date());
        }, 60000); // Atualiza a hora a cada minuto

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (dadosEstacionamento) {
            const { dataEntrada, dataSaida } = dadosEstacionamento;
            const tarifaCalculada = calculateTariff(dataEntrada, dataSaida || horaAtual);
            setValorTotal(tarifaCalculada);
        }
    }, [dadosEstacionamento, calculateTariff, horaAtual]);

    const formatarHorario = (data) => {
        if (!data) return "";
        const dataObj = new Date(data);
        const horas = dataObj.getHours().toString().padStart(2, '0');
        const minutos = dataObj.getMinutes().toString().padStart(2, '0');
        return `${horas}:${minutos}`;
    };

    const calcularDuracao = (dataEntrada, dataSaida) => {
        if (!dataEntrada) return "";

        const entrada = new Date(dataEntrada);
        const saida = dataSaida ? new Date(dataSaida) : horaAtual; // Usar hora atual se dataSaida estiver vazia
        const diffMilliseconds = saida - entrada;

        if (diffMilliseconds < 0) {
            return "";
        }

        const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
        return `${diffHours}:${diffMinutes.toString().padStart(2, '0')}`;
    };

    const finalizarPagamento = () => {
        navigate('/ConsultarPlaca');
    };

    return (
        <div className="items-center text-white w-full h-screen space-y-8">
            <div className="h-20 bg-indigo-700 w-screen"></div>
            <div className="space-y-28 px-32">
                <h1 className="text-4xl text-center py-4 font-bold">Pagamento</h1>
                <div className="flex flex-col px-20">
                    <p className="text-2xl pb-4 w-full font-bold">Resumo</p>
                    {dadosEstacionamento && (
                        <div className="font-bold flex border border-white rounded-2xl justify-between px-8 text-2xl">
                            <div className="flex flex-col justify-center items-center p-4 space-y-4">
                                <p>Entrada</p>
                                <p>{formatarHorario(dadosEstacionamento.dataEntrada)}</p>
                            </div>
                            <div className="flex flex-col justify-center items-center p-4 space-y-4">
                                <p>Saída</p>
                                <p>{formatarHorario(dadosEstacionamento.dataSaida || horaAtual)}</p>
                            </div>
                            <div className="flex flex-col justify-center items-center p-4 space-y-4">
                                <p>Duração</p>
                                <p>{calcularDuracao(dadosEstacionamento.dataEntrada, dadosEstacionamento.dataSaida)}</p>
                            </div>
                            <div className="flex flex-col justify-center items-center p-4 space-y-4">
                                <p>Valor Total</p>
                                <p>R${valorTotal.toFixed(2)}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="w-full bg-azulroxado h-0.5"></div>
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
                    <p className="text-2xl font-bold">Total: R${valorTotal.toFixed(2)}</p>
                </div>
                <div>
                    <button onClick={finalizarPagamento} className="bg-azulroxado h-10 w-44 rounded-full">Finalizar</button>
                </div>
            </div>
        </div>
    );
}

export default Pagamento;

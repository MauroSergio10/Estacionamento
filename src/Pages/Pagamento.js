import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import historicoData from '../historico.json'; // Importa dados de historico.json
import bdData from '../bd.json'; // Importa dados de bd.json

function Pagamento() {
    const location = useLocation();
    const navigate = useNavigate();
    const [registro, setRegistro] = useState(null);
    const [valorTotal, setValorTotal] = useState(0);
    const [duracaoMinutos, setDuracaoMinutos] = useState(0);

    // Função para enviar a placa para a API de histórico
    async function enviarParaHistorico(placa) {
        try {
            const url = `http://localhost:3001/historico/${placa}`;
            console.log(`Tentando enviar para: ${url}`); // Log para depuração
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`Falha ao enviar para a API de histórico: ${response.statusText}`);
            }
            // Trate a resposta conforme necessário
        } catch (error) {
            console.error('Erro ao enviar placa para a API de histórico:', error);
        }
    }

    // Função para enviar a placa para a API de dados
    async function enviarParaPlaca(placa) {
        try {
            const url = `http://localhost:3001/dados/${placa}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Falha ao enviar para a API de dados');
            }
            // Trate a resposta conforme necessário
        } catch (error) {
            console.error('Erro ao enviar placa para a API de dados:', error);
        }
    }

    // Função para finalizar o pagamento
    const finalizarPagamento = () => {
        if (placa) {
            enviarParaHistorico(placa);
            enviarParaPlaca(placa);
            // mostrar um alerta de sucesso
            alert('Pagamento finalizado com sucesso!');
            // esperar 2 segundos e redirecionar para a página inicial

            navigate('/ConsultarPlaca'); // Navega de volta para a página inicial


        } else {
            console.error('Placa não informada');
        }
    };

    // Extrai a placa do estado passado via useLocation
    const placa = location.state?.placa;

    useEffect(() => {
        // Busca o registro correspondente à placa em bdData
        const registroEncontrado = bdData.find(item => item.placa === placa);
        setRegistro(registroEncontrado);

        // Calcula a duração em minutos, se a entrada for válida
        if (registroEncontrado && registroEncontrado.dataEntrada) {
            const dataEntrada = new Date(registroEncontrado.dataEntrada);
            const agora = new Date();
            const diffEmMinutos = Math.round((agora - dataEntrada) / (1000 * 60)); // Calcula a diferença em minutos
            setDuracaoMinutos(diffEmMinutos);

            // Calcula o valor total com base na duração em minutos
            const custoPorMinuto = 0.10; // 10 centavos por minuto
            const total = diffEmMinutos * custoPorMinuto;
            setValorTotal(total.toFixed(2)); // Arredonda para 2 casas decimais
        }
    }, [placa]);

    // Função para formatar a data de entrada, se disponível
    const formatarData = (dataStr) => {
        if (!dataStr) return 'Não disponível';
        const data = new Date(dataStr);
        return data.toLocaleString();
    };

    return (
        <div className="items-center text-white w-full h-screen space-y-8">
            <div className="h-20 bg-indigo-700 w-screen"></div>
            <div className="space-y-28 px-32">
                <div>
                    <h1 className="text-4xl text-center py-4 font-bold">Pagamento</h1>
                    <h1 className="text-4xl text-center font-bold">{placa ? `Placa: ${placa}` : 'Placa não informada'}</h1>
                </div>

                <div className="flex flex-col px-20">
                    <p className="text-2xl pb-4 w-full font-bold">Resumo</p>
                    <div className="font-bold flex border border-white rounded-2xl justify-between px-8 text-2xl">
                        <div className="flex flex-col justify-center items-center p-4 space-y-4">
                            <p>Entrada</p>
                            <p>{registro ? formatarData(registro.dataEntrada) : 'Não disponível'}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4 space-y-4">
                            <p>Saída</p>
                            <p>{registro ? 'Não disponível' : 'Não disponível'}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4 space-y-4">
                            <p>Duração</p>
                            <p>{duracaoMinutos} minutos</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-4 space-y-4">
                            <p>Valor Total</p>
                            <p>{registro ? `R$ ${valorTotal}` : 'Não disponível'}</p>
                        </div>
                    </div>
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
                    <p className="text-2xl font-bold">Total: {registro ? `R$ ${valorTotal}` : 'Não disponível'}</p>
                </div>
                <div>
                    <button onClick={finalizarPagamento} className="bg-azulroxado h-10 w-44 rounded-full">Finalizar</button>
                </div>
            </div>
        </div>
    );
}

export default Pagamento;

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Importe faCar aqui
import historico from '../historico.json';
import { useUser } from '../UserContext';
import { Link } from 'react-router-dom';

const Historico = () => {
  const { setUser, user } = useUser();
  const [data, setData] = useState([]);

  useEffect(() => {
    const updatedData = historico.map(entry => ({
      ...entry,
      valorTotal: calculateTariff(entry.dataEntrada, entry.dataSaida).toFixed(2)
    }));
    setData(updatedData);
  }, []);

  const calculateTariff = (dataEntrada, dataSaida) => {
    const entrada = new Date(dataEntrada);
    const saida = dataSaida ? new Date(dataSaida) : new Date();

    const diffMillis = Math.abs(saida.getTime() - entrada.getTime()); // Usando Math.abs para garantir valor positivo
    const diffMinutes = diffMillis / (1000 * 60); // Diferença de tempo em minutos

    // Cálculo do valor total
    const incremento = 0.10; // 10 centavos
    const intervalo = 60; // 60 segundos

    // Número de incrementos baseado no tempo decorrido
    const incrementos = Math.ceil(diffMinutes / (intervalo / 60));

    // Valor total
    const valorTotal = incrementos * incremento;

    return valorTotal;
  };

  return (
    <div>
      <header className="bg-gray-800 text-white text-center py-4 items-center flex justify-between flex-row-reverse px-8">
        <div className="flex items-center w-1/3 justify-end space-x-8">
        <Link to="/" className="text-gray-300 hover:text-white ml-4">
            <FontAwesomeIcon icon={faCar} />
            <span className="ml-2">Home</span>
          </Link>
          <button onClick={() => setUser(null)} className="text-gray-300 hover:text-white mr-4">

            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="ml-2">Logout</span>
          </button>
        </div>
        <div className="flex-grow w-1/3">
          <h1 className="text-2xl font-bold">Histórico do Estacionamento</h1>
        </div>
        <div className="flex items-center w-1/3">
          <img src={user?.photo} alt="User" className="rounded-full h-10 w-10 ml-4" />
        </div>
      </header>
      <div className="container mx-auto px-4 sm:px-8 py-8">
        <h1 className="text-2xl font-semibold leading-tight text-white mb-4">Histórico de Estacionamento</h1>
        <div className="overflow-x-auto">
          <div className="min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Placa
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Data de Entrada
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Data de Saída
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Valor Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((entry) => (
                  <tr key={entry.id}>
                    <td className="px-5 py-5 border-b border-gray-700 bg-gray-900 text-sm">
                      <p className="text-gray-300 whitespace-no-wrap">{entry.id}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-700 bg-gray-900 text-sm">
                      <p className="text-gray-300 whitespace-no-wrap">{entry.placa}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-700 bg-gray-900 text-sm">
                      <p className="text-gray-300 whitespace-no-wrap">{new Date(entry.dataEntrada).toLocaleString()}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-700 bg-gray-900 text-sm">
                      <p className="text-gray-300 whitespace-no-wrap">{entry.dataSaida ? new Date(entry.dataSaida).toLocaleString() : 'N/A'}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-700 bg-gray-900 text-sm">
                      <p className="text-gray-300 whitespace-no-wrap">R${entry.valorTotal || '0.00'}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historico;

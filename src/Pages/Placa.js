import React from "react";
import { useNavigate } from "react-router-dom";

function ConsultarPlaca() {
  const navigate = useNavigate();

  const handlePesquisar = () => {
    // Simulação dos dados do estacionamento baseados na placa consultada
    const dadosEstacionamento = {
      placa: "ABCD123",
      dataEntrada: "2024-06-22T17:45:00",
      dataSaida: "2024-06-22T19:30:00",
      // Outros dados relevantes
    };

    navigate("/Pagamento", { state: { dadosEstacionamento } });
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center px-4">
      <div className="flex flex-col justify-center items-center bg-gray-800 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 py-12 rounded-xl space-y-8 shadow-br shadow-2xl shadow-indigo-900 px-4">
        <p className="text-white text-xl md:text-2xl lg:text-3xl mb-4 font-bold">DIGITE SUA PLACA</p>
        <div className="w-full px-10">
          <div className="w-full bg-white relative space-y-3 rounded-lg">
            <div className="bg-blue-800 w-full flex justify-between items-center p-2 rounded-t-lg px-4">
              <div></div>
              <h1 className="font-bold text-white text-xl ml-6">BRASIL</h1>
              {/* Adicione a imagem da bandeira do Brasil aqui, se necessário */}
            </div>
            <div className="flex justify-center items-center pb-8 pt-4">
              <input type="text" placeholder='ABCD0E00' className="text-center uppercase text-4xl focus:outline-none w-full focus:border-transparent font-bold" minLength='6' maxLength='7'></input>
            </div>
            <h1 className="font-bold absolute text-xl left-2 bottom-2">BR</h1>
          </div>
        </div>
        <button className="font-bold text-lg border-2 border-indigo-700 bg-indigo-700 text-white h-12 md:h-16 w-full md:w-64 lg:w-72 rounded-full hover:text-indigo-700 hover:bg-transparent transition-all duration-300 ease-in-out" onClick={handlePesquisar}>Pesquisar</button>
      </div>
    </div>
  );
}

export default ConsultarPlaca;

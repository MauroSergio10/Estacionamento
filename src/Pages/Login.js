import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Login() {
    return (
        <div className="flex justify-center items-center text-white w-full h-screen py-32">
            <div className="bg-indigo-700 h-full flex justify-center items-center flex-col px-16 w-1/5 space-y-4 rounded-l-xl">
                <h1 className="w-full text-4xl font-bold ">Bem-Vindo de volta!</h1>
                <h1 className="w-full text-xl">Acesse sua conta agora mesmo.</h1>
                <button className="border-2 rounded-full px-16 py-3 font-bold">Entrar</button>
                <a className="w-full">Esqueceu sua senha?</a>
            </div>
            <div className="flex flex-col h-full bg-gray-800 w-1/3 px-20 rounded-r-xl justify-center items-center space-y-4">
                <h1 className="text-4xl font-bold">Criar sua conta</h1>
                <p className="text-gray-500">Preencha seus dados</p>
                <form className="flex flex-col w-full space-y-3 justify-center items-center">
                    <div className="relative w-full flex justify-center items-center">
                        <FontAwesomeIcon icon={faUser} className="absolute left-2" />
                        <input className="border rounded-md bg-transparent w-full px-4 py-2 font-bold pl-8" type="text" placeholder="Nome" />
                    </div>
                    <div className="relative w-full flex justify-center items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="absolute left-2" />
                        <input className="border rounded-md bg-transparent w-full px-4 py-2 font-bold pl-8" type="email" placeholder="Email" />
                    </div>
                    <div className="relative w-full flex justify-center items-center">
                        <FontAwesomeIcon icon={faLock} className="absolute left-2" />
                        <input className="border rounded-md bg-transparent w-full px-4 py-2 font-bold pl-8" type="password" placeholder="Senha" />
                    </div>
                    <button className="bg-indigo-700 rounded-full px-16 py-3 font-bold">Cadastrar</button>
                </form>
            </div>

        </div>
    );
}

export default Login;
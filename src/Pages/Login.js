import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [div, setDiv] = useState('Login');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="flex justify-center items-center text-white w-full h-screen py-32">
            <div className="bg-indigo-700 h-full flex justify-center items-center flex-col px-16 w-1/5 space-y-4 rounded-l-xl">
                <h1 className="w-full text-4xl font-bold ">Bem-Vindo de volta!</h1>
                <h1 className="w-full text-xl text-gray-300">Acesse sua conta agora mesmo.</h1>
                <button className="border-2 rounded-full px-16 py-3 font-bold hover:bg-indigo-800 hover:border-indigo-800 transition-all duration-300 ease-in-out"
                    onClick={
                        () => {
                            div === 'Login' ? setDiv('Cadastro') : setDiv('Login');
                        }
                    }
                >
                    {div === 'Login' ? 'Criar conta' : 'Já tenho conta'}
                </button>

                <a
                    onClick={() => setDiv('AlterarSenha')}
                    className="w-full cursor-pointer underline ">Esqueceu sua senha?</a>
            </div>
            <div className=" h-full bg-gray-800 w-1/3 px-20 rounded-r-xl justify-center items-center space-y-4">
                <div className={`w-full flex flex-col space-y-4 justify-center items-center transition-all duration-1000 ease-in-out overflow-hidden transition-opacity  ${div === 'Cadastro' ? 'h-full opacity-100' : 'h-0 opacity-0'}`}>
                    <h1 className="text-4xl font-bold">Criar sua conta</h1>
                    <p className="text-gray-500">Preencha seus dados</p>
                    <form className="flex flex-col w-full space-y-3 justify-center items-center">
                        <div className="relative w-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faUser} className="absolute  left-4" />
                            <input className="focus:outline-none focus:border-indigo-700 border rounded-md bg-transparent w-full px-4 py-2 font-bold pl-10" type="text" placeholder="Nome" />
                        </div>
                        <div className="relative w-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="absolute  left-4" />
                            <input className="focus:outline-none focus:border-indigo-700 border rounded-md bg-transparent w-full py-2 font-bold pl-10" type="email" placeholder="Email" />
                        </div>
                        <div className="relative w-full flex justify-center items-center ">
                            <FontAwesomeIcon icon={faLock} className="absolute left-4" />
                            <input className="focus:outline-none focus:border-indigo-700 border rounded-md bg-transparent w-full px-4 py-2 font-bold pl-10" type={showPassword ? "text" : "password"} placeholder="Senha" />
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} className="absolute right-4 cursor-pointer" />
                        </div>
                        <button className="bg-indigo-700 rounded-full px-16 py-3 font-bold text-lg border-2 border-indigo-700 hover:text-indigo-700 hover:bg-transparent transition-all duration-300 ease-in-out
                    ">Cadastrar</button>
                    </form>
                </div>
                <div className={`w-full flex flex-col space-y-4 justify-center items-center transition-all duration-1000 ease-in-out overflow-hidden transition-opacity  ${div === 'Login' ? 'h-full opacity-100' : 'h-0 opacity-0'} `}>
                    <h1 className="text-4xl font-bold">Login</h1>
                    <p className="text-gray-500">Preencha seus dados</p>
                    <form className="flex flex-col w-full space-y-3 justify-center items-center">
                        <div className="relative w-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="absolute  left-4" />
                            <input className="focus:outline-none focus:border-indigo-700 border rounded-md bg-transparent w-full py-2 font-bold pl-10" type="email" placeholder="Email" />
                        </div>
                        <div className="relative w-full flex justify-center items-center ">
                            <FontAwesomeIcon icon={faLock} className="absolute left-4" />
                            <input className="focus:outline-none focus:border-indigo-700 border rounded-md bg-transparent w-full px-4 py-2 font-bold pl-10" type={showPassword ? "text" : "password"} placeholder="Senha" />
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} className="absolute right-4 cursor-pointer" />
                        </div>
                        <button
                            onClick={() => {
                                navigate('/home');
                            }}
                            className="bg-indigo-700 rounded-full px-16 py-3 font-bold text-lg border-2 border-indigo-700 hover:text-indigo-700 hover:bg-transparent transition-all duration-300 ease-in-out
                    ">Entrar</button>
                    </form>
                </div>
                <div className={`w-full h-full flex flex-col space-y-4 justify-center items-center transition-all duration-1000 ease-in-out overflow-hidden transition-opacity  ${div === 'AlterarSenha' ? 'h-full opacity-100' : 'h-0 opacity-0'} `}>
                    <h1 className="text-4xl font-bold">Alterar Senha</h1>
                    <p className="text-gray-500">Preencha seus dados</p>
                    <form className="flex flex-col w-full space-y-3 justify-center items-center">
                        <div className="relative w-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="absolute  left-4" />
                            <input className="focus:outline-none focus:border-indigo-700 border rounded-md bg-transparent w-full py-2 font-bold pl-10" type="email" placeholder="Email" />
                        </div>
                        <button className="bg-indigo-700 rounded-full px-16 py-3 font-bold text-lg border-2 border-indigo-700 hover:text-indigo-700 hover:bg-transparent transition-all duration-300 ease-in-out
                    ">Enviar</button>
                    </form>
                </div>
            </div>



        </div>
    );
}

export default Login;
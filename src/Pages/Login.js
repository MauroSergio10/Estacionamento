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
        <div className="flex flex-col md:flex-row justify-center items-center text-white w-full h-screen py-8 md:py-32 md:px-40 px-4">
            <div className="h-full rounded-t-xl bg-indigo-700 flex justify-center items-center flex-col px-8 py-2 md:py-0 md:px-16 w-full md:w-1/3 space-y-4 md:rounded-l-xl md:rounded-tr-none">
                <h1 className="w-full text-3xl md:text-4xl font-bold text-center md:text-left">Bem-Vindo de volta!</h1>
                <h1 className="w-full text-lg md:text-xl text-gray-300 text-center md:text-left">Acesse sua conta agora mesmo.</h1>
                <button className="border-2 rounded-full px-8 py-2 md:px-16 md:py-3 font-bold hover:bg-indigo-800 hover:border-indigo-800 transition-all duration-300 ease-in-out"
                    onClick={() => { div === 'Login' ? setDiv('Cadastro') : setDiv('Login'); }}>
                    {div === 'Login' ? 'Criar conta' : 'Já tenho conta'}
                </button>
                <a onClick={() => setDiv('AlterarSenha')} className="w-full cursor-pointer underline text-center md:text-left">Esqueceu sua senha?</a>
            </div>
            <div className="bg-gray-800 w-full md:w-1/2 h-full px-8 py-2 md:px-20 md:py-0 flex justify-center items-center flex-col space-y-4 rounded-b-xl md:rounded-r-xl md:rounded-b-none">
                <div className={`w-full flex flex-col space-y-4 justify-center items-center transition-all duration-1000 ease-in-out overflow-hidden transition-opacity ${div === 'Cadastro' ? 'h-full opacity-100' : 'h-0 opacity-0'}`}>
                    <h1 className="text-3xl md:text-4xl font-bold">Criar sua conta</h1>
                    <p className="text-gray-500">Preencha seus dados</p>
                    <form className="flex flex-col w-full space-y-3 justify-center items-center">
                        <div className="relative w-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faUser} className="absolute left-4" />
                            <input className="focus:outline-none focus:border-indigo-700 border rounded-md bg-transparent w-full px-4 py-2 font-bold pl-10" type="text" placeholder="Nome" />
                        </div>
                        <div className="relative w-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="absolute left-4" />
                            <input className="focus:outline-none focus:border-indigo-700 border rounded-md bg-transparent w-full py-2 font-bold pl-10" type="email" placeholder="Email" />
                        </div>
                        <div className="relative w-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faLock} className="absolute left-4" />
                            <input className="focus:outline-none focus:border-indigo-700 border rounded-md bg-transparent w-full px-4 py-2 font-bold pl-10" type={showPassword ? "text" : "password"} placeholder="Senha" />
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} className="absolute right-4 cursor-pointer" />
                        </div>
                        <button className="bg-indigo-700 rounded-full px-8 py-2 md:px-16 md:py-3 font-bold text-lg border-2 border-indigo-700 hover:text-indigo-700 hover:bg-transparent transition-all duration-300 ease-in-out">Cadastrar</button>
                    </form>
                </div>
                <div className={`w-full flex flex-col space-y-4 justify-center items-center transition-all duration-1000 ease-in-out overflow-hidden transition-opacity ${div === 'Login' ? 'h-full opacity-100' : 'h-0 opacity-0'}`}>
                    <h1 className="text-3xl md:text-4xl font-bold">Login</h1>
                    <p className="text-gray-500">Preencha seus dados</p>
                    <form className="flex flex-col w-full space-y-3 justify-center items-center">
                        <div className="relative w-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="absolute left-4" />
                            <input className="focus:outline-none focus:border-indigo-700 border rounded-md bg-transparent w-full py-2 font-bold pl-10" type="email" placeholder="Email" />
                        </div>
                        <div className="relative w-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faLock} className="absolute left-4" />
                            <input className="focus:outline-none focus:border-indigo-700 border rounded-md bg-transparent w-full px-4 py-2 font-bold pl-10" type={showPassword ? "text" : "password"} placeholder="Senha" />
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} className="absolute right-4 cursor-pointer" />
                        </div>
                        <button onClick={() => navigate('/home')} className="bg-indigo-700 rounded-full px-8 py-2 md:px-16 md:py-3 font-bold text-lg border-2 border-indigo-700 hover:text-indigo-700 hover:bg-transparent transition-all duration-300 ease-in-out">Entrar</button>
                    </form>
                </div>
                <div className={`w-full flex flex-col space-y-4 justify-center items-center transition-all duration-1000 ease-in-out overflow-hidden transition-opacity ${div === 'AlterarSenha' ? 'h-full opacity-100' : 'h-0 opacity-0'}`}>
                    <h1 className="text-3xl md:text-4xl font-bold">Alterar Senha</h1>
                    <p className="text-gray-500">Preencha seus dados</p>
                    <form className="flex flex-col w-full space-y-3 justify-center items-center">
                        <div className="relative w-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="absolute left-4" />
                            <input className="focus:outline-none focus:border-indigo-700 border rounded-md bg-transparent w-full py-2 font-bold pl-10" type="email" placeholder="Email" />
                        </div>
                        <button className="bg-indigo-700 rounded-full px-8 py-2 md:px-16 md:py-3 font-bold text-lg border-2 border-indigo-700 hover:text-indigo-700 hover:bg-transparent transition-all duration-300 ease-in-out">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { auth, storage } from '../ConfigFirebase'; // Ajuste de acordo com sua configuração
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useUser } from '../UserContext';
import google from "../Assets/LoginGoogle.png"

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [div, setDiv] = useState('Login');
    const navigate = useNavigate();
    const { setUser } = useUser();


    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const { displayName, email, photoURL } = result.user;
            setUser({ name: displayName, email, photo: photoURL });
            console.log(result.user);
        } catch (error) {
            console.error(error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    // Chame loadRemoteImage() dentro do useEffect ou em algum ponto onde você deseja carregar a imagem

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center text-white w-full h-screen py-8 lg:py-32 lg:px-40 px-4">
            <div className="h-full rounded-t-xl bg-indigo-700 flex justify-center items-center flex-col px-8 py-2 lg:py-0 lg:px-16 w-full lg:w-1/3 space-y-4 lg:rounded-l-xl lg:rounded-tr-none">
                <h1 className="w-full text-3xl lg:text-4xl font-bold text-center lg:text-left">Bem-Vindo de volta!</h1>
                <h1 className="w-full text-lg lg:text-xl text-gray-300 text-center lg:text-left">Acesse sua conta agora mesmo.</h1>
                <button className="border-2 rounded-full px-8 py-2 lg:px-16 lg:py-3 font-bold hover:bg-indigo-800 hover:border-indigo-800 transition-all duration-300 ease-in-out"
                    onClick={() => { div === 'Login' ? setDiv('Cadastro') : setDiv('Login'); }}>
                    {div === 'Login' ? 'Criar conta' : 'Já tenho conta'}
                </button>
                <button onClick={() => setDiv('AlterarSenha')} className="w-full cursor-pointer underline text-center lg:text-left">Esqueceu sua senha?</button>
            </div>
            <div className="bg-gray-800 w-full lg:w-1/2 h-full px-8 py-2 lg:px-20 lg:py-0 flex justify-center items-center flex-col space-y-4 rounded-b-xl lg:rounded-r-xl lg:rounded-b-none shadow-2xl shadow-indigo-700">
                <div className={`w-full flex flex-col space-y-4 justify-center items-center transition-all duration-1000 ease-in-out overflow-hidden transition-opacity ${div === 'Cadastro' ? 'h-full opacity-100' : 'h-0 opacity-0'}`}>
                    <h1 className="text-3xl lg:text-4xl font-bold">Criar sua conta</h1>
                    <p className="text-gray-500">Preencha seus dados</p>
                    <div className="flex flex-col w-full space-y-3 justify-center items-center">
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
                        <button className="bg-indigo-700 rounded-full px-8 py-2 lg:px-16 lg:py-3 font-bold text-lg border-2 border-indigo-700 hover:text-indigo-700 hover:bg-transparent transition-all duration-300 ease-in-out">Cadastrar</button>
                    </div>
                </div>
                <div className={`w-full flex flex-col space-y-4 justify-center items-center transition-all duration-1000 ease-in-out overflow-hidden transition-opacity ${div === 'Login' ? 'h-full opacity-100' : 'h-0 opacity-0'}`}>
                    <h1 className="text-3xl lg:text-4xl font-bold">Login</h1>
                    <p className="text-gray-500">Preencha seus dados</p>
                    <div className="flex flex-col w-full space-y-3 justify-center items-center">
                        <div className="relative w-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="absolute left-4" />
                            <input className="focus:outline-none focus:border-indigo-700 border rounded-md bg-transparent w-full py-2 font-bold pl-10" type="email" placeholder="Email" />
                        </div>
                        <div className="relative w-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faLock} className="absolute left-4" />
                            <input className="focus:outline-none focus:border-indigo-700 border rounded-md bg-transparent w-full px-4 py-2 font-bold pl-10" type={showPassword ? "text" : "password"} placeholder="Senha" />
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} className="absolute right-4 cursor-pointer" />
                        </div>
                        <button className="bg-indigo-700 rounded-full px-8 py-2 lg:px-16 lg:py-3 font-bold text-lg border-2 border-indigo-700 hover:text-indigo-700 hover:bg-transparent transition-all duration-300 ease-in-out">Entrar</button>
                        {/* Aqui é onde você deseja exibir a imagem */}
                        <button onClick={loginWithGoogle} className="flex justify-between items-center rounded-full shadow-xl border-2 border-white bg-white px-8 py-2 w-1/2 hover:bg-gray-200">
                        <img src={google} alt="Imagem do Google?" className="w-8 h-8"/>
                        <h1 className="text-black font-bold ">Login Google</h1>
                        <h1></h1>
                        </button>
                    </div>
                </div>
                <div className={`w-full flex flex-col space-y-4 justify-center items-center transition-all duration-1000 ease-in-out overflow-hidden transition-opacity ${div === 'AlterarSenha' ? 'h-full opacity-100' : 'h-0 opacity-0'}`}>
                    <h1 className="text-3xl lg:text-4xl font-bold">Alterar Senha</h1>
                    <p className="text-gray-500">Preencha seus dados</p>
                    <div className="flex flex-col w-full space-y-3 justify-center items-center">
                        <div className="relative w-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="absolute left-4" />
                            <input className="focus:outline-none focus:border-indigo-700 border rounded-md bg-transparent w-full py-2 font-bold pl-10" type="email" placeholder="Email" />
                        </div>
                        <button className="bg-indigo-700 rounded-full px-8 py-2 lg:px-16 lg:py-3 font-bold text-lg border-2 border-indigo-700 hover:text-indigo-700 hover:bg-transparent transition-all duration-300 ease-in-out">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

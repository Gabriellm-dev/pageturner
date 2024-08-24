import { useState } from 'react';
import './Login.css';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';

import video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/logo.png';

import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosLogIn } from 'react-icons/io';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                navigate('/dashboard');
            } else {
                setErrorMessage('Credenciais inválidas');
            }
        } catch (error) {
            setErrorMessage('Erro na requisição');
            console.error('Erro na requisição:', error);
        }
    };

    return (
        <div className='loginPage flex'>
            <div className='container flex'>
                <div className='videoDiv'>
                    <video src={video} autoPlay muted loop></video>
                    
                    <div className='textDiv'>
                        <h2 className='title'>Gerencie sua coleção de livros extraordinários</h2>
                        <p>PageTurners: O lugar onde seus livros são valorizados!</p>
                    </div>
                    
                    <div className="footerDiv flex">
                        <span className="text">Não tem uma conta?</span>
                        <Link to={'/register'}>
                            <button className='btn'>Cadastre-se!</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Bem vindo de Volta!</h3>
                    </div>

                    <form onSubmit={handleLogin} className='form grid'>
                        {errorMessage && <span className='showMessage'>{errorMessage}</span>}

                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <FaUserShield className='icon'/>
                                <input
                                    type="text"
                                    placeholder='Enter Email'
                                    id='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon' />
                                <input
                                    type="password"
                                    placeholder='Enter Password'
                                    id='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button type='submit' className='btn flex'>
                            <span>Login</span>
                            <IoIosLogIn className='icon' />
                        </button>

                        <span className='forgotPassword'>
                            Esqueceu sua senha? <a href="">Clique Aqui!</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

import { useState } from 'react';
import './Register.css';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';

import video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/logo.png';

import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosLogIn } from 'react-icons/io';
import { MdEmail } from "react-icons/md";
import { MdFingerprint } from "react-icons/md";

const Register = () => {
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const userData = {
            cpf,
            email,
            name,
            password,
        };

        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                console.log('Usuário registrado com sucesso');
                navigate('/');
            } else {
                console.error('Erro ao registrar usuário:', response.statusText);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };

    return (
        <div className='registerPage flex'>
            <div className='container flex'>
                <div className='videoDiv'>
                    <video src={video} autoPlay muted loop></video>
                    
                    <div className='textDiv'>
                        <h2 className='title'>Cadastre-se e comece a gerenciar sua coleção de livros extraordinários</h2>
                        <p>PageTurners: Valorize seus livros com a gente!</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Já tem uma conta?</span>
                        <Link to={'/'}>
                            <button className='btn'>Faça o Login!</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Cadastre-se!</h3>
                    </div>

                    <form onSubmit={handleRegister} className='form grid'>
                        <div className="inputDiv">
                            <label htmlFor="cpf">CPF</label>
                            <div className="input flex">
                                <MdFingerprint className='icon'/>
                                <input
                                    type="text"
                                    placeholder='Enter CPF'
                                    id='cpf'
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <MdEmail className='icon'/>
                                <input
                                    type="email"
                                    placeholder='Enter Email'
                                    id='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="name">Username</label>
                            <div className="input flex">
                                <FaUserShield className='icon'/>
                                <input
                                    type="text"
                                    placeholder='Enter Username'
                                    id='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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
                            <span>Registro</span>
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

export default Register;

import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

import './signup.css';
import logo from '../../assets/logo.png';

function SignUp() {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { singUp, loadingAuth } = useContext(AuthContext);

	function handleSubmit(e) {
		e.preventDefault();

		if (nome !== '' && email !== '' && password !== '') {
			singUp(email, password, nome);
		}
	}

	return (
		<div className='container-center'>
			<div className='login'>
				<div className='login-area'>
					<img src={logo} alt='Sistema Logo' />
				</div>

				<form onSubmit={handleSubmit}>
					<h1>Crie sua conta</h1>

					<div className='input-field'>
						<input
							type='text'
							placeholder='Seu nome'
							value={nome}
							onChange={(e) => setNome(e.target.value)}
						/>
						<i className='uil uil-user'></i>
					</div>

					<div className='input-field'>
						<input
							type='text'
							placeholder='Seu E-mail'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<i className='uil uil-envelope'></i>
					</div>

					<div className='input-field'>
						<input
							type='password'
							placeholder='Sua senha'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<i className='uil uil-lock'></i>
					</div>
					<button type='submit'>
						{loadingAuth ? 'Carregando...' : 'Cadastrar'}
					</button>
				</form>

				<Link to='/'>Já tem uma conta? Entre</Link>
			</div>
		</div>
	);
}

export default SignUp;

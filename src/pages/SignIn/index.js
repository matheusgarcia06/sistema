import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

import './signin.css';
import logo from '../../assets/logo.png';

function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { signIn, loadingAuth } = useContext(AuthContext);

	function handleSubmit(e) {
		e.preventDefault();

		if (email !== '' && password !== '') {
			signIn(email, password);
		}
	}

	return (
		<div className='container-center'>
			<div className='login'>
				<div className='login-area'>
					<img src={logo} alt='Sistema Logo' />
				</div>

				<form onSubmit={handleSubmit}>
					<h1>Login</h1>
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
						{loadingAuth ? 'Carregando...' : 'Acessar'}
					</button>
				</form>

				<Link to='/register'>Criar uma conta</Link>
			</div>
		</div>
	);
}

export default SignIn;

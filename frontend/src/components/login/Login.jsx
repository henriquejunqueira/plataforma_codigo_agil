import './login.css';
import logo from '../../assets/logo-vermelha.png';

const Login = () => {
  return (
    <div className='box'>
      <div className='containerGeneral'>
        <h2 className='title'>Login</h2>
        <div className='form'>
          <div className='inputContainerEmail'>
            <input type='email' id='email' placeholder='Email' />
            <i className='bi bi-person'></i>
          </div>
          <div className='inputContainerPassword'>
            <input type='email' id='email' placeholder='Senha' />
            <i className='bi bi-eye-slash'></i>
          </div>
          <button className='btn btn-danger buttonEnter'>
            <i className='bi bi-door-open'></i>Entrar
          </button>
        </div>
        <div className='links'>
          <a href='#' className='link'>
            Recuperar conta
          </a>
          <a href='#' className='link'>
            Cadastrar
          </a>
        </div>
        <h5>Ou</h5>
        <div className='form'>
          <button className='btn btn-danger buttonGoogle'>
            <i className='bi bi-google'></i>Conta google
          </button>
        </div>
      </div>
      <div className='rightSection'>
        <img src={logo} className='logo' />
      </div>
    </div>
  );
};

export default Login;

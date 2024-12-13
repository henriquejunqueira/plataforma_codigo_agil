import './navbar.css';
import logo from '../../assets/logo-vermelha.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg menu'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img className='logo' src={logo} />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Página Inicial
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Cursos
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Validar Certificado
              </a>
            </li>
          </ul>
          <button className='btn btn-link buttonLogin'>Login</button>
          <button className='btn btn-danger buttonRegister'>Registrar</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

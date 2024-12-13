import './navCourse.css';

const NavCourse = () => {
  const lesson = '#01 - O que é HTML?';
  return (
    <nav className='navbar navbar-expand-lg menu'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <i className='bi bi-arrow-left-square'></i>
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
        <span>
          <h3>Curso de HTML:</h3>
          {lesson}
        </span>

        <div className='collapse navbar-collapse' id='navbarText'>
          <span className='navbar-nav me-auto mb-2 mb-lg-0'></span>
          <span className='perfil'>
            <i className='bi bi-person-circle'></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavCourse;

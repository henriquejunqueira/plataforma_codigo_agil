import Navbar from '../navbar/navbar';
import './details.css';
import html from '../../assets/html.png';
import qrCode from '../../assets/qrcode-instagram.png';

const Details = () => {
  //   const video = 'https://www.youtube.com/watch?v=hHM-hr9q4mo';
  return (
    <>
      <Navbar />
      <div className='container box'>
        <div className='row'>
          <div className='col-md-12'>
            <h3>Curso de HTML</h3>
            <p>
              Curso de HTML do inicante ao profissional. Esse curso é focado nos
              princiais conceitos de Frontend. Vamos trabalhar com a construção
              de diversas áginas utilizando HTML e CSS.
            </p>
            <h4>48 aulas</h4>

            <h3>Conteúdo do curso</h3>

            <h4 className='moduleOpen'>
              <i className='bi bi-caret-down'></i> Fundamento do HTML
            </h4>
            <p className='lesson'>
              <i className='bi bi-play-circle'></i> O que é HTML?
            </p>
            <p className='lesson'>
              <i className='bi bi-play-circle'></i> O que é HTML?
            </p>
            <h4 className='moduleClosed'>
              <i className='bi bi-caret-down'></i> Fundamento do HTML
            </h4>
            <h4 className='moduleClosed'>
              <i className='bi bi-caret-down'></i> Fundamento do HTML
            </h4>
            <h4 className='moduleClosed'>
              <i className='bi bi-caret-down'></i> Fundamento do HTML
            </h4>
          </div>
        </div>

        <div className='row rightSection'>
          <div className='col-md-12'>
            {/* <video controls className='playerVideo'>
              <source src={video} type='video/mp4' />
              Seu navegador não suporta a reprodução de vídeo.
            </video> */}
            <img className='playerVideo' src={html} alt='' />
            <button className='btn btn-danger buttonComecarVideo'>
              Começar curso
            </button>
            <img className='qrCode' src={qrCode} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

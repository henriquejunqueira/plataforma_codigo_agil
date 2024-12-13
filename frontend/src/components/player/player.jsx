import NavCourse from '../navCourse/navCourse';
import './player.css';

import html from '../../assets/html.png';
// import { useState } from 'react';

const Player = () => {
  //   const [active, setActive] = useState(true);
  return (
    <>
      <NavCourse />
      <div className='container box'>
        <div className='row'>
          <div className='col-md-12 marking'>
            <h3>
              <i className='bi bi-book'></i> Conteúdo do curso
            </h3>
          </div>
          <div className='moduleOpen'>
            <i className='bi bi-1-circle-fill number'></i>
            <p>Fundamentos do HTML</p>
            <i className='bi bi-caret-down arrowDown'></i>
          </div>
          <div className='lesson lessonActive'>
            <i className='bi bi-play-circle'></i>
            <p>O que é HTML?</p>
          </div>
          <div className='lesson'>
            <i className='bi bi-play-circle play'></i>
            <p>O que é HTML?</p>
          </div>
          <div className='moduleClose'>
            <i className='bi bi-2-circle-fill number'></i>
            <p>Fundamentos do HTML</p>
            <i className='bi bi-caret-right arrowRight'></i>
          </div>
          <div className='moduleClose'>
            <i className='bi bi-3-circle-fill number'></i>
            <p>Fundamentos do HTML</p>
            <i className='bi bi-caret-right arrowRight'></i>
          </div>
          <div className='moduleClose'>
            <i className='bi bi-4-circle-fill number'></i>
            <p>Fundamentos do HTML</p>
            <i className='bi bi-caret-right arrowRight'></i>
          </div>
          <div className='moduleClose'>
            <i className='bi bi-5-circle-fill number'></i>
            <p>Fundamentos do HTML</p>
            <i className='bi bi-caret-right arrowRight'></i>
          </div>
          <div className='moduleClose'>
            <i className='bi bi-6-circle-fill number'></i>
            <p>Fundamentos do HTML</p>
            <i className='bi bi-caret-right arrowRight'></i>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            {/* <video controls className='playerVideo'>
              <source src={video} type='video/mp4' />
              Seu navegador não suporta a reprodução de vídeo.
            </video> */}
            <img className='playerVideo' src={html} alt='' />
            <div className='menuOptions'>
              <ul className='nav nav-underline'>
                <li className='nav-item'>
                  <a className='nav-link' aria-current='page' href='#'>
                    Visão geral
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' href='#'>
                    Comentários
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Observações
                  </a>
                </li>
              </ul>
              <hr />
            </div>

            <div className='containerComment'>
              <i className='bi bi-person-circle'></i>
              <div className='cardComment'>
                <div className='rating'>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star-fill'></i>
                </div>
                <p>
                  Iniciei o curso agora e já estou adorando! Didática e
                  conteúdos muito bons.
                </p>
              </div>
            </div>

            <div className='containerComment'>
              <i className='bi bi-person-circle'></i>
              <div className='cardComment'>
                <div className='rating'>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star-fill'></i>
                  <i className='bi bi-star-fill'></i>
                </div>
                <p>
                  Iniciei o curso agora e já estou adorando! Didática e
                  conteúdos muito bons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;

import Navbar from '../navbar/navbar';
import './home.css';
import imgHtml from '../../assets/html.png';
import imgCss from '../../assets/css.png';
import imgJs from '../../assets/js.png';
import imgNode from '../../assets/node.png';
import imgReact from '../../assets/react.png';
import imgJava from '../../assets/java.png';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            <h2>Nossos Cursos</h2>
          </div>
          <div className='col-md-1'></div>
        </div>

        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            <div className='containerCard'>
              <div className='card'>
                <img src={imgHtml} className='imgCard' />
                <h4>Curso de HTML 5</h4>
              </div>
              <div className='card'>
                <img src={imgCss} className='imgCard' />
                <h4>Curso de CSS 3</h4>
              </div>
              <div className='card'>
                <img src={imgJs} className='imgCard' />
                <h4>Curso de JavaScript</h4>
              </div>
            </div>
          </div>

          <div className='col-md-1'></div>
        </div>

        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            <div className='containerCard'>
              <div className='card'>
                <img src={imgNode} className='imgCard' />
                <h4>Curso de Node</h4>
              </div>
              <div className='card'>
                <img src={imgReact} className='imgCard' />
                <h4>Curso de React</h4>
              </div>
              <div className='card'>
                <img src={imgJava} className='imgCard' />
                <h4>Curso de Java Spring</h4>
              </div>
            </div>
          </div>

          <div className='col-md-1'></div>
        </div>
      </div>
    </>
  );
};

export default Home;

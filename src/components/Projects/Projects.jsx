import './Projects.css';

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";

import Slider from './Slider';

function Projects() {
  return (
    <>
      <section className="projects section" id='projects'>
        <h2 className="section__title">Projetos</h2>
        <span className='section__subtitle'>Alguns projetos realizados, para conferir outros: <a href="https://github.com/hugocicillini" target='_blank'>GitHub</a></span>
      </section>
      <Slider />
    </>
  );
}

export default Projects;

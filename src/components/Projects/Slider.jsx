import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Data from './Data';
import SliderImage from './SliderImage';

const Slider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{ clickable: true }}
      breakpoints={{
        350: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        950: { slidesPerView: 3 },
      }}
      modules={[Pagination]}
    >
      {Data.map((project, index) => (
        <SwiperSlide key={index} className='projects__card'>
          <SliderImage project={project} />

          <div className='projects__info'>
            <div className="projects__info-name">{project.name}</div>

            <div className="projects__info-subtitle">Técnologias Utilizadas:</div>

            <div className="projects__info-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </div>

            <a href={project.link} className='button' target='_blank'>Ver Projeto</a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider

import React from 'react';
import Data from './Data';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Projects.css';
import { Pagination } from 'swiper/modules';

function Projects() {
    return (
        <>
            <section className="projects section" id='projects'>
                <h2 className="section__title">Projetos</h2>

                <span className='section__subtitle'>Alguns projetos realizados, para conferir outros: <a href="https://github.com/hugocicillini" target='_blank'>GitHub</a></span>
            </section>

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
                className="swiper"
            >
                {Data.map((project, index) => (
                    <SwiperSlide key={index} className='projects__card'>
                        <img src={project.image} alt="projects" />

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
        </>
    );
}

export default Projects;

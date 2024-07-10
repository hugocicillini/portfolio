import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SliderImage = ({ project }) => {
  return (
    <Swiper pagination={{ clickable: true }} autoplay={{ delay: 2500 }} modules={[Autoplay, Pagination]} >
      {project.image.map((image, imageIndex) => (
        <SwiperSlide key={imageIndex}>
          <Zoom>
            <img src={image} alt={project.name} className='swiper-slide' />
          </Zoom>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SliderImage
//carousel 
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import './Slider.css';

function Slider(){
    const images = [
        { image: require("../images/aboutImg.jpg") },
        { image: require("../images/2.jpg") },
        { image: require("../images/3.jpg") }
      ];
    return(
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
            <div>
            <img className='swiperImg' src={images[0].image} alt="Boy laughing"></img>
           
                <p className='swiperSlideText'>Some text</p>
                      
            </div>
            
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>)
}

export default Slider;
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import styles from './Slider.module.scss'

// Import Swiper styles
import 'swiper/css';
import {Navigation, Pagination} from "swiper/modules";
import {sliderConstant} from "../../libs/constants/slider.constant";
import {SlideElement} from "./slide-element/SlideElement";

export const Slider = () => {
    return (
        <Swiper
            className={styles.sliderStyle}
            spaceBetween={32}
            slidesPerView={2}
            pagination={{
                type: "bullets",
                clickable: true,
                bulletClass: styles.bullet,
                bulletActiveClass: styles.active
                // clickableClass: styles.contr
            }}
            // navigation={{
            //     nextEl: `#${idOne}`,
            //     prevEl: `#${idTwo}`,
            // }}
            navigation
            loop={true}
            modules={[Navigation, Pagination]}
            wrapperClass={styles.wrap}
        >
            {sliderConstant.map((item, index) => {
                return (<SwiperSlide className={styles.el}>
                    <SlideElement {...item} key={index}/>
                </SwiperSlide>)
            })}
        </Swiper>
    );
};
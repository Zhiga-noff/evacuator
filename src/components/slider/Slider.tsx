// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import styles from './Slider.module.scss'

// Import Swiper styles
import 'swiper/css';
import {Navigation, Pagination} from "swiper/modules";
import {sliderConstant} from "../../libs/constants/slider.constant";
import {SlideElement} from "./slide-element/SlideElement";
import {ButtonSlider} from "./button-slider/ButtonSlider";
import clsx from "clsx";

export const Slider = () => {

    const idOne = 'id-next-button';
    const idTwo = 'id-prev-button';

    return (
        <div className={styles.gapEl}>
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
                navigation={{
                    nextEl: `#${idOne}`,
                    prevEl: `#${idTwo}`,
                }}
                loop={true}
                modules={[Navigation, Pagination]}
                wrapperClass={styles.wrap}
            >
                {sliderConstant.map((item, index) => {
                    return (<SwiperSlide className={styles.el}>
                        <SlideElement {...item} key={index}/>
                    </SwiperSlide>)
                })}


            </Swiper> <ButtonSlider type={'next'} id={idOne} className={clsx(styles.btn, styles.next)}/>
            <ButtonSlider type={"prev"} id={idTwo} className={clsx(styles.btn, styles.prev)}/>
        </div>

    );
};
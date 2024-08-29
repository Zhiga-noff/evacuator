import React from 'react';
import {Banner} from '../../components/banner/Banner';
import styles from './MainPage.module.scss';
import {CardEvacuatorCar} from '../../components/card-evacuator-car/CardEvacuatorCar';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

import iconEva from 'assets/img/banner/banner-icon-yellow.png';
import image1 from 'assets/img/main-pg/how-call-evacuator.png';

export const MainPage = () => {
    return (
        <main className={styles.main}>
            <Banner
                text={'Телефоны для вызова эвакуатора в'}
                link={{name: 'Москве', href: '#'}}
            />
            <CardEvacuatorCar/>
            <div className={styles.banner}>
                <div className="container">
                    <div className={styles.bannerRow}>
                        <div className="">
                            <img src={iconEva} alt=""/>
                        </div>
                        <h2>Здесь может быть ваш эвакуатор</h2>
                        <Link to={'/create-ad'} className={clsx('btn', styles.btn)}>
                            Добавить объявление
                        </Link>
                    </div>
                </div>
            </div>
            <section className={styles.block2}>
                <div className="container">
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <h3>Как вызвать эвакуатор в Москве дешево?</h3>
                            <p>
                                Поломка авто или ДТП – случайностей на дороге много. Решение одно –
                                вызвать эвакуатор и доставить неисправный автомобиль на СТО/парковку или в
                                гараж в Москве. С помощью онлайн-сервиса Эварус вы сможете заказать услугу
                                эвакуатора в Москве (Московской области) максимально быстро и при этом
                                сэкономить.
                            </p>
                            <p>
                                Мы предоставляем доступ к базе коммерческих и частных эвакуаторов Москвы.
                                Это надежные компании, которые оперативно пришлют спецтехнику вам на
                                помощь и обеспечат безопасную транспортировку авто.
                            </p>
                        </div>
                        <div className={styles.image}>
                            <img
                                src={image1}
                                alt="Как вызвать эвакуатор в Москве
                            дешево?"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

import React from 'react';
import {Banner} from '../../components/banner/Banner';
import styles from './MainPage.module.scss';
import {CardEvacuatorCar} from '../../components/card-evacuator-car/CardEvacuatorCar';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

import iconEva from 'assets/img/banner/banner-icon-yellow.png';
import image1 from 'assets/img/main-pg/how-call-evacuator.png';
import image2 from 'assets/img/main-pg/evacuator-24.png'
import image3 from 'assets/img/main-pg/top-car.png'
import image4 from 'assets/img/advantages/advantages.png'
import {priceInfoConstant} from "../../libs/constants/price-info.constant";
import {PriceInfoCard} from "../../components/price-info-card/PriceInfoCard";
import {Slider} from "../../components/slider/Slider";

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
            <article className={styles.block2}>
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
            </article>
            <article className={styles.block3}>
                <div className="container">
                    <h3>Что нужно знать, чтобы заказать эвакуатор в Москве</h3>
                    <div className={styles.row}>
                        <div className={styles.item}>
                            <div className={styles.image}>
                                <img src={image2} alt="Заказы на вызов эвакуатора"/>
                            </div>
                            <p>Заказы на вызов эвакуатора в Москве перевозчики-партнеры “Тут Эвакуатор” принимают
                                круглосуточно. Когда бы вы не позвонили, эвакуатор найдется всегда. Размещая заказ
                                на эвакуатор, ознакомьтесь с информацией
                                о транспортной компании, проконсультируйтесь
                                с ее специалистами и выберите оптимальный вариант перевозки своего ТС.</p>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.image}>
                                <img src={image3} alt="Разные классы авто"/>
                            </div>
                            <p>Примите во внимание, что одни и те же виды эвакуаторов рассчитаны на транспортировку авто
                                разных классов. Вопрос заключается лишь в том, какой тип эвакуатор будет выгоднее
                                задействовать в вашем случае. Следуя рекомендациям перевозчика, вы сможете недорого
                                эвакуировать авто как в Москве, так и в области.</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className={styles.block4}>
                <div className="container">
                    <h3>Что входит в стоимость перевозки эвакуатором</h3>
                    <p>Стоимость эвакуации включает в себя оплату услуг по погрузке, перевозке и выгрузке авто,
                        а также по подаче эвакуатора в пункт дислокации ТС в Москве.
                    </p>
                    <b> При формировании цены перевозчики берут в расчет четыре аспекта:</b>
                    <div className={styles.row}>
                        {priceInfoConstant.map((item, index) => <PriceInfoCard {...item} key={index}/>)}
                    </div>
                </div>
            </article>
            <article className={styles.block5}>
                <div className="container">
                    <h3>Преимущества онлайн-сервиса ТутЭвакуатор.Ру</h3>
                    <div className={styles.row}>
                        <div className={styles.leftInfo}>
                            <p>ТутЭвакуатор.Ру – это удобный сервис для тех, кому нужно недорого и быстро перевезти авто
                                с техническими неисправностями или же с повреждениями, полученными при ДТП в Москве.
                            </p>
                            <b> Воспользовавшись ТутЭвакуатор.Ру, вы сможете:</b>
                            <ul className={styles.list}>
                                <li>получить постоянный доступ к базе надежных перевозчиков Москвы — сервис работает
                                    всегда, вне зависимости от воскресных/праздничных дней
                                </li>
                                <li>заказать эвакуатор круглосуточно — 24/7</li>
                                <li>выбрать самое экономически выгодное предложение — цены на эвакуационные услуги
                                    рыночные, разница может быть ощутимой
                                </li>
                                <li>договориться с транспортной компанией напрямую — без посредников и комиссионных</li>
                                <li>осуществить эвакуацию авто недорого — без скрытых платежей, неучтенных расходов</li>
                                <li>вызвать эвакуатор в срочном порядке — охвачена Московская область, стоянки
                                    спецтехники базируются во многих районах Москвы, подача выполняется оперативно
                                </li>
                            </ul>
                        </div>
                        <div className={styles.image}>
                            <img src={image4} alt="Преимущества онлайн-сервиса ТутЭвакуатор.Ру"/>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.item}>
                            <h4>Как оплатить заказ на эвакуатор</h4>
                            <p>Услуги по эвакуации вы оплачиваете непосредственно исполнителю – транспортной компании,
                                взявшейся за перевозку вашего ТС. Оплата производится по завершении эвакуации, после
                                выгрузки авто в конечной точке в Москве. </p>
                            <p>Формы оплаты стандартные для Москвы:
                                наличный/безналичный расчет или банковский перевод. Эварус не взимает комиссионные с
                                клиентов за пользование сервисом.</p>
                        </div>
                        <div className={styles.item}>
                            <h4>Как скоро прибудет эвакуатор</h4>
                            <p>При оформлении заказа перевозчик сообщит вам расчетное время прибытия эвакуатора в точку
                                погрузки авто. Как правило, в Москве это происходит в течение 10-15 мин., но зависит от
                                загруженности дорог Москвы и погодных условий. Перевозчик, принявший заказ, будет
                                информировать вас о наличии дорожных пробок и возможной задержке подачи эвакуатора.
                                Автопарки наших партнеров находятся во многих районах Москвы, поэтому мы рекомендуем вам
                                выбрать ближайший эвакуатор, чтобы ускорить процесс транспортировки авто.</p>
                        </div>
                    </div>
                </div>

            </article>
            <article className={styles.block6}>
                <div className="container">
                    <h3>Какой вес может взять на борт эвакуатор</h3>
                    <p>Эвакуатор используют для перевозки всех видов автотранспорта: от небольших квадроциклов до
                        габаритных
                        коммерческих авто. Эвакуатор способен транспортировать автомобили до 8 т.</p>
                    <b>Виды эвакуаторов, доступные для заказа на ТутЭвакуатор.Ру:</b>
                    <Slider/>
                </div>

            </article>
        </main>
    );
};

import React, {FC} from 'react';
import {AdvertisementTypes} from "../../../libs/types/advertisement.types";
import styles from './CardCar.module.scss'
import clsx from "clsx";

export const CardCar: FC<AdvertisementTypes> = (props) => {
    const {id, name, img, price, contact, geo, comments} = props
    return (
        <div className={styles.card}>
            <h3>{name}</h3>
            <div className={styles.cardRow}>
                <div className={styles.image}>
                    <img src={img} alt={name}/>
                </div>
                <ul className={styles.price}>
                    <li><p>Легковой автомобиль</p><p
                        className={styles.sell}>{price.auto ? price.auto + 'руб' : 'Нет'}</p></li>
                    <li><p>Мотоцикл (крадроцикл и т.д.)</p><p
                        className={styles.sell}>{price.moto ? price.moto + 'руб' : 'Нет'}</p></li>
                    <li><p>Внедорожник</p><p
                        className={styles.sell}>{price.crossover ? price.crossover + 'руб' : 'Нет'}</p></li>
                    <li><p>Микроавтобус</p><p
                        className={styles.sell}>{price.microbus ? price.microbus + 'руб' : 'Нет'}</p></li>
                    <li><p>Загородный тариф</p><p
                        className={styles.sell}>{price.country ? price.country + 'руб/км' : 'Нет'}</p></li>
                </ul>
                <div className={styles.contacts}>
                    <a href={`tel:${contact.phone1}`} className={clsx('btn')}>{contact.phone1}</a>
                    {contact.phone2 && !contact.whatsapp &&
                        <a href={`tel:${contact.phone2}`} className={clsx('btn')}>{contact.phone2}</a>}
                    {contact.whatsapp && !contact.phone2 &&
                        <a href={`https://wtsp.cc/${contact.whatsapp}`} className={clsx('btn')}>{contact.whatsapp}</a>}

                    <div className={styles.geolocation}>
                        <p className={styles.description}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M11.262 22.634C11.262 22.634 4 16.518 4 10.5C4 8.37827 4.84285 6.34344 6.34315 4.84315C7.84344 3.34285 9.87827 2.5 12 2.5C14.1217 2.5 16.1566 3.34285 17.6569 4.84315C19.1571 6.34344 20 8.37827 20 10.5C20 16.518 12.738 22.634 12.738 22.634C12.334 23.006 11.669 23.002 11.262 22.634ZM12 14C12.4596 14 12.9148 13.9095 13.3394 13.7336C13.764 13.5577 14.1499 13.2999 14.4749 12.9749C14.7999 12.6499 15.0577 12.264 15.2336 11.8394C15.4095 11.4148 15.5 10.9596 15.5 10.5C15.5 10.0404 15.4095 9.58525 15.2336 9.16061C15.0577 8.73597 14.7999 8.35013 14.4749 8.02513C14.1499 7.70012 13.764 7.44231 13.3394 7.26642C12.9148 7.09053 12.4596 7 12 7C11.0717 7 10.1815 7.36875 9.52513 8.02513C8.86875 8.6815 8.5 9.57174 8.5 10.5C8.5 11.4283 8.86875 12.3185 9.52513 12.9749C10.1815 13.6313 11.0717 14 12 14Z"
                                      fill="#777777"/>
                            </svg>
                            <span>Место стоянки</span></p>
                        <p>{geo}</p>
                    </div>
                    <button className={clsx('btn', 'btn-strk', styles.btn)}>
                        <small>ID объявления {id}</small>
                        <p>Заказать рекламу</p>
                    </button>
                </div>
            </div>
            <p>{comments}</p>

        </div>
    );
};
import React, {FC} from 'react';
import {PriceInfoTypes} from "../../../libs/types/price-info.types";
import styles from './SlideElement.module.scss'

export const SlideElement: FC<PriceInfoTypes> = ({image, title, text}) => {
    return (
        <div className={styles.slide}>
            <h4>{title}</h4>
            <div className={styles.image}>
                <img src={image} alt={title}/>
            </div>
            <p>{text}</p>
        </div>
    );
};
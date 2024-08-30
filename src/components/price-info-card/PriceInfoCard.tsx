import React, {FC} from 'react';
import {PriceInfoTypes} from "../../libs/types/price-info.types";
import styles from './PriceInfoCard.module.scss'

export const PriceInfoCard: FC<PriceInfoTypes> = ({image, title, text}) => {
    return (
        <div className={styles.infoCard}>
            <div className={styles.imageIcon}>
                <img src={image} alt={title}/>
            </div>
            <div className={styles.description}>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
};
import React, {FC} from 'react';
import {PriceInfoTypes} from "../../libs/types/price-info.types";

export const PriceInfoCard: FC<PriceInfoTypes> = ({image, title, text}) => {
    return (
        <div>
            <div className="">
                <img src={image} alt={title}/>
            </div>
            <div className="">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
};
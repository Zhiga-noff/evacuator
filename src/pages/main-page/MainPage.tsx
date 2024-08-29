import React from 'react';
import {Banner} from "../../components/banner/Banner";
import styles from './MainPage.module.scss'
import {CardEvacuatorCar} from "../../components/card-evacuator-car/CardEvacuatorCar";

export const MainPage = () => {
    return <main className={styles.main}>
        <Banner text={'Телефоны для вызова эвакуатора в'} link={{name: 'Москве', href: '#'}}/>
        <CardEvacuatorCar/>
    </main>;
};

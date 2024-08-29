import React from 'react';
import {Banner} from "../../components/banner/Banner";
import styles from './MainPage.module.scss'

export const MainPage = () => {
    return <main className={styles.main}>
        <Banner text={'Телефоны для вызова эвакуатора в'} link={{name: 'Москве', href: '#'}}/>
    </main>;
};

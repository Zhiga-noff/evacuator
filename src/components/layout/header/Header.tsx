import React from 'react';
import {Link} from "react-router-dom";
import styles from './Header.module.scss'

import logo from 'assets/img/logo.png'
import clsx from "clsx";

export const Header = () => {
    return <header>
        <div className={styles.headerRow}>
            <Link to="/" className={styles.logo}>
                <img src={logo} alt="Тут эвакуатор"/>
            </Link>
            <div className={styles.rowBtn}>
                <ul>
                    <li><a href="#">о проекте</a></li>
                    <li><a href="#">контакты</a></li>
                </ul>
                <Link to={'/create-ad'} className={clsx('btn', styles.btn)}>Добавить объявление</Link>
            </div>
        </div>
    </header>;
};

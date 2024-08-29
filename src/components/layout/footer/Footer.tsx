import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '../../../assets/img/logo.png';

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className={styles.footerRow}>
                    <Link to="/" className={styles.logo}>
                        <img src={logo} alt="Тут эвакуатор"/>
                    </Link>
                    <ul className={styles.footerMenu}>
                        <li>
                            <a href="#">Вызвать эвакуатор</a>
                        </li>
                        <li>
                            <a href="#">Добавить эвакуатор на сайт</a>
                        </li>
                        <li>
                            <a href="#">Помощь</a>
                        </li>
                        <li>
                            <a href="#">Правила оплаты</a>
                        </li>
                        <li>
                            <a href="#">Защита персональных данных</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

import React, {useEffect, useState} from 'react';
import {BASE_URL} from "../../libs/constants/api.constant";
import {AdvertisementTypes} from "../../libs/types/advertisement.types";

import load from 'assets/img/loader.png'
import styles from './CardEvacuatorCar.module.scss'
import clsx from "clsx";
import {CardCar} from "./card-car/CardCar";

export const CardEvacuatorCar = () => {

    const [page, setPage] = useState<number[]>([])
    const [activePage, setActivePage] = useState<number>(1)
    const [cardInfo, setCardInfo] = useState<AdvertisementTypes[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!page.length) {
            fetch(BASE_URL).then((res) => res.json()).then(data => {
                setPage(rageElement(data.length))
            }).catch(er => er)
        }

        fetch(`${BASE_URL}?_page=${activePage}&_limit=4`)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setCardInfo(data)
                    setLoading(false)
                }, 1500)
            }).catch(er => er)
    }, [activePage])

    function rageElement(size: number): number[] {
        const elements = []
        for (let i = 1; i < Math.floor(size / 4) + 1; i++) {
            elements.push(i)
        }
        return elements
    }

    const setNewActPage = (page: number) => {
        setLoading(true)
        setActivePage(page)
    }

    return (
        <section className={styles.block}>
            <div className="container">
                {loading ? <div className={styles.load}>
                    <img src={load} alt="loading"/>
                </div> : <div className={styles.advertisement}>
                    {cardInfo.map((item, index) => {
                        return <CardCar key={index} {...item}/>
                    })}
                </div>}
                <div className={styles.btnRow}>
                    {activePage !== 1 &&
                        <button className={styles.revers} onClick={() => setNewActPage(activePage - 1)}>
                            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" rx="5.5" stroke="#0297D4"/>
                                <path d="M21 14L33 26L21 38" stroke="#0297D4" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>}
                    {page.map((item, index) => {
                        return <button className={clsx({[styles.active]: item === activePage})} key={index}
                                       onClick={() => setNewActPage(item)}>{item}</button>
                    })}
                    {page.length !== 0 && <button onClick={() => setNewActPage(activePage + 1)}>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" rx="5.5" stroke="#0297D4"/>
                            <path d="M21 14L33 26L21 38" stroke="#0297D4" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>}
                </div>
            </div>
        </section>

    );
};

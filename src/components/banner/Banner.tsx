import React, {FC} from 'react';
import styles from './Banner.module.scss'

interface IProps {
    text: string
    link?: {
        name: string,
        href: string
    }
}

export const Banner: FC<IProps> = ({text, link}) => {
    return (
        <div className={styles.banner}>
            <div className="container">
                <h2>{text + ' '}
                    {link ? <a href={link.href} target={'_blank'}>{link.name}</a> : ''}
                </h2>
            </div>
        </div>
    );
};
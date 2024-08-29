import React, {FC} from 'react';
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {useLocation} from "react-router";

interface IProps {
    children: React.ReactElement;
}

export const Layout: FC<IProps> = ({children}) => {
    const path = useLocation()

    return <div>
        <Header/>
        {children}
        <Footer/>
    </div>;
};

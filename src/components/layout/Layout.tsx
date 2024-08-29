import React, {FC} from 'react';
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Banner} from "../banner/Banner";

interface IProps {
    children: React.ReactElement;
}

export const Layout: FC<IProps> = ({children}) => {
    return <div>
        <Header/>
        <Banner/>
        {children}
        <Footer/>
    </div>;
};

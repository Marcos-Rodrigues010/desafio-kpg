import React from 'react';
import {Template} from './styled';
import Header from '../Header'
import Disclosure from '../Disclosure';
import Tariffs from '../Tariffs';
import Banner from '../BannerBottom';

const Container = () => {
    return(
        <Template>
            <div className="top">
                <Header />
                <Disclosure />
            </div>
            <div className="quite">
                <Tariffs />
            </div>
            <div className="low">
                <Banner />
            </div>
        </Template>
    )
}

export default Container;
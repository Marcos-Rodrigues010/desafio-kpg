import React from 'react';
import {Template} from './styled';
import Header from '../Header'
import Presentation from '../Presentation';
import Services from '../Services';
import Products from '../Products';

const Container = () => {
    return(
        <Template>
            <Header />
            <section className="section1">
                <Presentation />
            </section>
            <section className="section2">
                <Services />
            </section>
            <section className="section3">
                <Products />
            </section>
        </Template>
    )
}

export default Container;
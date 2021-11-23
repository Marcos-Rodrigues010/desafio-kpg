import React, { useState } from 'react';
import { Products } from './styled';

const Container = () => {

    const [toggleContent, setToggleContent] = useState(true);

    function toggle() {
        setToggleContent(!toggleContent);
        if (toggleContent) {
            document.querySelector(".slider").innerHTML = "PARA VOCÊ";
        } else if (!toggleContent) {
            document.querySelector(".slider").innerHTML = "PARA SUA EMPRESA";
        }
    }

    return (
        <Products>
            <div className="products--title">
                <div className="products--title--area">
                    <h1>Um banco completo</h1> <br />
                    <span>com produtos exclusivos.</span>
                </div>
                <div className="switch-button" onChange={toggle}>
                    <label className="switch">
                        <input type="checkbox" value="PARA VOCÊ" />
                        <div className="slider round"><span className="sliderText">PARA SUA EMPRESA</span></div>
                    </label>
                </div>
            </div>
            <div className="products--content">
                {toggleContent ?
                    <div>
                        <h1>Para você</h1>
                        <span>vantagens exclusivas para você</span>
                    </div>
                    : <div>
                        <h1>Para sua empresa</h1>
                        <span>vantagens exclusivas para sua empresa</span>
                    </div>
                }
            </div>
        </Products>
    )
}

export default Container;
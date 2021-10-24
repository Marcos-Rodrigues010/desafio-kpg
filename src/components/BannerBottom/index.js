import React, {useState} from 'react';
import { Banner } from './styled';

const Container = () => {

    const [toggleContent, setToggleContent] = useState(true);

    function toggle(){
        setToggleContent(!toggleContent);
        if(toggleContent){
            document.querySelector(".slider").innerHTML="PARA VOCÊ";
        }else if(!toggleContent){
            document.querySelector(".slider").innerHTML="PARA SUA EMPRESA";
        }
    }

    return (
        <Banner>
            <div className="banner--title">
                <div className="banner--title_title">
                    <h1>Um banco completo</h1> <br />
                    <span className="font-gray">com produtos exclusivos</span>
                </div>
                <div className="switch-button" onChange={toggle}>
                    <label className="switch">
                        <input type="checkbox" value="PARA VOCÊ" />
                        <span className="slider round">PARA SUA EMPRESA</span>
                    </label>
                </div>
            </div>
            <div className="banner--content">
                {toggleContent ?
                    <div>
                        <h1>Para você</h1>
                        <span className="font-gray">vantagens exclusivas para você</span>
                    </div>
                    : <div>
                        <h1>Para sua empresa</h1>
                        <span className="font-gray">vantagens exclusivas para sua empresa</span>
                    </div>
                }
            </div>
        </Banner>
    )
}

export default Container;
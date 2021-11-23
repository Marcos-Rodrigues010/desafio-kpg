import React from 'react';
import {Presentation} from './styled';

const Container = () => {
    return(
        <Presentation>
            <div id="presentation--points">
                <span>novo</span>
                <p>Conheça nosso Programa de Pontos Átomos</p>
            </div>
            <div id="presentation--title">
                Um banco transparente,<br/> completo e com a sua cara
            </div>
            <div id="presentation--account">
                Conta digital e cartão de crédito gratuitos.<br/>
                Saques e transferências sem tarifa.
            </div>
            <div id="presentation--products">
                <div id="btn--ourProducts">NOSSOS PRODUTOS</div>
            </div>
            <div id="signUp--responsive">
                    <div  className="btn-white" id="signUp--responsive_btn">ABRIR SUA CONTA</div>
            </div>
        </Presentation>
    )
}

export default Container;

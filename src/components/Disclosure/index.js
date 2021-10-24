import React from 'react';
import {Disclosure} from './styled';

const Container = () => {
    return(
        <Disclosure>
            <div id="disclosure--points">
                <div className="font-size-12 font-gray" id="disclosure--points_new">novo</div>
                <div className="font-size-12 font-gray" id="disclosure--points_title">Conheça nosso Programa de Pontos Átomos</div>
            </div>
            <div id="disclosure--title">
                Um banco transparente,<br/> completo e com a sua cara
            </div>
            <div className="font-size-12 font-gray" id="disclosure--account">
                Conta digital e cartão de crédito gratuitos.<br/>
                Saques e transferências sem tarifa.
            </div>
            <div id="products">
                <div id="products--ourProducts">NOSSOS PRODUTOS</div>
            </div>
            <div id="signUp--responsive">
                    <div  className="btn-white" id="signUp--responsive_btn">ABRIR SUA CONTA</div>
            </div>
        </Disclosure>
    )
}

export default Container;

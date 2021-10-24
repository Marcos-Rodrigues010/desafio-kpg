import React from 'react';
import { Tariffs } from './styled';

const container = () => {
    return (
        <Tariffs>
            <div className="tariffs">
                <div className="tariffs--title">
                    <h1>Sem Tarifas:</h1><br />
                    <span className="tariffs--subtitle">economize seu dinheiro</span>
                </div>
                <div className="benefits">
                    <div className="benefits--content">
                        <div className="benefits--content_icon">
                            <div className="icon"><span className="font-size-12 font-gray">icon</span></div>
                        </div>
                        <div className="benefits--content_title">
                            Saques nos caixas da <br /> rede Banco24Horas
                        </div>
                        <div className="benefits--content_content font-size-12 font-gray">
                            São mais de 23 mil caixas em <br />
                            680 municípios do Brasil. Saques <br />
                            ilimitados sem cobrança de <br />
                            tarifa.
                        </div>
                    </div>
                    <div className="benefits--content">
                        <div className="benefits--content_icon">
                            <div className="icon"><span className="font-size-12 font-gray">icon</span></div>
                        </div>
                        <div className="benefits--content_title">
                            Transferências <br /> e TEDS ilimitados
                        </div>
                        <div className="benefits--content_content font-size-12 font-gray">
                            Movimente seu dinheiro para <br />
                            qualquer conta em qualquer <br />
                            banco sem pagar nada por isso. <br />
                        </div>
                    </div>
                    <div className="benefits--content">
                        <div className="benefits--content_icon">
                            <div className="icon"><span className="font-size-12 font-gray">icon</span></div>
                        </div>
                        <div className="benefits--content_title">
                            Depósito por boleto
                        </div>
                        <div className="benefits--content_content font-size-12 font-gray">
                            Emita boletos grátis e traga <br />
                            dinheiro para sua conta C6 <br />
                            sem pagar tarifas.
                        </div>
                    </div>
                    <div className="benefits--content">
                        <div className="benefits--content_icon">
                            <div className="icon"><span className="font-size-12 font-gray">icon</span></div>
                        </div>
                        <div className="benefits--content_title">
                            Atendimento 24h
                        </div>
                        <div className="benefits--content_content font-size-12 font-gray">
                            Conte com a gente 24h por <br />
                            dia, 7 dias por semana pelo <br />
                            chat do app.
                        </div>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="left-cards">
                    <div className=" card left-cards_top"></div>
                    <div className=" card left-cards_bottom"></div>
                </div>
                <div className="right-cards">
                    <div className=" card right-cards_top"></div>
                    <div className=" card right-cards_top"></div>
                </div>
            </div>
        </Tariffs>
    )
}

export default container;
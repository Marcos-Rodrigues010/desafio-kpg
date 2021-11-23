import styled from 'styled-components';

export const Services = styled.div`

    max-width:1140px;
    margin:auto;
    display:flex;
    justify-content:space-between;

    .tariffs{
        width:50%;
        padding-top:50px;
        padding-bottom:230px;
    }


    .tariffs--title h1{
        font-size:50px;
        margin-bottom:-15px;
        font-family:'Montserrat', sans-serif;
        font-weight:700;
    }

    .tariffs--subtitle{
        font-size:40px;
        color:#555;
        font-family:'Montserrat', sans-serif;
        font-weight:500;
    }

    .benefits{
        margin-top:50px;
        display:grid;
        grid-template-columns: auto auto;
        grid-gap: 30px 80px;
    }

    .benefits--content{
        padding-top:30px;
    }

    .benefits--content_title{
        margin-top:8px;
        margin-bottom:5px;
        font-size:20px;
        font-family:'Montserrat', sans-serif;
        font-weight:700;
        line-height:25px;
    }

    .benefits--content_icon{
        height:35px;
        display:flex;
        align-items:center;
        margin-bottom:10px;
    }

    .benefits--content_text{
        line-height:23px;
        color:#757575;
        font-family:'Inter', sans-serif;
        font-weight:400;
    }

    .cards{
        width:50%;
        max-height:720px;
        display:grid;
        grid-template-columns: auto auto;
        grid-gap: 30px 30px;
        justify-content: right;
        align-items:right;

        .black-card, .red-card{
            transform: translateY(-25px);
        }

        .blue-card, .gray-card{
            transform: translateY(80px);
        }
    }

    @media (max-width:1000px){

        &{
            flex-direction:column;
            align-items:center;
            padding-bottom:140px;

        }

        .tariffs{
            width:100%;
            padding-bottom:100px;
        }

        .cards{
            width:100%;
            justify-content:center;
        }

    }

    @media (max-width:600px){

        .benefits{
            grid-template-columns: auto;
            grid-gap: 20px 0;
            justify-content:center;
        }
        .benefits--content{
            width:100%;
        }

        .cards{
            grid-gap:20px 0px;
        }

        .card{
            width:150px;
            height:190px;
        }
    }

    @media (max-width:350px){
        .tariffs--title h1{
            font-size:40px;
        }

        .tariffs--subtitle{
            font-size:27px;
        }
    }

`;
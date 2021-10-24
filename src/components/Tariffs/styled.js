import styled from 'styled-components';

export const Tariffs = styled.div`

    width:80%;
    margin:auto;
    display:flex;
    justify-content:space-between;

    .tariffs{
        width:50%;
        padding:50px 0px;
    }


    .tariffs--title h1{
        font-weight:bold;
        margin-bottom:-15px;
    }

    .tariffs--subtitle{
        font-size:22px;
        color:#555;
    }

    .benefits{
        margin-top:50px;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }

    .benefits--content{
        width:50%;
        margin-top:30px;

        .icon{
            width:30px;
            height:30px;
            line-hight:20px;
            border-radius:30px;
            background-color:#F1F1F1;

            span{
                position:relative;
                left:10px;
            }
        }
    }

    .benefits--content_title{
        margin-top:8px;
        margin-bottom:5px;
        font-size:14px;
        font-weight:bold;
    }

    .cards{
        width:50%;
        display:flex;
        justify-content:right;
        margin-top:30px;

        .left-cards .right-cards{
            flex-direction:column;
            flex:1;
        }

        .left-cards{
            transform:translateX(-30px);
        }

        .right-cards{
            transform:translateY(-50px);
        }

        .card{
            width:150px;
            height:260px;
            background-color:#CCC;
            border-radius:5px;
            margin-bottom:30px;
        }
    }

    @media (max-width:950px){

        .cards .left-cards{
            transform:translateX(10px);
        }
        .cards .card{
            height:230px;
            margin:8px;
        }
        
    }

    @media (max-width:890px){

        &{
            justify-content:center;

        }

        .tariffs{
            width:100%;
        }


        .cards{
            display:none;
        }
    }

    @media (max-width:420px){
        .benefits--content{
            width:100%;
        }
    }

`;
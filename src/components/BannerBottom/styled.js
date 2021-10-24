import styled from 'styled-components';

export const Banner = styled.div`
    width:80%;
    margin:auto;

    .banner--title{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }

    .banner--title_title h1{
        margin-bottom:-15px;
    }

    .banner--title_title span{
        font-size:20px;
    }

    .switch {
        position: relative;
        display: inline-block;
        width:410px;
        height: 42px;
        line-height:42px;
        color:#777;
        padding:5px;
        font-size:12px;
    }
      
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
      
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
        text-align:right;
        padding:2px 7px;
    }
      
    .slider:before {
        position: absolute;
        content: "PARA VOCÊ";
        height: 38px;
        width: 200px;
        left: 2px;
        background-color:#000;
        color:#FFF;
        -webkit-transition: .4s;
        transition: .4s;
        text-align:center;
        padding:0 7px;
    }
      
    input:checked + .slider {
        background-color: #transparent;
    }
      
    input:focus + .slider {
    }
      
    input:checked + .slider:before {
        content:"PARA SUA EMPRESA";
        -webkit-transform: translateX(192px);
        -ms-transform: translateX(192px);
        transform: translateX(192px);
        text-align:center;
    }

    input:checked + .slider{
        text-align:left;
    }
      
    .slider.round {
        border-radius: 24px;
    }
      
    .slider.round:before {
        border-radius: 32px;
    }

    .banner--content{
        width:100%;
        height:200px;
        text-align:center;
        background-color:#000;
        color:#FFF;
        padding-top:40px;
        margin-top:40px;
        border-radius:5px;

        h1{
            margin-bottom:0;
        }
    }

    @media (max-width:950px){
        .banner--title{
            justify-content:center;
        }

        .banner--title_title{
            margin-bottom:20px;
        }
    }

    @media (max-width:500px){
        .banner--title_title h1{
            font-size:20px;
        }

        .banner--title_title span{
            font-size:10px;
        }

        .switch{
            width:200px;
            height:22px;
            font-size:8px;
            padding:0;
            line-height:22px;
        }

        .slider:before{
            width:100px;
            height:19px;
        }

        input:checked + .slider:before {
            -webkit-transform: translateX(82px);
            -ms-transform: translateX(82px);
            transform: translateX(82px);
        }

        .banner--content h1{
            font-size:20px;
        }

        .banner--content span{
            font-size:10px;
        }
    }
`;
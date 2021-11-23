import styled from 'styled-components';

export const Products = styled.div`
    max-width:1140px;
    margin:auto;

    .products--title{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        align-items:center;
        color:#FFF;
        font-family:'Montserrat', sans-serif;
    }

    .products--title--area h1{
        font-size:50px;
        margin-bottom:-15px;
        font-weight:700;
    }

    .products--title--area span{
        font-size:35px;
        color:#C8DDEC;
        font-weight:500;
    }

    .switch {
        position: relative;
        display: inline-block;
        width:500px;
        height: 70px;
        line-height:70px;
        color:#000;
        font-size:14px;
        font-weight:500;
    }
      
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
      
    .slider {
        display:flex;
        justify-content:right;
        align-items:center;
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #FFF;
        -webkit-transition: .4s;
        transition: .4s;
        padding:3px 50px;
        border:1px solid #C8DDEC;
    }
    
      
    .slider:before {
        display:flex;
        justify-content:center;
        align-items:center;
        position: absolute;
        content: "PARA VOCÊ";
        height: 58px;
        width: 280px;
        left: 6px;
        background-color:#4F93C4;
        color:#FFF;
        -webkit-transition: .4s;
        transition: all .4s;
    }
      
    input:checked + .slider {
        background-color: #FFF;
        justify-content:left;

    }
     
      
    input:checked + .slider:before {
        content:"PARA SUA EMPRESA";
        -webkit-transform: translateX(204px);
        -ms-transform: translateX(204px);
        transform: translateX(204px);
        text-align:center;
    }
      
    .slider.round {
        border-radius: 40px;
    }
      
    .slider.round:before {
        border-radius: 32px;
    }

    .products--content{
        width:100%;
        height:300px;
        text-align:center;
        background-color:#FFF;
        padding:40px 0;
        margin-top:40px;
        border-radius:5px;
        font-family:'Montserrat', sans-serif;

        h1{
            font-size:50px;
            margin-bottom:10px;
            color:#4D4D4D;
            font-weight:700;
        }

        span{
            color:#949494;
            font-size:30px;
            font-weight:500;
        }
    }

    @media (max-width:1030px){
        .products--title{
            flex-direction:column;
            justify-content:center;
        }

        .products--title--area{
            margin-bottom:20px;
        }
    }

    @media (max-width:550px){
        .products--title--area h1{
            font-size:30px;
        }

        .products--title--area span{
            font-size:20px;
        }

        .switch{
            width:200px;
            height:40px;
            font-size:8px;
            line-height:40px;
        }

        .slider{
            padding-right:12px;
            padding-left:26px;
        }

        .slider:before{
            left:2px;
            width:100px;
            height:36px;
        }

        input:checked + .slider:before {
            -webkit-transform: translateX(95px);
            -ms-transform: translateX(95px);
            transform: translateX(95px);
        }

        .products--content{
            height:200px;
        }

        .products--content h1{
            font-size:30px;
        }

        .products--content span{
            font-size:18px;
        }
    }

    @media (max-width:350px){
        .products--title--area h1{
            font-size:25px;
        }

        .products--title--area span{
            font-size:18px;
        }
    }
`;
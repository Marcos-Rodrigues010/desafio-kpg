import styled from 'styled-components';
import womam from '../../images/womam.png'

export const Template = styled.div`
    margin:auto;
    width:100%;
    max-width:1440px;
    
    .section1, .section2, .section3{
        width:inherit;
        padding:0 20px;
    }

    .section1{ 
        padding-top:90px;
        background: url(${womam}), #4F93C4;
        background-size:contain;
        background-position:80% 50%, center;
        background-repeat:no-repeat;
    }

    .section3{
        padding-top:40px;
        background-color:#4F93C4;
    }

    @media (min-width:1101px) and (max-width:1440px){
        .section1, .section2, .section3{
            padding-left:calc(100vw - 1140px)
            padding-right:calc(100vw - 1140px)
        }
    }

    @media (max-width:1100px){
        .section1{
            background-position:100% 100%, center;
        }
    }

    @media (max-width:550px){
        .section1{
            background-size:550px 400px;
        }
    }
`;
import styled from 'styled-components';
import wall from '../../images/grunge-wall-texture.jpg'

export const Template = styled.div`
    margin:0;
    height:100vh;
    
    .top, .low{
        width:100%;
        height:auto;
    }

    .top{ 
        background-image: url(${wall});
        background-repeat:no-repeat;
        background-position:center;
        background-size:cover;
    }

    .quite{
        width:100%;
    }

    .low{
        padding-top:40px;
        background-color:#DDD;
    }
`;
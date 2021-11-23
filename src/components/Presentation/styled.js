import styled from 'styled-components';

export const Presentation = styled.div`
    margin:auto;
    max-width:1140px;
    padding:70px 0;
    color:#FFF;
    font-family:'Inter', sans-serif;
    font-weight:500;

    #presentation--points{
        display:flex;
        align-items:center;
        font-size:14px;

        span{
            width:60px;
            height:25px;
            line-height:25px;
            border-radius:30px;
            background-color:#FDC027;
            margin-right:15px;
            text-align:center;
        }

        p{
            height:25px;
            line-height:25px;
        }
    }

    #presentation--title{
        margin-top:10px;
        color:#FFF;
        font-size:50px;
        line-height:60px;
        margin-bottom:20px;
        font-family:'Montserrat', sans-serif;
        font-weight:700;
    }

    #presentation--account{
        font-size:18px;
        line-height:25px;
        margin-bottom:25px;
    }

    #btn--ourProducts{
        width:200px;
        height:40px;
        line-height:40px;
        text-align:center;
        color:#FFF;
        border:1px solid #FFF;
        border-radius:40px;
        margin-top:25px;
        font-family:'Montserrat', sans-serif;
        font-weight:500;

        &:hover{
            background-color:#FDC027;
            color:#FFF;
            border:1px solid #FDC027;
        }
    }


    #signUp--responsive_btn{
        width:200px;
        height:40px;
        line-height:40px;
        text-align:center;
        color:#FFF;
        border:1px solid #FFF;
        border-radius:40px;
        margin-top:10px;

        &:hover{
            background-color:#FDC027;
            color:#FFF;
            border:1px solid #FDC027;
        }
    }

    #signUp--responsive{
        display:none;
    }

    @media (max-width: 800px){
        #signUp--responsive{
            display:block
        }
    }

    @media  (max-width:650px){
        #presentation--title{
            font-size:40px;
            line-height:50px;
        }
    }

    @media (max-width:500px){

        &{
            padding-top:40px;
        }

        #presentation--title{
            font-size:30px;
            line-height:40px;
        }
    }

    @media (max-width:430px){

        #presentation--title{
            font-size:25px;
            line-height:35px;
        }

        #signUp--responsive_btn{
            margin-top:30px;
        }
    }

    @media (max-width:350px){

        #presentation--points p{
            margin-bottom:50px;
        }

        #presentation--title{
            font-size:22px;
            line-height:30px;
            margin-bottom:50px;
        }   

        #presentation--account{
            margin-bottom:50px;
        }
    }
    
`;
import styled from 'styled-components';

export const Disclosure = styled.div`
    margin:auto;
    width:80%;
    padding:70px 0;

    #disclosure--points{
        display:flex;

        #disclosure--points_new{
            width:60px;
            height:25px;
            line-height:25px;
            border-radius:30px;
            background-color:#444;
            margin-right:15px;
            text-align:center;
        }

        #disclosure--points_title{
            height:25px;
            line-height:25px;
        }
    }

    #disclosure--title{
        margin-top:10px;
        color:#FFF;
        font-size:40px;
    }

    #disclosure--account{
        margin-top:10px;
    }

    #products--ourProducts{
        width:200px;
        height:40px;
        line-height:40px;
        text-align:center;
        color:#FFF;
        border:1px solid #FFF;
        border-radius:40px;
        margin-top:25px;

        &:hover{
            background-color:#FFF;
            color:#000;
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
            background-color:#FFF;
            color:#000;
        }
    }

    #signUp--responsive{
        display:none;
    }

    @media (max-width: 700px){
        #signUp--responsive{
            display:block
        }
    }

    @media (max-width:600px){

        &{
            padding-top:90px;
        }

        #disclosure--title{
            font-size:30px;
        }
    }

    @media (max-width:600px){


        #disclosure--title{
            font-size:20px;
        }
    }

    @media(max-width:400px){
        
        #disclosure--title{
            margin:30px 0;
        }
    }

    
`;
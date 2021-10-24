import styled from 'styled-components';

export const Header = styled.div`

    width:100%;
    min-height:60px;
    position:fixed;
    top:0;
    left:0;
    z-index:999;

    #header-block{
        width:80%;
        margin:auto;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        align-items:center;
    }

    #logo{
        height:60px;
        display:flex;
        align-items:center;

        #img{
            width:121px;
            height:60px;
            line-height:60px;
            background-color:transparent;
        }
    }

    #business{
        height:auto;
        list-style:none;
        display:flex;
        align-items:center;

        #arrow{
            position:relative;
            left:4px;
            top:3px;
        }


        .dropdown{
            position:relative;
            display:inline-block;
            margin-right:40px;
            cursor:pointer;
          
            .dropdown--content{
                display:none;
                position:absolute;
                background-color:#F9F9F9;
                min-width:100px;
                z-index:1;

                .dropdown--content_item{
                    padding:10px 12px;

                    a{
                        text-decoration:none;
                        color:#000;
                    }
                    &:hover{
                        background-color:#F1F1F1;
                    }
                }

            }
          
            &:hover .dropdown--content{
                display:block;
            }
        }

    }


    #signUp{
        padding:10px;
    }

    #signUp--btn{
        font-size:15px;
        text-align:center;
        max-width:250px;
        min-height:40px;
        line-height:40px;
        border-radius:50px;
        cursor:pointer;
        padding:5px;
    }

    .btn-black{
        background-color:#000;
        color:#FFF;

        &:hover{
            background-color:#E6E6E6;
            color:#000;
        }
    }

    .btn-white{
        background-color:#FFF;
        color:#000;

        &:hover{
            background-color:#E6E6E6;
            color:#000;
        }
    }

    @media (max-width:835px){

        #business{
            font-size:12px;
        }

        #signUp--btn{
            font-size:12px;
            padding:2px;
        }
    }

    @media (max-width:700px){
        #signUp{
            display:none;
        }
    }

    @media (max-width:540px){

        #header-block{
            flex-direction:column;
            justify-content:center;
        }

        #logo{
            flex:1;
            margin-bottom:5px;
        }

        #business{
            flex:1;
            margin-bottom:5px;
        }
    }
`;
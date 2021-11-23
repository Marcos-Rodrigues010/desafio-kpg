import styled from 'styled-components';

export const Header = styled.header`

    margin:auto;
    width:inherit;
    max-width:1440px;
    min-height:60px;
    position:fixed;
    top:0;
    z-index:999;
    padding-top:20px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;

    .header--container{
        margin:auto;
        width:100%;
        max-width:1140px;
        display:grid;
        grid-template-columns:auto auto auto;
        justify-content:space-between;
        align-items:center;
    }

    #logo{
        height:60px;
        display:flex;
        align-items:center;
    }

    #business{
        height:auto;
        list-style:none;
        display:flex;
        align-items:center;
        transition:all .4s;

        #arrow{
            position:relative;
            left:4px;
            top:3px;
            fill:#FFF;
        }


        .dropdown{
            position:relative;
            display:inline-block;
            margin-right:40px;
            cursor:pointer;
            color:#FFF;
          
            .dropdown--content{
                display:none;
                position:absolute;
                background-color:#F9F9F9;
                z-index:1;
                transition:all .4s;

                
                ul, li{
                    list-style:none;
                }

                ul{
                    padding:0;
                }

                li{
                    padding:10px;
                }

                li:hover{
                    background-color:#F1F1F1;
                }

                a{
                    text-decoration:none;
                    color:#000;
                }

            }
          
            &:hover .dropdown--content{
                display:block;
            }
        }

    }

    #forYourCompany .dropdown--content{
        width:150px;
    }

    #forYou .dropdown--content{
        width:91px;
    }

    .black-btn{
        background-color:#000;
        color:#FFF;

        &:hover{
            background-color:#FDC027;
            color:#FFF;
        }
    }

    .white-btn{
        background-color:#FFF;
        color:#000;

        &:hover{
            background-color:#FDC027;
            color:#FFF;
        }
    }

    #menu-button{
        display:none;
    }

    @media (max-width:1170px){
        .header--container{
            padding:0 20px;
        }
    }

    @media (max-width:800px){
        #signUp--btn{
            display:none;
        }
    }

    @media (max-width:600px){

        .header--container{
            grid-template-columns:auto auto;
        }

        #logo{
            margin-bottom:5px;
        }

        #business{
            display:none;
            position:absolute;
            top:62px;
            right:20px;
            width:200px;
            height:calc(100vh - 100px);
            background-color:rgba(0, 0, 0, 0.9);
            flex-direction:column;
            align-items:start;
            padding-left:20px;
            border-radius:5px;
            text-transform:uppercase;

        }

        #forYou{
            margin:30px 0;
        }

        .btn{
            display:none;
        }

        #menu-button{
            width:30px;
            height:30px;
            position:absolute;
            right:20px;
            top:30px;
            display:block;
        }
    }
`;
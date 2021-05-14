import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from "../services/api";
import { useLocation } from 'react-router-dom';

const Div = styled.div`
    .h1hhh{
        width: 100%;
        height: 100px;
        color: rgba(0, 0, 0, 0.46);
        background-color: #c4c4c4;
        margin-top: 70px;
    }
    .h1hh{
        margin-left: 6%;
        padding-top: 25px;
        font-size: 30px;
    }
    .cont{
        width: 50%;
        text-align: center;
        margin: 70px 0px 70px 25%;
    }
    h2{
        color: rgba(0, 0, 0, 0.70);
    }
    .p{
        text-align: justify;
        border-top: 2px solid #B54949;
        padding: 30px 0px;
        margin-top: 30px;
        color: rgba(0, 0, 0, 0.70);
    }
    .ponto{
        color: white;
    }
    img{
        width: 30%;
        height: 22vh;
        margin-bottom: 30px;
    }

    @media (max-width: 580px){
        .h1hhh{
            width: 100%;
            height: 75px;
            color: rgba(0, 0, 0, 0.46);
            background-color: #c4c4c4;
            margin-bottom: 40px;
        }
        .h1hh{
            margin-left: 10%;
            padding-top: 20px;
            font-size: 25px;
        }
        .cont{
            width: 80%;
            text-align: center;
            margin-left: 10%;
            margin-bottom: 70px;
        }
        img{
            height: 25vh;
        }
    }
`;

export default function ItemBlog(){

    let location = useLocation();
    const [info, setInfo] = useState({});
    

    useEffect(() => { 
    
        api.get(`${location.state.route}/${location.state.id}`)
            .then(res => {           
                setInfo(res.data)
             })
             .catch(error=>{
                 console.log("Error")
             })
        
      }, [])

    return(
        <>
            <Div>
                
                    <div class="geral">
                        <div class="h1hhh">
                            <p class="h1hh">{ info.titulo }</p>
                        </div>
                        <div class="cont">
                            <h2 dangerouslySetInnerHTML={{__html: info.titulo}}></h2>
                            <p class="p" >
                            {/*(info.img && (location.state.route == '/noticia/show') ) && (
                                <img src={`https://ana.gov.ao/backend/u/${info.img}`}/>
                            )*/}
                            <p dangerouslySetInnerHTML={{__html: info.descricao}}></p>
                            </p>
                        </div>
                    </div>
            </Div>
        </>
    )
}
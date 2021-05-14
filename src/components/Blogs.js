import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import api from "../services/api";
import './Blog.css'


const Div = styled.div `
    width: 90%;
    margin: auto;
    text-align: justify !important;
    .actions{
        display: flex;
        justify-content: space-between;
        margin-bottom: 70px;
        width: 90%;
        margin-left: 5%;
    }
    .actions button{
        padding: 10px;
        border-radius: 5px;
        border: 0;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
    }
    .actions button[disabled]{
       cursor: default;
    }
    .actions button:hover{
        opacity: 0.7;
    }
    .container{
        width: 100%;
        margin-left: 5%;
        display: flex;
        grid-template-columns: auto;
        grid-gap: 50px 40px;
        
    }
    .container-child{
        display: inline-grid;
        grid-template-columns: auto auto;
        grid-gap: 50px 40px;
        padding-bottom: 40px;
    }
    .child{
        display: inline-grid;
        grid-template-columns: auto auto;
        grid-gap: 50px 40px;
        padding-bottom: 40px;
        border-bottom: 1px solid #c4c4c4;
    }
    .h1hhh{
        width: 100%;
        height: 100px;
        color: rgba(0, 0, 0, 0.46);
        background-color: #c4c4c4;
        margin-top: 70px;
        margin-bottom: 70px;
    }
    .h1hh{
        margin-left: 6%;
        padding-top: 25px;
        font-size: 30px;
    }
    img{
        height: 25vh;
    }
    .pr{
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: justify;
    }
    .a{
        color: red;
        text-decoration: none;
    }
    @media (max-width: 580px){
        .h1hhhh{
            width: 100%;
            height: 75px;
            color: rgba(0, 0, 0, 0.46);
            background-color: #c4c4c4;
            margin-bottom: 70px;
        }
        .h11{
            margin-left: 10%;
            padding-top: 20px;
            font-size: 25px;
        }
        .container{
            width: 80%;
            margin-left: 5%;
            display: flex;
            flex-direction: column;
            margin-bottom: 70px;
        }
        .container-child{
            display: flex;
            flex-direction: column;
            justify-content:center;
            padding-bottom: 5px;
            border-bottom: none;
            align-content:flex-start;
        }
        .child{
            display: flex;
            flex-direction: column;
            justify-content:center;
            padding-bottom: 5px;
            border-bottom: none;
            align-content:flex-start;
        }
        .grid-item{
            margin-bottom: 40px;
        }
        img{
            height: 40vh;
            width: 100%;
            margin-left: 6%;
            margin-bottom: -30px;
        }
        .article{
            width: 105%;
            margin-left: 1%;
        }
        .grid-item1{
            padding-bottom: 10px;
            margin-bottom: 40px;
            border-bottom: 1px solid #c4c4c4;
            margin-left: 4%;
        }
    }
`;

export default class Blogs extends Component {

    state = {
        noticias: [],
        noticiasInfo: {},
        page: 1,
        activePage: 1
    }

    componentDidMount(){
        this.info();
    }

    info = async (page = 1) =>{
        const res = await api.get(`/informacoes`);

        const {docs , ...noticiasInfo} = res.data;

        this.setState({noticias: docs, noticiasInfo, page})
        
        console.log(this.state.noticias)
    }
    
    prevPage = () =>{
        const { page } = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;

        this.info(pageNumber)
    }
    nextPage = () =>{
        const { page, noticiasInfo} = this.state;

        if(page === noticiasInfo.pages) return;

        const pageNumber = page + 1;

        this.info(pageNumber)
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    render() {
        const {page, noticiasInfo} = this.state;

        return (
            <>
            <div className="main-banner sbe">
                    <div className="container px-md-0">
                        <h1 ><span>Blog de saúde</span></h1>
                    </div>
                </div>
            <Div>
                
                <div>

                    <div class="container">
                        <div class="container-child">
                            {this.state.noticias && this.state.noticias.map((item, index) => (
                                <div key={index} className="child">
                                    <div class='grid-item'>
                                        <img src={`http://localhost/srad/uploads/${item.img}`}/>
                                    </div>
                                    <div class="grid-item1">
                                        <article class="article">
                                            <strong>{item.title}</strong>
                                            <p class="pr" dangerouslySetInnerHTML={{__html: item.description}}></p>
                                            <p class="pr"> Publicado em: {/*item.created_at.split(" ")[0]*/} </p>
                                            <Link class="a" to={
                                                {
                                                    pathname:'/Ler',
                                                    state:{
                                                        route: '/noticia/show',
                                                        id: item.id
                                                    }
                                                }
                                            }>Ler Mais</Link>
                                        </article>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                        
                    </div>
                    <div className="actions">
                        <button disabled={page === 1} onClick={this.prevPage} >Anterior</button>
                        <button disabled={page === noticiasInfo.pages} onClick={this.nextPage}>Próximo</button>
                    </div>
                    
                </div>
            </Div>
            </>
        );
    }
}
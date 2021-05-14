import React, {useState} from 'react'
import api from '../services/api'
import './Blog.css'
import img1 from './quem-somos-saudebemestar.jpg'
import img2 from './qualidade-de-vida.jpg'
import img3 from './vida-saudavel.jpg'
import Posts from './Posts'
function Blog(){
  const [posts, setPosts] = useState([])
  const [view, setView] = useState("")


  api.get('/informacoes/').then((response) => {
      setPosts(response.data)
  })

  
    

  return(
    <>
     <div className="main-banner sbe">
          <div className="container px-md-0">
              <h1 ><span>Blog de saúde</span></h1>
          </div>
      </div>

      <div className="container px-md-0 main-container">
        <div className="row">
          <div className="col-md-9 col-xs-12">
            {
            posts.map((element, index)=>
              <Posts image = {element.img} key = {index} titulo = {element.titulo} descricao={element.descricao} />
            )
            }
            </div>
          <div className="col-md-3 col-sm-3">
            <div className="sidebar-block">
              <h3 className="side-heading1 top">Mais Recentes</h3>
              <ul className="list-unstyled list-style-r topic">
                
                  <li>
                      <a href="/pt/blog-saude/vida-saudavel/"><img src={img3} alt="/pt/blog-saude/vida-saudavel/" width="54" height="54"/>Vida saudável</a>
                  </li>
                  <li>
                      <a href="/pt/blog-saude/promocao-da-saude/"><img src={img2} alt="/pt/blog-saude/promocao-da-saude/" width="54" height="54"/>Promoção de Saúde</a>
                  </li>
                  <li>
                      <a href="/pt/blog-saude/beleza-e-saude/"><img src={img1} alt="/pt/blog-saude/beleza-e-saude/" width="54" height="54"/>Beleza e saúde</a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Blog;

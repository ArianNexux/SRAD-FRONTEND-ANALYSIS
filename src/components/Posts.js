import React, {useState} from 'react'
import api from '../services/api'
import './Blog.css'
import img1 from './quem-somos-saudebemestar.jpg'
import img2 from './qualidade-de-vida.jpg'
import img3 from './vida-saudavel.jpg'

function Posts({descricao, titulo, image}){
  return(
        <div className="news-post-list">
              <div className="blog-span">
                <article className="news-post">
                  <img src={`http://localhost/srad/uploads/${image}`} width="812" height="490" alt="Qualidade de vida" className="img-responsive img-center-sm img-center-xs w-100 imgcls"/>
                  <div className="inner">
                      <h4>
                          <a href="/pt/blog-saude/qualidade-de-vida/">{titulo}</a>
                      </h4>
                      <p><span>{descricao.substr(0,120)}</span></p>
                      <a href="/pt/blog-saude/qualidade-de-vida/" className="btn btn-secondary">
                          Ler mais
                          <i className="fa fa-arrow-circle-right"></i>
                      </a>
                  </div>
                </article>
              </div>
            </div>
    )
}

export default Posts;

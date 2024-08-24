//import React from 'react'
import './top.css'
import { BsQuestionCircle } from 'react-icons/bs'
import video from '../../../../LoginAssets/video2.mp4'	



const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Bem vindo, ao gerenciador PageTurners!</h1>
          <p>Bem vindo de volta!</p>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Adicione seus Livros</h1>
          <p>Para ter um gerenciamento exemplar de sua coleção!</p>
          <div className="buttons flex">
            <button className="btn" onClick={() => window.location.href = '/books'}>Adicionar agora!</button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
              <h1>Livros</h1>

              <div className="flex">
                <span>
                  Hoje <br /> <small>4 Livros</small>
                </span>
                <span>
                  Esse mês <br /> <small>10 Livros</small>
                </span>
              </div>
            </div>
            
            <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h3>Ajuda</h3>
                <p>Tendo problemas no PageTurners? entre em contato conosco para mais perguntas.</p>
                <button className="btn">Acesse a central de ajuda!</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Top
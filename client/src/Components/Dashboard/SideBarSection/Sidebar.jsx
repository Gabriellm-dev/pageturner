//import React from 'react';
import './sidebar.css';

import { IoMdSpeedometer } from 'react-icons/io';
import { MdOutlinePermContactCalendar, MdOutlineExplore } from 'react-icons/md';
import { BsQuestionCircle } from 'react-icons/bs';
import { BiLogOutCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <h2>PageTurners</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">MENU</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="/dashboard" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dashboard</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/books" className="menuLink flex"> 
              <MdOutlineExplore className="icon" />
               <span className="smallText">Meus Livros</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="/contato" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contact</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/" className="menuLink flex">
              <BiLogOutCircle className="icon" />
              <span className="smallText">Log Out</span>
            </Link>
          </li>
        </ul>
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
  );
};

export default Sidebar;

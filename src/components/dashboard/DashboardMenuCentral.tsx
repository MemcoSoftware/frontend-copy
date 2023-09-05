import React from 'react';

import './styles/DashboardMenuCentral.css';
import LogZiriuz from './Images/ziriuzDashboardLogo.png';
import Sedes from './Images/Sedes.png';
import Usuarios from './Images/Usuario.png';
import Empresas from './Images/Empresas.png';
import Escudo from './Images/Escudo.png';


const DashboardMenuCentral = () => {
  return (
     
    <div className='DashboardMenuCentral'>
            <section className="DashboardMenuCentral-LogoPrincipal">
                <div className="DashboardMenuCentral-logo">
                        <a className="DashboardMenuCentral-a" href="">
                            <img src={LogZiriuz} alt="" width = "250px" height = "150px" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                </div>
            </section>
            <section className="DashboardMenuCentral-Block">
                    <nav className="DashboardMenuCentral-nav">
                  
                        <ul className="DashboardMenuCentral-nav-ul">
                        <h1> Generales</h1>
                            <button className="DashboardMenuCentral-button">
                            <li>
                                <div className="DashboardMenuCentral-nav-icon">
                                <i className='DashboardMenuCentral-nav-icon-i'>
                                     <img src={Usuarios} alt="" width="40px" height="30px"/>
                                </i>
                               <p className="DashboardMenuCentral-p">Usuarios</p> 
                                </div>
                            </li>
                            </button>
                            <button className="DashboardMenuCentral-button">
                            <li>
                                <div className="DashboardMenuCentral-nav-icon">
                                    <i className='DashboardMenuCentral-nav-icon-i'> 
                                        <img src={Sedes} alt=""width="40px" height="30px"/>
                                    </i>
                                    <p className="DashboardMenuCentral-p">Sedes</p>
                                </div>
                            </li>
                            </button>
                            <button className="DashboardMenuCentral-button">
                            <li>
                                <div className="DashboardMenuCentral-nav-icon">
                                    <i className='DashboardMenuCentral-nav-icon-i'>
                                         <img src={Empresas} alt="" width="40px" height="30px"/>
                                    </i>
                                    <p className="DashboardMenuCentral-p">  Empresas</p>
                                </div>
                            </li>
                            </button>
                            <button className="DashboardMenuCentral-button">
                            <li>
                                <div className="DashboardMenuCentral-nav-icon">
                                <i className='DashboardMenuCentral-nav-icon-i'>
                                    <img src={Escudo} alt="" width="40px" height="30px"/>
                                </i>
                                <p className="DashboardMenuCentral-p">Permisos </p>  
                                </div>
                            </li>
                            </button>
                        </ul>
            </nav>
            </section>
    </div>
  ); 
};


export default DashboardMenuCentral;
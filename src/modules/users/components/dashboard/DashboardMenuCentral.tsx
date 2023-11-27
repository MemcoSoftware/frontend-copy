import React from 'react';
import './styles/DashboardMenuCentral.css';
import ZiriuzDashboardLogo from './img/ziriuzDashboardLogo.png'
import { useNavigate } from 'react-router-dom';
import DashboardMenuCentralGenerales  from './DashboardMenuCentralGenerales';
import DashboardMenuCentralEquipos from './DashboardMenuCentralEquipos';
const DashboardMenuCentral = () => {
    const navigate = useNavigate();

    return (
       
      <div className='DashboardMenuCentral'>
              <section className="DashboardMenuCentral-LogoPrincipal">
                  <div className="DashboardMenuCentral-logo">
                          <a className="DashboardMenuCentral-a" href="">
                              <img  src={ZiriuzDashboardLogo} alt="" width = "250px" height = "150px" />
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                          </a>
                  </div>
              </section>
              <section className="DashboardMenuCentral-Block">
                    <nav className="DashboardMenuCentral-nav">
                        {/* <div className='menuGenerales'>
                            <DashboardMenuCentralGenerales />
                        </div>
                        <div className='MenuEquipos'>
                            <DashboardMenuCentralEquipos/>
                        </div> */}
                   
                        <div className="wrapper">
                            <div className="acordeon-core">
                                <div className="acordeon">
                                    <input id="acordeon-1" type="checkbox" name="acordeons"/>
                                    <label htmlFor="acordeon-1">Generales</label>
                                        <div className="acordeon-content">
                                            <DashboardMenuCentralGenerales />                     
                                        </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="wrapper">
                            <div className="acordeon-core">
                                <div className="acordeon">
                                    <input id="acordeon-2" type="checkbox" name="acordeons"/>
                                    <label htmlFor="acordeon-2">Equipos</label>
                                        <div className="acordeon-content">
                                        <DashboardMenuCentralEquipos/>                    
                                        </div>
                                </div>
                            </div>
                        </div>
                        
                    </nav>
              </section>
      </div>
    ); 
  };
  
  
  export default DashboardMenuCentral;
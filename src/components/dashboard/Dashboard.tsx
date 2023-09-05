import React from "react";
import "./styles/Dashboard.css"
import DashboardMenuLateral from './DashboardMenulateral';
import DashboardMenuCentral from "./DashboardMenuCentral";
import DashboardGrafica from './DashboardGrafica';
import DashboardCuadroTareas from './DashboardCuadroTareas';

export const Dashboard = () => {
  return (
    <div className="DashboardStyles">
      <section className="MenuLateral">
        <DashboardMenuLateral />
      </section>
      <section className="MenuCentral">
        <DashboardMenuCentral/>
      </section> 
      <div className="DashboardStylesCuadros">
        <section className="CuadroTareas">
          <DashboardCuadroTareas/>
        </section> 
        <section className="Grafica">
          <DashboardGrafica/>
        </section>
      </div>
    
    </div>
  ); 
};

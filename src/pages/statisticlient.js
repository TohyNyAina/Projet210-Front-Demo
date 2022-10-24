import React from "react";
import Graphbarchart from "./Graphbarchart";
import Graphpiechart from "./Graphpiechart";
import './statistic.css';
import Navbarclient from "./navbarclient";


export default function Statisticlient() {
  return (
    <div>
      <Navbarclient />
      <h1>Bonjour! <br /> Bienvenue dans la gestion de formation continue </h1>
      <div className="App">

        <div className="bc" style={{ width: 450, height: 500 }}>
          <h6>Representation en Diagrame en batton <br /> du prix journalier moyen des formations</h6>
          <Graphbarchart />
        </div>

        <div style={{ width: 450 }} class="pc">
          <h6>Representation en Diagrame circulaire <br /> des formations vendus</h6>
          <Graphpiechart />
        </div>
      </div>
      
    </div>
  );
}


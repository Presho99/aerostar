import React from "react";
import "../components/Flights.css";
import plane from '../assets/plane.png'
import WorldMap from "../components/WorldMap";

const Flights: React.FC = () => {
  return (
    <div className="flights">
      <div className="box first">
        <div className="box-text">
          <p>Boeing 747</p>
          <h3>$620</h3>
        </div>
        <img src={plane} className="plane"/>
      </div>
      <div className="box second">
        <div className="box-text">
          <p>Boeing 747</p>
          <h3>$620</h3>
        </div>
        <img src={plane} className="plane"/>
      </div>
      <div className="box third">
        <div className="box-text">
          <p>Total Flights</p>
          <h3>57</h3>
        </div>
        <div className="box-map">
            <WorldMap/>
        </div>
      </div>
    </div>
  );
};

export default Flights;

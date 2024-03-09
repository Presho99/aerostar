import React, { useEffect } from "react";
import '../components/WorldMap.css'
import {ReactComponent as World} from '../assets/map.svg'

const WorldMap: React.FC = () => {
 

  return <div  className="world">
<World style={{height: '100px', width: '100%' }}/>
  </div>;
};

export default WorldMap;

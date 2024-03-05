import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// interface MapCenter {
//     lat: number
//     lng: number
// }

const WorldMap: React.FC = () => {
    const defaultCenter: [number, number] = [0,0]
  return (
    <MapContainer   style={{height: '500px', width: '300px'}}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        
        />
    </MapContainer>
  )
}

export default WorldMap
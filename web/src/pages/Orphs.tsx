import React from 'react';
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import placePicker from '../assets/place-picker.svg';
import '../styles/pages/orphs.css'

const Orphs: React.FC = () => {

    console.log(process.env.REACT_APP_MAPBOX_TOKEN)
  return (
    <div id="page-orphs">
        <aside>
            <header>
                <img src={placePicker} alt="Happy"/>
                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>
            <footer>
                <strong>Florianópolis</strong>
                <span>Santa Catarina</span>
            </footer>

        </aside>
        <Map className="map" center={[-27.5960216,-48.565173]} zoom={14.67} style={{width:'100%', height:'100%'}}>
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
        </Map>

        <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
        </Link>
    </div>
    )
}

export default Orphs;
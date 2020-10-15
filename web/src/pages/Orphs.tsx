import React from 'react';
import {Link} from 'react-router-dom'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'
import placePicker from '../assets/place-picker.svg';
import '../styles/pages/orphs.css'

const mapIcon = Leaflet.icon({
    iconUrl: placePicker,

    iconSize:[58, 68],
    iconAnchor: [29, 68], 

    popupAnchor: [170, 2]
})

const Orphs: React.FC = () => {
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
            <Marker icon={mapIcon} position={[-27.5960216,-48.565173]}>
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
                    Orfanato são josé
                    <Link to='/orphanages/1'>
                    <FiArrowRight size={20} color='#FFF'/>
                    </Link>
                </Popup>
            </Marker>
        </Map>

        <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
        </Link>
    </div>
    )
}

export default Orphs;
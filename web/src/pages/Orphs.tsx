import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphs.css'
import placePicker from '../assets/place-picker.svg';
import mapIcon from '../utils/mapIcon'
import api from '../services/api';

interface Orphanage {
    id: number,
    user: number,
    state: number,
    city: number,
    name: string,
    about: string,
    instructions: string,
    open: string,
    close: string,
    lat: number,
    lon: number,
    open_on_weekends: boolean
  }

const Orphs: React.FC = () => {

  const [orphs, setOrphs] = useState<Orphanage[]>([])

  useEffect(()=> {
        api.get('/api/orphanages/').then(res => {
          setOrphs(res.data)
        })
      }, [])

  const renderOrphs = () => {
      
    return orphs.map(orph => {
        return (
            <Marker key={orph.id} icon={mapIcon} position={[orph.lat , orph.lon]}>
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
                    {orph.name}
                    <Link to={`/orphanages/${orph.id}`}>
                    <FiArrowRight size={20} color='#FFF'/>
                    </Link>
                </Popup>
            </Marker>
        )
    })
  }  
      
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
            {renderOrphs()}
        </Map>

        <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
        </Link>
    </div>
    )
}

export default Orphs;
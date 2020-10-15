import React from 'react';
import {useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../assets/place-picker.svg'
import './Sidebar.css'

const Sidebar: React.FC = () => {

  const {goBack} = useHistory()

  return (
    <aside className="sidebar">
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>

  )
}

export default Sidebar;
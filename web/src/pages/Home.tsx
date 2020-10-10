import React from 'react';
import {Link} from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi';

import '../styles/pages/landing.css'
import logo from '../assets/Logo.svg'
import '../styles/global.css'

const Home: React.FC = () => {
  return (
    <div id="page-landing">

    <div className="content-wrapper">
    <img src={logo} alt="logo" />
    <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
    </main>

    <div className="location">
        <strong>Florianópolis</strong>
        <span>Santa Catarina</span>
    </div>

    <Link to="/orphanages"  className="enter-app"> <FiArrowRight size={32} color="rgba(0, 0, 0, 0.6)" /> </Link>

    </div>

    </div>
  )
}

export default Home;
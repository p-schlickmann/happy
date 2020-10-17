import Leaflet from 'leaflet'

import placePicker from '../assets/place-picker.svg'

export default Leaflet.icon({
    iconUrl: placePicker,

    iconSize:[58, 68],
    iconAnchor: [29, 68], 

    popupAnchor: [170, 2]
})
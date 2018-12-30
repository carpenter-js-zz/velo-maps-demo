import React from 'react';

import MyBikeMapComponent from './map-with-bike-layer';

export function RenderMapComponent(props) {
    return(
            <MyBikeMapComponent 
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDM_ehj1epOAaYbWLgIG2vWT4ErYl-2PJg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
    )
}
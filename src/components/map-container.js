import React from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from 'react-google-maps';

export const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 39.753998, lng: -105.001054 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))


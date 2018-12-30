/* global google */ 
import React from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, BicyclingLayer, Marker, Polyline  } from 'react-google-maps';
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";
import SaveButton from './save-button';
import LoadButton from './load-button';
import ClearButton from './clear-button';

class MyBikeMapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRoute: [],
            savedRoutes: [],
            hardCodedRoute: [
                {lat: 39.753761766463, lng: -104.99863849925396},
                {lat: 39.750396366621935, lng: -104.99413238810894},
                {lat: 39.746601846089845, lng: -104.9990247373521},
                {lat: 39.745967232716154, lng: -104.99799138551589},
                {lat: 39.74309643014503, lng: -105.00193959718581}
            ]
        }
    }
    Data = new google.maps.Data(); // new google Data class
    // componentDidMount() {
    //     // console.log(this.Data);
    //     // let center = this._map.getCenter();
    //     // console.log(center);
    //     // console.log(this._map);
    // }
     
    onPolylineComplete = poly => {
        const polyArray = poly.getPath().getArray();
        let paths = [];
        polyArray.forEach(function(path){
          paths.push({lat: path.lat(), lng: path.lng()});
        });
        console.log(paths);
        this.setState({currentRoute: paths});
        console.log(this.state);
    }

    handleSaveRouteClicked() {
        this.setState({savedRoutes: [ ...this.state.currentRoute]},
        () => console.log(this.state)   
        );  
    }

    hanldeLoadRouteClicked() {
        this.setState({currentRoute: this.state.hardCodedRoute})
    }

    handleClearRouteClicked() {
        this.setState({currentRoute: []})
    }

    render() {
        return (

            <main>
                <GoogleMap
                    ref={(map) => this._map = map} // allows access to google.maps.Map
                    defaultZoom={13}
                    defaultCenter={{ lat: 39.753998, lng: -105.001054 }}
                >
                    <BicyclingLayer autoUpdate />
    
                    {/* <Marker position={{ lat: 39.753998, lng: -105.001054 }} /> */}
                
                    <Polyline 
                        defaultOptions={{
                            strokeColor: `#0000ff`,
                            strokeOpacity: 1,
                            strokeWeight: 5,
                            clickable: true,
                            // editable: true,
                            zIndex: 1,
                        }}   
                        path={this.state.currentRoute}
                    />
    
                    <DrawingManager
                        onPolylineComplete={(e) => {
                            this.onPolylineComplete(e);
                            // google.maps.Polyline.Hb.getPath(e);
                        }}
                        // onOverlayComplete={(e) => {
                        //     google.maps.Polyline.Hb.getPath(e);
                        //     // this.Data.j.__e3_.addFeature(e);
                        //     // console.log(e.overlay.He.geometry.ta);  
                        //     // const encodedPath = e.overlay.He.geometry.ta;
                        //     // const path = google.maps.geometry.encoding.decodePath(encodedPath);
                        //     // console.log(path);
                        //     // console.log(this.Data);
                        //     // callback that adds new overlay coordinits to Data
                        // }} // should call function when any drawing is finished
                        defaultDrawingMode={google.maps.drawing.OverlayType.POLYLINE}
                        defaultOptions={{
                            drawingControl: true,
                            drawingControlOptions: {
                            position: google.maps.ControlPosition.TOP_CENTER,
                            drawingModes: [
                                // google.maps.drawing.OverlayType.CIRCLE,
                                // google.maps.drawing.OverlayType.POLYGON,
                                google.maps.drawing.OverlayType.POLYLINE,
                                // google.maps.drawing.OverlayType.RECTANGLE,
                                google.maps.drawing.OverlayType.MARKER
                            ],
                            },
                            polylineOptions: {
                                strokeColor: `#0000ff`,
                                strokeOpacity: 1,
                                strokeWeight: 5,
                                clickable: true,
                                editable: true,
                                zIndex: 1,
                            },
                        }}
                    />
        
            </GoogleMap>

            <SaveButton 
                name={'Emulate Save'}
                saveRoute={() => this.handleSaveRouteClicked()}
            />

            <LoadButton 
                name={'Emulate Load'}
                loadRoute={() => this.hanldeLoadRouteClicked()}
            />

            <ClearButton 
                name={'Emulate Clear Route'}
                clearRoute={() => this.handleClearRouteClicked()}
            />

            </main>
        )   
    }
    
}

export default withScriptjs(withGoogleMap(MyBikeMapComponent));
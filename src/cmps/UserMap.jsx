import { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class _UserMap extends Component {

    state = {
        center: {
            lat: 32.109333,
            lng: 34.855499
        },
        isInfoWindowOn : false
    }

    componentDidMount () {
               const {latitude,longitude}=this.props.location;
        this.setState({ center: { lat:latitude, lng: longitude } })
    }

    onMarkerClicked=()=>{
        this.setState({isInfoWindowOn: true})
    }

    onInfoWindowClose=()=>{
        this.setState({isInfoWindowOn: false}) 
    }

    render() {
        return (
     <div className="map-container">
            <Map
                google={this.props.google}
                zoom={10}
                initialCenter={this.state.center}
                onClick={this.onMapClicked}
                center={this.state.center}
            >

                <Marker
                    position={this.state.center}
                    name={'Current location'} 
                    onClick={this.onMarkerClicked}
                    />

                <InfoWindow 
                onClose={this.onInfoWindowClose}
                position={this.state.center}
                visible={this.state.isInfoWindowOn}
                >
                    <div>
                        <h1>Hello</h1>
                    </div>
                </InfoWindow>
            </Map>
            </div>
        );
    }
}

export const UserMap = GoogleApiWrapper({
    apiKey: ('AIzaSyAjA_kZdKGFc0tYEbaY_pZ7wz1p4iWskCU')
})(_UserMap)
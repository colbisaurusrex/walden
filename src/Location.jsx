import React, { Component } from 'react';

class Location extends Component {
    constructor(props) {
        super()
        this.state = {
            lat: 'calculating',
            long: 'calculating',
        }
    }

    componentWillMount() {
        const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
        }
        const error = (err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        const success = (pos) => {
            const crd = pos.coords;
            this.setState({ lat: crd.latitude, long: crd.longitude })
        }
        window.navigator.geolocation.getCurrentPosition(success, error, options)
    }

    render() {
        const { lat, long } = this.state
        return (
            <div>
                <div>Latitude: {lat}</div>
                <div>Longitute: {long}</div>
            </div>
        )
    }
}

export default Location
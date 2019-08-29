import React,{ Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart' 
import GoogleMaps from '../components/google_map'

class WeatherList extends Component{
    renderWeather(cityData){
        const name=cityData.city.name
        const temp=cityData.list.map(weather => weather.main.temp)
        const humidity=cityData.list.map(weather => weather.main.humidity)
        const pressure=cityData.list.map(weather => weather.main.pressure)
        const {lon,lat}= cityData.city.coord
        console.log(lat,lon);
        
        return(
            
            <tr key={name}>
                <td> <GoogleMaps lat={lat} lon={lon} /> </td>
                <td>
                    <Chart  data={temp} color="blue" units="K" />
                </td>
                <td>
                    <Chart  data={pressure} color="red" units="hpa" />
                </td>
                <td>
                    <Chart  data={humidity} color="green" units="%" />
                </td>
            </tr>

        )
    }
    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th> City </th>
                        <th> Temperature(K) </th>
                        <th> Pressure(hpa) </th>
                        <th> Humidity(%) </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>

            </table>
        )
    }
}

function mapStateToProps({weather}){
    return{ weather }
}

export default connect(mapStateToProps)(WeatherList)
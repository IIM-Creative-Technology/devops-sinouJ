import React, { Component } from 'react';
import Weather from './components/Weather/Weather'
import Searchbar from './components/Searchbar/Searchbar';
import './_app.scss';
import key from './config/api_key'

class App extends Component {
  
  state = {
    cityName: '',
    weathers: false,
  }

  handleSearch = e => {
    this.setState({
      cityName: e.target.value
    })
  }

  searchCity = async () => {

    const {cityName} = this.state

    const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&lang=fr&units=metric`)
    const weathers = await req.json()

    this.setState({
      weathers
    })
  }
  
  render() {
    const {cityName, weathers} = this.state

    return(
      <div>
        <Searchbar
          handleSearch={this.handleSearch}
          cityName={cityName}
          searchCity={this.searchCity}
        />
        {
          weathers === false ? '' : 
          <Weather 
            city={weathers.name} 
            country={weathers.sys.country}
            temp={weathers.main.temp}
            description={weathers.weather[0].description}
            wind={weathers.wind.speed}
            humidity={weathers.main.humidity}
          />
        }
      </div>
    )
  }
}

export default App;

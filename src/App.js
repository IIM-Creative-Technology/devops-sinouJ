import React, { Component } from 'react';
import Weather from './components/Weather/Weather'
import Searchbar from './components/Searchbar/Searchbar';
import Day from './components/Day/Day';
import './_app.scss';
import key from './config/api_key'

class App extends Component {
  
  state = {
    cityName: '',
    weathers: false,
    forecasts: false
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

    // const req2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.weathers.coord.lat}&lon=${this.state.weathers.coord.lon}&exclude=current,minutely,hourly&appid=c5698bb001c73d6085d451bb2a1d8de3&lang=fr&units=metric`)
    // const forecasts = await req2.json()

    // const treatement = forecasts.daily.slice(1,6)
    
    // this.setState({
    //   forecasts: treatement
    // })
  }
  
  render() {
    const {cityName, weathers, forecasts} = this.state

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
        <section className="day">
          {
            forecasts === false ? '' : forecasts.map( day =>
              <Day 
                key={Math.random()}
                date={day.dt}
                tempMax={day.temp.max}
                tempMin={day.temp.min}
              />
            )
          }
        </section>
      </div>
    )
  }
}

export default App;

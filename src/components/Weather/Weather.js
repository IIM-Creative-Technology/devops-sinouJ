import React from 'react'
import CityInfo from '../CityInfo/CityInfo'

const Weather = ({city, country, temp, date, description, wind, humidity}) => {

    return(
        <div>
            <h1>{city}, {country}</h1>
            <CityInfo 
                temp={temp}
                date={date}
                description={description}
                wind={wind}
                humidity={humidity}
            />
        </div>
    )
}

export default Weather
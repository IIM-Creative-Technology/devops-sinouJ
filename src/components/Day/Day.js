import React from 'react'
import './_day.scss'

const Day = ({day, tempMax, tempMin}) => {
    return(
        <article className="dailyWeather">
            <p>{day}</p>
            <p className="tempMax">{tempMax}°C</p>
            <p className="tempMin">{tempMin}°C</p>
        </article>
    )
}

export default Day
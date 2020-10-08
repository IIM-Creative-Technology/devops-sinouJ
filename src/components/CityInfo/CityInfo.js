import React from 'react'
import './_cityinfo.scss'

const CityInfo = ({temp, date, description, wind, humidity}) => {
    return(
        <section className="cityInfo">
            <article>
                <p className="temperature">{temp}°C</p>
            </article>
            <article>
                <p>{date}</p>
                <p className="description">{description}</p>
            </article>
            <article>
                <p>Vent: {wind}mph</p>
                <p>Humidité: {humidity}%</p>
            </article>
        </section>
    )
}

export default CityInfo
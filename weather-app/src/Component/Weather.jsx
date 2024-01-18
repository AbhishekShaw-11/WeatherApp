import React, { useEffect, useState } from 'react'
import { FaStreetView } from "react-icons/fa";
//import './App.css';
const Weather = () => {
    const [location, setLocation] = useState(null);
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=704e17eb03599e4b4d1413c267bd70e9`
            const res = await fetch(url)
            const resJson = await res.json();
            //console.log(resJson)
            setLocation(resJson.main)
        }
        fetchApi()
    }, [search])

    return (
        <React.Fragment>
            <div className='Main'>
                <div className='Main-data'>
                    <input type='search' placeholder="type your place" onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                        value={search} />
                </div>

                {!location ? (
                    <p>No Data Found</p>
                ) : (
                    <div>
                        <div className='Information'>
                            <h1 className='locat'>
                                <FaStreetView /> {search}
                            </h1>
                            <h2 className='celius'>
                               Current: {location.temp}°C
                            </h2>

                            <h3 className='max-min'>
                               MIN: {location.temp_min}°C| MAX: {location.temp_max}°C
                            </h3>
                        </div>
                    </div>
                )}


            </div>
        </React.Fragment>
    )
}

export default Weather

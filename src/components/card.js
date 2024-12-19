import React from "react";
import locationIcon from "../images/location_tag.png";
export default function Card(prop){
    return(
        <div className="card">
            <div>
                <img className="journal-photo" src = {prop.imageUrl}></img>
            </div>
            <div className="card-sub">
                <div className="location">
                    <div className="crop">
                        <img className="location-icon" src= {locationIcon}></img>
                    </div>
                    <p className="location-name">{prop.location}</p>
                    <a className = "maps-url" href={prop.googleMapsUrl}>View on Google maps</a>
                </div>
                <div>
                    <h1 className="location-title">{prop.title}</h1>
                    <p className="date">{prop.startDate} - {prop.endDate}</p>
                    <p className="description">{prop.description}</p>
                </div>
            </div>
            
            
        </div>
    )
}
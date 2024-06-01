import React from 'react'
import './City.css'
export const City = ({name, population, area,  district, imageUrl}) => {
      return (
            <div className="city-container">
            <div className="city">{name}</div>
            <div className="population">Population: {population}</div>
            <div className="area">Area: {area}</div>
            <div className="district">District: {district}</div>
            <img src={imageUrl} alt={`${name} photo`} className="city-image" />
          </div>
      );
      }
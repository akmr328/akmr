import React from 'react';
import {hero_img} from '../components/layout.module.css'
import {coastline} from '../images/coastline.jpeg'


const Hero = () => {
  return (
    <main id="hero">
      <img src={coastline} alt="coastline" className={hero_img}>
      <h1>Annie Rash</h1>
      </img>
    </main>
  )
}

export default Hero
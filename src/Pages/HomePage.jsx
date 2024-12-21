import React from 'react'

import ComponentimagePlusText from '../Components/ComponentimagePlusText';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Iconscompenent from '../Components/Iconscompenent';
import Textzwin from '../Components/Textzwin';
import TopNavigation from '../Components/TopNavigation';
import Twin from '../Components/Twin';
import Type from '../Components/Type';



const HomePage = () => {
  return (
    <div>
      
      <TopNavigation />
      <Hero/>
      <Type/>
      <Iconscompenent/>
      <ComponentimagePlusText/>
      <Textzwin/>
      <Twin/>
      <Footer/>
  

    </div>
  )
}

export default HomePage

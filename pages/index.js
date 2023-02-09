import Image from 'next/image'
import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes';
import Hero from '../components/UI/Hero';
import {Fragment} from 'react';
import Services from '../components/UI/Experience';
import About from '../components/UI/About';
import Portfolio from '../components/UI/Portfolio';

export default function Home() {


  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
      <Portfolio />
    </Fragment>
  )
      
}




import React from 'react'
import { BuildCommunity } from './components/BuildCommunity';
import { ContentInfo } from './components/ContentInfo';
import { Hero } from './components/Hero';
import { MenuComponent } from './components/MenuComponent';


import './styles/main-styles.css';
import './styles/buttons-styles/GetStarterForFree-style.css';
import { Footer } from './components/Footer';
export const Huddle = () => {
  return (
    <>
      <MenuComponent />
      <Hero />
      <ContentInfo />
      <Footer />
      <BuildCommunity />
    </>
  )
}

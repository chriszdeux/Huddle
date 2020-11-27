import React from 'react'
import { ContentInfo } from './components/ContentInfo';
import { Hero } from './components/Hero';
import { MenuComponent } from './components/MenuComponent';
import './styles/main-styles.css';
export const Huddle = () => {
  return (
    <>
      <MenuComponent />
      <Hero />
      <ContentInfo />
    </>
  )
}

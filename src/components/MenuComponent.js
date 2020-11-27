import React from 'react'

import '../styles/styles-components/MenuComponent-style.css'

import huddleLogo from '../utils/images/logo.svg'
export const MenuComponent = () => {
  return (
    <>
      <header>
        
        <nav className="menu">
          <figure className="huddle--logo">
            <img src={ huddleLogo } alt="" />
          </figure>
          <button className="try--free">Try it Free</button>
        </nav>
        
      </header>
    </>
  )
}

import React from 'react'
import { GetStarterForFree } from './buttons/GetStarterForFree'

import '../styles/styles-components/Hero-style.css'

import heroImage from '../utils/images/illustration-mockups.svg'
export const Hero = () => {
  return (
    <>
      <main className="main--container">
        <div className='hero--content'>
          <h2>build the community your fans will love</h2>
          <p>
            Huddle re-imagines the way we build communities. You have a choice, but so your audience. Create connections with your users as you engage in genuine discussion
          </p>
          < GetStarterForFree />
        </div>

        <figure className="hero--img">
          <img src={ heroImage } alt="" />
        </figure>
      </main>
    </>
  )
}

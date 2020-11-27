import React from 'react';

import '../styles/styles-components/ContentInfo-style.css';
import growTogether from '../utils/images/illustration-grow-together.svg';
export const ContentInfo = () => {
  return (
    <>
      <section className="content">
        <figure className="content--image">
          {/* <img src={ growTogether } alt="" /> */}
        </figure>
        <article className="content--info">
          <h3>grow together</h3>
          <p>
            Generate meaningful discussions with yout audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form
          </p>
        </article>
      </section>
    </>
  )
}

import React, { useEffect, useState } from 'react';

import '../styles/styles-components/ContentInfo-style.css';
import growTogether from '../utils/images/illustration-grow-together.svg';
import flowingConversations from '../utils/images/illustration-flowing-conversation.svg';
import yourUsers from '../utils/images/illustration-your-users.svg';

import { dataBase } from '../data/ContentInfo-data';

export const ContentInfo = (  ) => {
  // const { id, title, img, content } = dataBase;
  // debugger

  const changePosition = 'content content--inverse';
  const normalPosition = 'content'
  return (
    <>
      {
        dataBase.map( item => {
          const { id, title, img, content } = item;
          
          let newSet = '';
          if (id%2==0) {
            newSet = normalPosition;
            // debugger
          } else {
            newSet = changePosition;
          }

          return (
            <>
            <section className={newSet }>
              
              <figure className="content--image" >
                <img src={ img } alt={ title } />
      
              </figure>
              <article className="content--info">
                  <h3>{ title }</h3>
                <p>
                  { content }
                </p>
              </article>
            </section>
          </>
          )
        })
      }
    </>
  )
  // return (
  //   <>
  //     <section className="content">
  //       <figure className="content--image">
  //         <img src={ dataBase[0].img } alt="" />
      
  //       </figure>
  //       <article className="content--info">
  //         <h3>grow together</h3>
  //         <p>
  //           Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form
  //         </p>
  //       </article>
  //     </section>

  //     {/* <section className="content content--inverse">
  //       <figure className="content--image">
  //         <img src={ flowingConversations } alt="" />
  //       </figure>
  //       <article className="content--info">
  //         <h3>flowing conversations</h3>
  //         <p>
  //           You wouldn't paginate a conversation in a real life, so why do it online? Our threads have just-in-time loading for a more natural flow.
  //         </p>
  //       </article>
  //     </section> */}

      
  //   </>
  // )
  
}

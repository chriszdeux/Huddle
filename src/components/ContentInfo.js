import React from 'react';

import '../styles/styles-components/ContentInfo-style.css';
import growTogether from '../utils/images/illustration-grow-together.svg';
import flowingConversations from '../utils/images/illustration-flowing-conversation.svg';
import yourUsers from '../utils/images/illustration-your-users.svg';


export const ContentInfo = () => {
  return (
    <>
      <section className="content">
        <figure className="content--image">
          <img src={ growTogether } alt="" />
        </figure>
        <article className="content--info">
          <h3>grow together</h3>
          <p>
            Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form
          </p>
        </article>
      </section>

      <section className="content content--inverse">
        <figure className="content--image">
          <img src={ flowingConversations } alt="" />
        </figure>
        <article className="content--info">
          <h3>flowing conversations</h3>
          <p>
            You wouldn't paginate a conversation in a real life, so why do it online? Our threads have just-in-time loading for a more natural flow.
          </p>
        </article>
      </section>

      <section className="content">
        <figure className="content--image">
          <img src={ yourUsers } alt="" />
        </figure>
        <article className="content--info">
          <h3>your users</h3>
          <p>
            It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in ot your app, your users can start chatting immediately.
          </p>
        </article>
      </section>
    </>
  )
}

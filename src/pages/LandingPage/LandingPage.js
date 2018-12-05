import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';
import Nav from '@components/Nav';

import './style.scss';

const LandingPage = (_, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <div className="intro-wrapper">
          <div className="intro-name">Dualog is looking for summer interns!</div>
          <div className="tagline">
            <br />
            <p><b>Who are you?</b></p>
            <p>A student with a passion for software development.</p>
            <br />
            <br />
            <p><b>Who are we?</b></p>
            <p>A global company that delivers software to the maritime industry.</p>
            <br />
            <br />
            <p><b>What we want you for?</b></p>
            <p>Develop software that is useful for our customers.</p>
            <br />
            <br />
            <b><a href="mailto:fredrik@dualog.com?subject=Dualog%20Summer%20internship%20-%20YOUR_NAME"> APPLY NOW! </a></b>
            <br />
            (Deadline January 20)
            <br />
            <br />
            <br />
            <h2>June 15 - August 15</h2>
          </div>
          <SocialIcons />
        </div>
      </main>
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;

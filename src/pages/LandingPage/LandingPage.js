import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';
import Nav from '@components/Nav';

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <div className="intro-wrapper">
          <div className="intro-name">Dualog is looking for summer interns!</div>
          <div className="tagline">
          <p><b>Who are you?</b></p>
          <p>An IT student with a passion for developing software.</p>
          <br />
          <p><b> Who are we?</b></p>
          <p>A global company that delivers software to the maritime industry.</p>
          <br />
          <p><b> What we want you for?</b></p>
          <p>Arrange a hackathon, then develop an idea based on it.</p>
          <br />
            <b><a href="mailto:fredrik@dualog.com?subject=Dualog%20Summer%20internship%202018%20-%20YOUR_NAME"> APPLY NOW! </a></b>
          <br />
          <p> June 15 - August 15 </p>
          <br />
          (Deadline end of 15th of May)
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

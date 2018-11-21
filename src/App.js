import React, { Component } from 'react';
import LandingPage from '@pages/LandingPage';
import ParallaxBackground from '@components/ParallaxBackground';
import ThemeSwitcher from '@components/ThemeSwitcher';

class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
        <ThemeSwitcher>
          <ParallaxBackground />
          <LandingPage />
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;

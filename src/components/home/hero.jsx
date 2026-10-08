import React from 'react';
import Button from '../ui/Button.jsx';

function Hero() {
  return (
    <section className="home-hero">
      <div className="container home-hero-content">
        <div className="home-hero-text">
          <span className="home-hero-badge">
            Hausa Lyrics & Creators Community
          </span>

          <h1 className="home-hero-title">
            AREWA LYRICS HUB
          </h1>

          <p className="home-hero-description">
            Discover Hausa lyrics, connect with creators,
            support artists, join challenges, and grow
            together in the Arewa creative community.
          </p>

          <div className="home-hero-actions">
            <Button
              variant="primary"
              size="large"
              onClick={() => {
                window.location.href = '/AREWA-LYRICS-HUB/explore';
              }}
            >
              Explore Lyrics
            </Button>

            <Button
              variant="secondary"
              size="large"
              onClick={() => {
                window.location.href = '/AREWA-LYRICS-HUB/register';
              }}
            >
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

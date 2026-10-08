import React from 'react';

function TrendingLyrics() {
  const lyrics = [
    {
      title: 'Trending Hausa Song',
      artist: 'Artist Name',
      views: '12K views',
    },
    {
      title: 'Sabuwar Wakar Arewa',
      artist: 'Artist Name',
      views: '8.5K views',
    },
    {
      title: 'Latest Hausa Lyrics',
      artist: 'Artist Name',
      views: '6.2K views',
    },
  ];

  return (
    <section className="home-trending">
      <div className="container">
        <div className="home-section-header">
          <div>
            <span className="home-section-eyebrow">
              Trending Now
            </span>

            <h2 className="home-section-title">
              Trending Lyrics
            </h2>
          </div>

          <a
            href="/AREWA-LYRICS-HUB/explore"
            className="home-section-link"
          >
            View All
          </a>
        </div>

        <div className="home-trending-grid">
          {lyrics.map((lyric) => (
            <article
              className="home-trending-card"
              key={lyric.title}
            >
              <div className="home-trending-image">
                <span>Lyrics</span>
              </div>

              <div className="home-trending-content">
                <h3>{lyric.title}</h3>

                <p>{lyric.artist}</p>

                <span className="home-trending-views">
                  {lyric.views}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingLyrics;

import React from 'react';

function FeaturedArtists() {
  const artists = [
    {
      name: 'Artist Name',
      genre: 'Hausa Music',
      releases: '12 Releases',
    },
    {
      name: 'Artist Name',
      genre: 'Arewa Music',
      releases: '8 Releases',
    },
    {
      name: 'Artist Name',
      genre: 'Afro Hausa',
      releases: '15 Releases',
    },
    {
      name: 'Artist Name',
      genre: 'Hausa Pop',
      releases: '10 Releases',
    },
  ];

  return (
    <section className="home-featured-artists">
      <div className="container">
        <div className="home-section-header">
          <div>
            <span className="home-section-eyebrow">
              Music Community
            </span>

            <h2 className="home-section-title">
              Featured Artists
            </h2>
          </div>

          <a
            href="/AREWA-LYRICS-HUB/artists"
            className="home-section-link"
          >
            View All
          </a>
        </div>

        <div className="home-artists-grid">
          {artists.map((artist) => (
            <article
              className="home-artist-card"
              key={artist.name + artist.genre}
            >
              <div className="home-artist-cover">
                <span>Artist</span>
              </div>

              <div className="home-artist-info">
                <h3>{artist.name}</h3>

                <p>{artist.genre}</p>

                <span className="home-artist-releases">
                  {artist.releases}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedArtists;

import React from 'react';

function FeaturedCreators() {
  const creators = [
    {
      name: 'Creator Name',
      username: '@creator',
      type: 'Lyrics Creator',
    },
    {
      name: 'Creator Name',
      username: '@creator',
      type: 'Video Editor',
    },
    {
      name: 'Creator Name',
      username: '@creator',
      type: 'Graphics Designer',
    },
    {
      name: 'Creator Name',
      username: '@creator',
      type: 'Content Creator',
    },
  ];

  return (
    <section className="home-featured-creators">
      <div className="container">
        <div className="home-section-header">
          <div>
            <span className="home-section-eyebrow">
              Community
            </span>

            <h2 className="home-section-title">
              Featured Creators
            </h2>
          </div>

          <a
            href="/AREWA-LYRICS-HUB/creators"
            className="home-section-link"
          >
            View All
          </a>
        </div>

        <div className="home-creators-grid">
          {creators.map((creator) => (
            <article
              className="home-creator-card"
              key={creator.username}
            >
              <div className="home-creator-avatar">
                <span>
                  {creator.name.charAt(0)}
                </span>
              </div>

              <div className="home-creator-info">
                <h3>{creator.name}</h3>

                <p>{creator.username}</p>

                <span className="home-creator-type">
                  {creator.type}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCreators;

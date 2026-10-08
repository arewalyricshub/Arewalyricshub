import React from 'react';

function Stats() {
  const stats = [
    {
      value: '1K+',
      label: 'Lyrics',
    },
    {
      value: '500+',
      label: 'Creators',
    },
    {
      value: '100+',
      label: 'Artists',
    },
    {
      value: '50+',
      label: 'Challenges',
    },
  ];

  return (
    <section className="home-stats">
      <div className="container home-stats-grid">
        {stats.map((stat) => (
          <div className="home-stat-card" key={stat.label}>
            <strong className="home-stat-value">
              {stat.value}
            </strong>

            <span className="home-stat-label">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;

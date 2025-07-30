import React from 'react';

export default function StylesShowcase() {
  const styles = ['Modern', 'Scandinavian', 'Loft', 'Classic', 'Luxury'];

  return (
    <section style={{ backgroundColor: '#f5f5f5' }}>
      <h2>50+ Professional Design Styles</h2>
      <div className="grid">
        {styles.map((style, index) => (
          <div className="card" key={index}>
            <h3>{style}</h3>
            <p>Elegant interiors using {style} style.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

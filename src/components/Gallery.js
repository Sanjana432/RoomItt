import React from 'react';

export default function Gallery() {
  return (
    <section>
      <h2>See the Transformation</h2>
      <p>Real examples of how AI enhances design concepts</p>
      <div className="grid">
        <div className="card">
          <h3>Modern Living Room</h3>
          <button className="btn-primary">Create Similar</button>
        </div>
        <div className="card">
          <h3>Scandinavian Bedroom</h3>
          <button className="btn-primary">Create Similar</button>
        </div>
      </div>
    </section>
  );
}

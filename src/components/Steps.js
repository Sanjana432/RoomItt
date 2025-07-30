import React from 'react';

export default function Steps() {
  const steps = [
    {
      title: 'Describe Your Vision',
      text: 'Type your requirements in natural language or upload a reference.',
    },
    {
      title: 'Choose Design Style',
      text: 'Pick from 50+ curated design styles to match your space.',
    },
    {
      title: 'AI Creates Magic',
      text: 'Our AI generates professional-grade visuals in seconds.',
    },
    {
      title: 'Refine & Perfect',
      text: 'Download or fine-tune your high-quality renders.',
    },
  ];

  return (
    <section>
      <h2>
        From Idea to Design in <span style={{ color: '#a651ff' }}>4 Simple Steps</span>
      </h2>
      <div className="grid">
        {steps.map((step, index) => (
          <div className="card" key={index}>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

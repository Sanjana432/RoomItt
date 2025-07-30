import React from "react";

const App = () => {
  return (
    <div className="app">
      <header>
        <div className="logo">RoomItt</div>
        <nav>
          <a href="#problem">Problem</a>
          <a href="#challenge">Challenge</a>
          <a href="#features">Features</a>
          <a href="#upload">Upload</a>
          <a href="#suggestions">Suggestions</a>
          <a href="#products">Products</a>
          <button className="login-btn">Login / Signup</button>
        </nav>
      </header>

      <section className="hero">
        <h1>Design Your Space with AI</h1>
        <p>Transform your room into a reflection of you — fast, easy, and beautiful.</p>
      </section>

      <section id="problem">
        <h2>Problem Statement</h2>
        <p>
          People often struggle to decorate rooms in a cohesive style that reflects their vibe.
          They spend hours on Pinterest, get overwhelmed, and overspend. There’s no single tool
          that captures their aesthetic, gives budget-friendly recommendations, and shows how it
          would really look in their space.
        </p>
      </section>

      <section id="challenge" className="highlight">
        <h2>Our Challenge</h2>
        <p>
          Our app analyzes your mood and room to help you design your space using AI, style prompts, and AR.
          Upload images, pick a vibe, and get instant style suggestions and products that suit you.
        </p>
      </section>

      <section id="features">
        <h2>Features</h2>
        <ul>
          <li><strong>🖼️ Room Scan:</strong> Upload or snap room photos</li>
          <li><strong>🎯 Vibe Selection:</strong> Choose moods like Cozy, Futuristic, or Zen</li>
          <li><strong>🧠 AI Suggestions:</strong> Smart spatial tips like “Add a lamp near bed”</li>
          <li><strong>🛒 Product Picks:</strong> Curated decor & furniture from top sites</li>
          <li><strong>📱 AR Preview:</strong> See items live in your room before you buy</li>
        </ul>
      </section>

      <section id="upload" className="image-upload">
        <h2>Upload Your Room</h2>
        <p>Send us photos of your room and desk setup — we'll analyze and guide you.</p>
        <div className="upload-box">[ White Box Placeholder for Image Upload ]</div>
      </section>

      <section id="suggestions">
        <h2>AI Suggestions</h2>
        <p>Your room, reimagined — here’s how we’d redesign it based on your mood!</p>
        <div className="placeholder-box">[ AI Suggestion Preview Image ]</div>
      </section>

      <section id="products" className="highlight">
        <h2>Recommended Products</h2>
        <p>Tailored to your vibe, budget, and room layout:</p>
        <div className="product-list">
          <div className="product-card">[ Art / Lamp Placeholder ]</div>
          <div className="product-card">[ Plant / Chair Placeholder ]</div>
          <div className="product-card">[ Rug / Mirror Placeholder ]</div>
        </div>
      </section>

      <footer>
        <p>RoomItt © 2025 | All rights reserved</p>
      </footer>
    </div>
  );
};

export default App;






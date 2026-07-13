"use client";
import Link from "next/link";
import { Footer, Header, Reveal } from "./components/SiteChrome";

export default function Home() {
  return <main><Header />
    <section className="hero"><div className="hero-glow" />
      <div className="container hero-grid">
        <Reveal className="hero-copy"><h1>One clear path from model to reality.</h1><p>Upload an existing 3D file or generate one with AI. Refine it in Studio, then publish a fast web viewer and app-free AR experience.</p><div className="hero-actions"><a className="primary-btn" href="#start">Create your first model <span>→</span></a><Link className="text-btn" href="/studio">Explore Studio <span>↗</span></Link></div></Reveal>
        <div className="viewer-drift"><Reveal className="viewer-hero" delay={120}><img src="/hero-3d-maker-world.png" alt="3D printer transforming a physical prototype into a digital 3D and AR experience" /></Reveal></div>
      </div>
    </section>

    <section className="section container create-section story-section" id="start">
      <Reveal className="story-copy"><span className="section-tag">01 — CREATE</span><h2>Bring the model.<br />We prepare the rest.</h2><p>Start with the 3D asset you already have. ARVision optimises geometry, preserves materials and turns it into a fast, dependable web-ready model.</p><div className="story-links"><Link className="primary-btn" href="/studio">Open Studio <span>→</span></Link><Link className="text-btn" href="/workflow">See the workflow <span>↗</span></Link></div></Reveal>
      <Reveal className="story-visual story-upload" delay={100}><img src="/home-upload-3d.png" alt="A 3D model being prepared for upload into ARVision" /></Reveal>
    </section>

    <section className="flow-section ar-story"><div className="container story-section">
      <Reveal className="story-copy"><span className="section-tag">02 — EXPERIENCE</span><h2>Place it in the world.<br />No app required.</h2><p>Publish one model to a responsive web viewer and app-free mobile AR. Scale, materials and product identity stay consistent from the browser to the room.</p><div className="story-links"><Link className="primary-btn" href="/features">Explore AR features <span>→</span></Link><Link className="text-btn" href="/workflow">How publishing works <span>↗</span></Link></div></Reveal>
      <Reveal className="story-visual story-ar" delay={100}><img src="/home-mobile-ar.png" alt="A 3D chair placed through a mobile augmented reality experience" /></Reveal>
    </div></section>

    <section className="section container outcome"><Reveal><span className="section-tag">03 — PUBLISH</span><h2>Built once.<br /><span>Ready wherever people discover it.</span></h2></Reveal><div className="outcome-copy"><p>Keep materials, scale and product identity consistent from the browser to a real-space AR placement. ARVision creates the delivery formats while you stay focused on the experience.</p><div className="outcome-points"><span><b>Web viewer</b> Fast, responsive and easy to embed.</span><span><b>Mobile AR</b> App-free placement on iOS and Android.</span><span><b>Managed links</b> Share updates without changing the URL.</span></div><Link href="/features" className="primary-btn">Explore all capabilities <span>→</span></Link></div></section>

    <section className="cta"><div className="container"><Reveal><span className="status-label dark"><i /> Ready when you are</span><h2>Give your next 3D model<br />a life beyond the file.</h2><p>Publish your first interactive model for free.</p><a href="#start" className="light-btn">Start creating →</a></Reveal></div></section><Footer />
  </main>;
}

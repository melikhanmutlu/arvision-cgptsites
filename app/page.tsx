"use client";
import { useState } from "react";
import Link from "next/link";
import { Footer, Header, Reveal } from "./components/SiteChrome";

const workflow = [
  { n: "01", title: "Upload", tag: "Bring your model", icon: "↑", heading: "Start with the asset you already have.", text: "Bring in GLB, STL, OBJ, FBX, STEP or ZIP. ARVision checks the file, preserves the important detail and prepares it for fast, reliable loading." },
  { n: "02", title: "Refine", tag: "Polish in Studio", icon: "◇", heading: "Make the model feel right everywhere.", text: "Tune materials, lighting, scale and camera views in one focused workspace. Every change stays attached to the same model." },
  { n: "03", title: "Publish", tag: "Share web + AR", icon: "↗", heading: "Ship one model to every surface.", text: "Create a browser viewer, mobile AR experience, QR code or embed without rebuilding the asset for each destination." },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  return <main><Header />
    <section className="hero"><div className="hero-glow" />
      <div className="container hero-grid">
        <Reveal className="hero-copy"><h1>One clear path from model to reality.</h1><p>Upload an existing 3D file or generate one with AI. Refine it in Studio, then publish a fast web viewer and app-free AR experience.</p><div className="hero-actions"><a className="primary-btn" href="#start">Create your first model <span>→</span></a><Link className="text-btn" href="/studio">Explore Studio <span>↗</span></Link></div></Reveal>
        <div className="viewer-drift"><Reveal className="viewer-hero" delay={120}><img src="/hero-3d-maker-world.png" alt="3D printer transforming a physical prototype into a digital 3D and AR experience" /></Reveal></div>
      </div>
    </section>

    <section className="flow-section workflow-section"><div className="container">
      <Reveal className="workflow-heading"><h2>Three steps. One continuous workspace.</h2><p>Move from source file to an interactive experience without handing the model between disconnected tools.</p></Reveal>
      <Reveal className="workflow-tabs" delay={80}>{workflow.map((step, i) => <button key={step.n} className={activeStep === i ? "active" : ""} onClick={() => setActiveStep(i)} role="tab" aria-selected={activeStep === i}><span>{step.n}</span><b>{step.title}</b><small>{step.tag}</small></button>)}</Reveal>
      <Reveal className="workflow-detail" delay={120}><div className="workflow-icon" aria-hidden="true"><i /><span>{workflow[activeStep].icon}</span></div><div className="workflow-copy" role="tabpanel"><span className="detail-index">{workflow[activeStep].n}</span><h3>{workflow[activeStep].heading}</h3><p>{workflow[activeStep].text}</p><Link href="/workflow">See the complete workflow <span>→</span></Link></div></Reveal>
    </div></section>

    <section className="section container create-section story-section" id="start">
      <Reveal className="story-copy"><h2>Bring the model.<br />We prepare the rest.</h2><p>Start with the 3D asset you already have. ARVision optimises geometry, preserves materials and turns it into a fast, dependable web-ready model.</p><div className="story-links"><Link className="primary-btn" href="/studio">Open Studio <span>→</span></Link><Link className="text-btn" href="/workflow">See the workflow <span>↗</span></Link></div></Reveal>
      <Reveal className="story-visual story-viewer" delay={100}><div className="browser-shot"><div className="browser-bar"><i aria-hidden="true" /><span>arvision.app/viewer</span></div><img src="/home-viewer-workspace.png" alt="ARVision viewer showing a purple 3D model and editing tools" /></div></Reveal>
    </section>

    <section className="section container outcome"><Reveal><h2>Built once.<br /><span>Ready wherever people discover it.</span></h2></Reveal><div className="outcome-copy"><p>Keep materials, scale and product identity consistent from the browser to a real-space AR placement. ARVision creates the delivery formats while you stay focused on the experience.</p><div className="outcome-points"><span><b>Web viewer</b> Fast, responsive and easy to embed.</span><span><b>Mobile AR</b> App-free placement on iOS and Android.</span><span><b>Managed links</b> Share updates without changing the URL.</span></div><Link href="/features" className="primary-btn">Explore all capabilities <span>→</span></Link></div></section>

    <section className="cta"><div className="container"><Reveal><h2>Give your next 3D model<br />a life beyond the file.</h2><p>Publish your first interactive model for free.</p><a href="#start" className="light-btn">Start creating →</a></Reveal></div></section><Footer />
  </main>;
}

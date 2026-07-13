"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Footer, Header, Reveal } from "./components/SiteChrome";

const flow = [
  { n: "01", title: "Upload", tag: "Bring your model", heading: "Start with the asset you already have.", text: "Drop in GLB, STL, OBJ, FBX, STEP or ZIP. ARVision checks the file, preserves the important detail and prepares it for the web." },
  { n: "02", title: "Refine", tag: "Polish in Studio", heading: "Make the model feel right everywhere.", text: "Tune materials, lighting, scale and camera views in one focused workspace. Every change stays attached to the same asset." },
  { n: "03", title: "Publish", tag: "Share web + AR", heading: "Ship one model to every surface.", text: "Create a browser viewer, mobile AR experience, QR code or embed without rebuilding the asset for each destination." },
];

export default function Home() {
  const [mode, setMode] = useState<"upload" | "ai">("upload");
  const [file, setFile] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  return <main><Header />
    <section className="hero"><div className="hero-glow" />
      <div className="container hero-grid">
        <Reveal className="hero-copy"><span className="status-label"><i /> 3D publishing for web and AR</span><h1>One clear path from<br /><span>model to reality.</span></h1><p>Upload an existing 3D file or generate one with AI. Refine it in Studio, then publish a fast web viewer and app-free AR experience.</p><div className="hero-actions"><a className="primary-btn" href="#start">Create your first model <span>→</span></a><Link className="text-btn" href="/studio">Explore Studio <span>↗</span></Link></div><div className="trust-row"><span>Free to start</span><span>GLB + USDZ</span><span>iOS + Android</span></div></Reveal>
        <Reveal className="viewer-hero" delay={120}><img src="/viewer-showcase.png" alt="ARVision Studio viewer with a prepared 3D product model and material controls" /><div className="viewer-caption"><span><i /> Viewer ready</span><b>Web · AR · Embed</b></div></Reveal>
      </div>
    </section>

    <section className="standards container" aria-label="Supported delivery formats"><span>Open, production-ready delivery</span><b>GLB + USDZ</b><b>WebXR</b><b>iOS Quick Look</b><b>Android Scene Viewer</b><b>REST API</b></section>

    <section className="section container" id="start"><Reveal className="section-heading"><div><span className="section-tag">01 — CREATE</span><h2>Choose how your model begins.</h2></div><p>Use a file you already have or describe what you need. Both paths open into the same Studio workflow.</p></Reveal>
      <div className="create-grid"><Reveal className="upload-workspace"><div className="mode-tabs" role="tablist" aria-label="Model creation method"><button className={mode === "upload" ? "selected" : ""} onClick={() => setMode("upload")} role="tab" aria-selected={mode === "upload"}><span>↑</span><b>Upload a file</b><small>Use an existing 3D asset</small></button><button className={mode === "ai" ? "selected" : ""} onClick={() => setMode("ai")} role="tab" aria-selected={mode === "ai"}><span>✦</span><b>Generate with AI</b><small>Start from a text prompt</small></button></div>{mode === "upload" ? <><input hidden ref={input} type="file" accept=".glb,.stl,.obj,.fbx,.step,.zip" onChange={e => setFile(e.target.files?.[0]?.name || "")} /><button className="dropzone" onClick={() => input.current?.click()}><span>↑</span><b>{file || "Drop your 3D model here"}</b><small>GLB, STL, OBJ, FBX, STEP or ZIP · up to 100 MB</small></button><button className="primary-btn wide" disabled={!file}>{file ? "Open in Studio →" : "Choose a file"}</button></> : <><textarea className="prompt-box" placeholder="A compact modular desk lamp in matte black aluminium, soft rounded edges..." /><button className="primary-btn wide">Generate model →</button></>}</Reveal>
        <div className="create-notes">{[["01", "Automatic optimisation", "Geometry and textures are prepared for fast, reliable loading."], ["02", "AR on every phone", "Ready for iOS Quick Look and Android Scene Viewer."], ["03", "One shareable source", "Update the model without replacing every link and embed."]].map(([n, t, d], i) => <Reveal key={n} delay={i * 70}><article><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article></Reveal>)}</div>
      </div>
    </section>

    <section className="flow-section"><div className="container"><Reveal className="section-heading"><div><span className="section-tag">02 — WORKFLOW</span><h2>Three steps. One continuous workspace.</h2></div><p>Move from source file to an interactive experience without handing the model between disconnected tools.</p></Reveal>
      <div className="flow-panel"><div className="flow-tabs" role="tablist" aria-label="ARVision workflow">{flow.map((step, i) => <button key={step.n} className={activeStep === i ? "active" : ""} onClick={() => setActiveStep(i)} role="tab" aria-selected={activeStep === i}><span>{step.n}</span><b>{step.title}</b><small>{step.tag}</small></button>)}</div><div className="flow-detail" role="tabpanel"><div className="flow-visual"><span>{activeStep === 0 ? "↑" : activeStep === 1 ? "◇" : "↗"}</span><i /></div><div><span className="detail-index">0{activeStep + 1}</span><h3>{flow[activeStep].heading}</h3><p>{flow[activeStep].text}</p><Link href="/workflow">See the complete workflow <span>→</span></Link></div></div></div>
    </div></section>

    <section className="section container outcome"><Reveal><span className="section-tag">03 — PUBLISH</span><h2>Built once.<br /><span>Ready wherever people discover it.</span></h2></Reveal><div className="outcome-copy"><p>Keep materials, scale and product identity consistent from the browser to a real-space AR placement. ARVision creates the delivery formats while you stay focused on the experience.</p><div className="outcome-points"><span><b>Web viewer</b> Fast, responsive and easy to embed.</span><span><b>Mobile AR</b> App-free placement on iOS and Android.</span><span><b>Managed links</b> Share updates without changing the URL.</span></div><Link href="/features" className="primary-btn">Explore all capabilities <span>→</span></Link></div></section>

    <section className="cta"><div className="container"><Reveal><span className="status-label dark"><i /> Ready when you are</span><h2>Give your next 3D model<br />a life beyond the file.</h2><p>Publish your first interactive model for free.</p><a href="#start" className="light-btn">Start creating →</a></Reveal></div></section><Footer />
  </main>;
}

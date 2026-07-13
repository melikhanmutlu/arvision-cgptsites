"use client";
import Link from "next/link";
import {Footer,Header,PageHero,Reveal} from "../components/SiteChrome";
const features=[
  ["3D + AR Viewer","A complete viewer with materials, lighting, measurements, hotspots, sections and version tools.","◇","/studio"],
  ["AI 3D Generation","Create textured, publication-ready 3D models from a text prompt or reference image.","✦","/studio"],
  ["Model Library","Keep every asset organised with folders, tags, bulk actions and smart search.","▱","/library"],
  ["Team Collaboration","Work safely with owner, admin, editor and viewer roles.","◎","/pricing"],
  ["Sharing + Embed","Create protected links, domain-restricted embeds and commerce-ready snippets.","↗","/studio"],
  ["Analytics","Track views, unique visitors, traffic sources and model interactions.","⌁","/studio"],
  ["API + Webhooks","Connect a full REST API, personal tokens and signed event notifications.","{ }","/pricing"],
  ["Version History","Save every change automatically, then compare, download or restore any version.","↶","/studio"]
];
export default function Features(){return <main><Header/><PageHero kicker="Platform capabilities" title="Your complete 3D workflow. In one place." copy="Everything you need to create, manage, collaborate and publish interactive 3D experiences."/><section className="feature-grid container">{features.map((f,i)=><Reveal key={f[0]} delay={(i%4)*60}><article><div className="feature-icon">{f[2]}</div><span>0{i+1}</span><h2>{f[0]}</h2><p>{f[1]}</p><Link href={f[3]}>Open related workspace <b>→</b></Link></article></Reveal>)}</section><section className="integration-strip"><div className="container"><Reveal><span>Delivery and integration surfaces supported by ARVision</span><div><b>Shopify</b><b>WooCommerce</b><b>REST API</b><b>WebXR</b><b>iOS Quick Look</b></div></Reveal></div></section><Footer/></main>}

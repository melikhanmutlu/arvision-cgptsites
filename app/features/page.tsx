"use client";
import Link from "next/link";
import {Footer,Header,PageHero,Reveal} from "../components/SiteChrome";
const features=[
  ["3D + AR Viewer","Materyal, ışık, ölçüm, hotspot, kesit ve sürüm araçlarıyla eksiksiz görüntüleyici.","◫","/studio"],
  ["AI ile 3D Üretim","Metinden veya görselden, dokulu ve yayına hazır 3D modeller oluşturun.","✦","/studio"],
  ["Model Kitaplığı","İç içe klasörler, etiketler, toplu işlemler ve akıllı aramayla tüm varlıklarınız düzenli.","◇","/library"],
  ["Ekip Çalışması","Owner, admin, editor ve viewer rolleriyle kontrollü iş birliği.","◎","/pricing"],
  ["Paylaşım + Embed","Şifreli ve süreli bağlantılar, alan adı kısıtlı embed ve e-ticaret kodları.","↗","/studio"],
  ["Analitik","Görüntüleme, tekil ziyaretçi, kaynak ve etkileşimleri model bazında izleyin.","⌁","/studio"],
  ["API + Webhook","Kapsamlı REST API, kişisel tokenlar ve imzalı olay bildirimleri.","{ }","/pricing"],
  ["Sürüm Geçmişi","Her değişikliği otomatik kaydedin; karşılaştırın, indirin veya geri dönün.","↶","/studio"]
];
export default function Features(){return <main><Header/><PageHero kicker="Platform özellikleri" title="3D iş akışınızın tamamı. Tek yerde." copy="Üretimden yönetime, iş birliğinden dağıtıma kadar ihtiyaç duyduğunuz araçlar."/><section className="feature-grid">{features.map((f,i)=><Reveal key={f[0]} delay={(i%4)*70}><article><div className="feature-icon">{f[2]}</div><span>0{i+1}</span><h2>{f[0]}</h2><p>{f[1]}</p><Link href={f[3]}>İlgili ekranı aç <b>→</b></Link></article></Reveal>)}</section><section className="integration-strip"><Reveal><span>ARVision’ın desteklediği teslim ve entegrasyon yüzeyleri</span><div><b>Shopify</b><b>WooCommerce</b><b>REST API</b><b>WebXR</b><b>iOS Quick Look</b></div></Reveal></section><Footer/></main>}

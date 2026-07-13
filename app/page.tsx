"use client";

import { useRef, useState } from "react";

const formats = ["STL", "OBJ", "FBX", "STEP", "ZIP"];

export default function Home() {
  const [mode, setMode] = useState<"upload" | "ai">("upload");
  const [file, setFile] = useState<string>("");
  const [prompt, setPrompt] = useState("");
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="ARVision ana sayfa"><span className="brand-cube">A</span>arvision</a>
        <nav aria-label="Ana menü">
          <a href="#workflow">nasıl çalışır</a><a href="#capabilities">özellikler</a><a href="#pricing">fiyatlandırma</a>
        </nav>
        <div className="nav-actions"><button className="text-button">giriş yap</button><button className="solid small">ücretsiz başla <span>↗</span></button></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> WEB TABANLI 3D + AR PLATFORMU</p>
          <h1>3D modelinizi.<br/><span>Gerçek dünyaya</span><br/>taşıyın.</h1>
          <p className="lede">Modelinizi yükleyin veya yapay zekâ ile üretin. Otomatik dönüştürün, web’de yayınlayın ve tek dokunuşla artırılmış gerçeklikte deneyimleyin.</p>
          <div className="proof"><span>✓ Kurulum gerektirmez</span><span>✓ Tüm cihazlarda çalışır</span><span>✓ Ücretsiz başlayın</span></div>
        </div>

        <div className="studio" aria-label="Model yükleme stüdyosu">
          <div className="studio-top"><span>YENİ MODEL</span><span className="secure">● güvenli bağlantı</span></div>
          <div className="tabs" role="tablist">
            <button role="tab" aria-selected={mode === "upload"} onClick={() => setMode("upload")}>01 / DOSYA YÜKLE</button>
            <button role="tab" aria-selected={mode === "ai"} onClick={() => setMode("ai")}>02 / AI İLE ÜRET <b>PRO</b></button>
          </div>
          {mode === "upload" ? (
            <div className="panel">
              <input ref={input} type="file" hidden accept=".stl,.obj,.fbx,.step,.zip" onChange={(e) => setFile(e.target.files?.[0]?.name || "")} />
              <button className="dropzone" onClick={() => input.current?.click()}>
                <span className="upload-icon">↑</span>
                <strong>{file || "Modelinizi buraya bırakın"}</strong>
                <small>{file ? "Dosyanız hazır — dönüştürmeye başlayabilirsiniz" : "veya bilgisayarınızdan bir dosya seçin"}</small>
                <em>Dosya seç</em>
              </button>
              <div className="format-row"><span>DESTEKLENEN</span>{formats.map((f) => <code key={f}>{f}</code>)}<span className="max">MAKS. 100 MB</span></div>
              <div className="settings">
                <label>ÇIKTI FORMATI<select><option>GLB + USDZ (önerilen)</option><option>Yalnızca GLB</option></select></label>
                <label>SIKIŞTIRMA<select><option>Meshopt — dengeli</option><option>Draco — küçük dosya</option></select></label>
              </div>
              <button className="solid full" disabled={!file}>{file ? "DÖNÜŞTÜRMEYİ BAŞLAT →" : "BİR DOSYA SEÇİN"}</button>
            </div>
          ) : (
            <div className="panel ai-panel">
              <label className="prompt-label">HAYALİNİZDEKİ MODELİ TARİF EDİN</label>
              <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Örn. İskandinav tarzı, açık meşe ahşap bir lounge sandalye..." />
              <div className="ai-options"><span>METİNDEN 3D</span><span>◆ Meshy destekli</span></div>
              <button className="solid full" disabled={!prompt}>3D MODELİ ÜRET →</button>
            </div>
          )}
          <div className="studio-foot"><span>HESAP GEREKTİRMEZ</span><span>ŞİFRELİ YÜKLEME</span><span>ANONİM KALIN</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Özellikler"><span>YÜKLE</span><i>→</i><span>DÖNÜŞTÜR</span><i>→</i><span>YAYINLA</span><i>→</i><span>AR'DA GÖR</span><i>→</i><span>HER YERDE PAYLAŞ</span></section>

      <section className="workflow" id="workflow">
        <div><p className="eyebrow">/ İŞ AKIŞI</p><h2>Dosyadan AR deneyimine.<br/>Dakikalar içinde.</h2></div>
        <div className="steps">
          {[['01','Yükle','STL, OBJ, FBX, STEP veya ZIP dosyanızı sürükleyip bırakın.'],['02','Dönüştür','Bulutta optimize edilmiş GLB ve iOS uyumlu USDZ çıktıları alın.'],['03','Paylaş','Web linki, QR kod veya embed ile modelinizi her yerde yayınlayın.'],['04','AR’da deneyimle','Android Scene Viewer ve iOS Quick Look ile gerçek ölçekte görün.']].map(([n,t,d]) => <article key={n}><span>{n}</span><div className="step-icon">{n === '01' ? '↥' : n === '02' ? '◇' : n === '03' ? '↗' : '⌗'}</div><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>

      <section className="capabilities" id="capabilities">
        <p className="eyebrow">/ TEK PLATFORM, TÜM 3D İŞ AKIŞINIZ</p>
        <div className="cap-grid"><h2>Modelden<br/>deneyime.<br/><span>Her araç,<br/>tek yerde.</span></h2>
          <div className="feature-list">
            <article><b>01</b><div><h3>3D & AR Görüntüleyici</h3><p>Materyal, ışık, ölçüm, hotspot ve sürüm araçlarıyla tam ekran çalışma alanı.</p></div><span>↗</span></article>
            <article><b>02</b><div><h3>AI ile 3D Üretim</h3><p>Metinden veya referans görselden yayınlanabilir, dokulu modeller üretin.</p></div><span>↗</span></article>
            <article><b>03</b><div><h3>Takımlar için hazır</h3><p>Roller, paylaşımlı klasörler, özel alan adı, API ve webhook desteği.</p></div><span>↗</span></article>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing"><div><p className="eyebrow">/ BASİT FİYATLANDIRMA</p><h2>Ücretsiz başlayın.<br/>İhtiyacınız kadar büyüyün.</h2></div><div className="price"><span>PRO</span><strong>$19<small>/ay</small></strong><p>10 GB depolama · 200 model<br/>20 AI üretimi · API erişimi</p><button className="solid">PRO'YU DENE →</button></div></section>
      <footer><a className="brand" href="#top"><span className="brand-cube">A</span>arvision</a><p>3D içeriği web ve gerçek dünya için hazırlar.</p><div><a href="#workflow">ürün</a><a href="#pricing">fiyatlandırma</a><a href="#capabilities">geliştiriciler</a></div><span>© 2026 ARVISION</span></footer>
    </main>
  );
}

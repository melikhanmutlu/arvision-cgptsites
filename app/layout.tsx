import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  return {
    metadataBase: base,
    title: "ARVision — 3D modelleri web ve AR'a taşıyın",
    description: "3D modelinizi yükleyin veya AI ile üretin; otomatik dönüştürün, web'de yayınlayın ve artırılmış gerçeklikte deneyimleyin.",
    icons: { icon: "/favicon.svg" },
    openGraph: { title: "ARVision", description: "3D modelinizi gerçek dünyaya taşıyın.", images: [{ url: "/og.png", width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: "ARVision", description: "3D modelinizi gerçek dünyaya taşıyın.", images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}

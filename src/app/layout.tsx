import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
export const metadata: Metadata = {
  title: "Cloud-Based AI Engineering",
  description: "A briefing for engineers on cloud agents.",
  metadataBase: new URL("https://cloud-agents-site.vercel.app"),
  openGraph: {
    title: "Cloud-Based AI Engineering",
    description: "A briefing for engineers on cloud agents.",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud-Based AI Engineering",
    description: "A briefing for engineers on cloud agents.",
    images: ["/opengraph-image"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t})()`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}

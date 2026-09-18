import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sawan Goyal | Software Engineer & AI Systems (IIT Bombay)",
  description:
    "Portfolio of Sawan Goyal (IIT Bombay Alum, Ex-Saptang Labs) specializing in high-scale distributed systems (80M+ events/hr), production multi-agent architectures, low-latency C++ reverse-proxies, and cloud infrastructure.",
  keywords: [
    "Sawan Goyal",
    "IIT Bombay",
    "Software Engineer",
    "AI Engineer",
    "Multi-Agent Systems",
    "Distributed Systems",
    "High-Scale Architecture",
    "FastAPI",
    "LangGraph",
    "C++ NGINX",
    "AWS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#3b4261] selection:text-[#f1f5f9]">
        {children}
      </body>
    </html>
  );
}

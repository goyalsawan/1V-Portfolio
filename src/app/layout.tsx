import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Engineer Portfolio | Staff & Senior AI Engineer",
  description:
    "Portfolio of a Full-Stack AI Engineer specializing in production-grade multi-agent systems, high-throughput RAG pipelines, multimodal vision intelligence, and sub-500ms streaming at scale.",
  keywords: [
    "AI Engineer",
    "Multi-Agent Systems",
    "LangGraph",
    "RAG",
    "pgvector",
    "FastAPI",
    "Claude 3.5",
    "GPT-4o",
    "Ksquare Systems",
    "Production AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-neo-yellow selection:text-black">
        {children}
      </body>
    </html>
  );
}

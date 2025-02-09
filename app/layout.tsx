import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Husam Mohamed | Web Developer",
  description:
    "Husam Mohamed - Front-End Web Developer specializing in React, Next.js, and TailwindCSS. Crafting responsive, high-performance websites with clean code and modern UI/UX. Check out my projects and get in touch!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

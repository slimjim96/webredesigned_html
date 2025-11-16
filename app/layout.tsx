import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Redesigned - Choose Your Experience",
  description: "Interactive portfolio showcasing web development through multiple immersive experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

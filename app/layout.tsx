import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MCN Restaurant Supplies Chain Solutions",
  description: "Save Up to 30–50% on Restaurant Equipment & Supplies. Direct from China factories. Same quality. Faster delivery. Lower cost.",
  keywords: "restaurant supplies, kitchen equipment, China factory, direct pricing, Philippines",
  openGraph: {
    title: "MCN Restaurant Supplies Chain Solutions",
    description: "Save Up to 30–50% on Restaurant Equipment & Supplies",
    type: "website",
  },
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

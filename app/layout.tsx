import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tung's Web Agency",
  description:
    "Tung's creative web agency focused on design, development, and results.",
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

import type { Metadata } from "next";
import "./globals.css";
import { getHostUrl } from "@/utils/getHostUrl";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  return {
    title: "Tung's Web Agency",
    description:
      "Tung's creative web agency focused on design, development, and results.",
    openGraph: {
      title: "Tung's Web Agency",
      description:
        "Tung's creative web agency focused on design, development, and results.",
      url: hostUrl,
      siteName: "Tung's Web Agency",
      images: [
        {
          url: `${hostUrl}/1200x630.jpg`,
          width: 1200,
          height: 630,
          alt: "Tung's Web Agency",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Tung's Web Agency",
      description:
        "Tung's creative web agency focused on design, development, and results.",
      images: [`${hostUrl}/1200x630.jpg`],
    },
  };
}

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

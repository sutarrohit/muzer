import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muzer",
  description:
    "Empower your audience to curate your music stream. Connect with fans like never before.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Muzer",
    description:
      "Empower your audience to curate your music stream. Connect with fans like never before.",
    images: [
      {
        url: "./metaImage.png",
        width: 1200,
        height: 630,
        alt: "Muzer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

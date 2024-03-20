import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RideON",
  description: "Ride Across the City with Ease",
  // icons: {
  //   icon: "/favicon.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.png" sizes="auto" />
      </head>
      <body>{children}</body>
    </html>
  );
}

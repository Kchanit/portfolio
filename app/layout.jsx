import { Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "chanit",
  description: "chanit's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

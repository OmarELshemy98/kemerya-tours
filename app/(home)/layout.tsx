import {
  Manrope,
  Cormorant_Garamond,
  Noto_Sans_Arabic,
} from "next/font/google";
import "../globals.css";
import { NoJSSwap } from "@/components/NoJSSwap";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

const arabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en" className={`no-js ${display.variable} ${sans.variable} ${arabic.variable}`}>
            <head />
      <body>
        <NoJSSwap />
        {children}
      </body>
    </html>
  );
}
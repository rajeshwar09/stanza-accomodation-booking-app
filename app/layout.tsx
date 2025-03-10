import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const robotoMono = Roboto_Mono({
//   variable: "--font-roboto-mono",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
// });

export const metadata: Metadata = {
  title: "Stanza",
  description: "Accomodation Booking Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${overpass.variable} sm:mx-32 antialiased`}>
          <Providers>
            <Navbar />
            <main className="py-10 ">{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}

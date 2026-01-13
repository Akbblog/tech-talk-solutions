import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import ClientHeader from '@/components/layout/ClientHeader';
import { Footer } from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tech Talk Solution | Empower Your Restaurant With Tech Talk",
  description: "Maximize profitability, reduce operational costs, and grow independently with our comprehensive suite of digital services tailored for restaurants.",
  keywords: "restaurant call answering, takeaway marketing, reduce delivery app fees, restaurant digital solutions, EPOS integration",
  openGraph: {
    title: "Tech Talk Solution | Empower Your Restaurant With Tech Talk",
    description: "Maximize profitability, reduce operational costs, and grow independently with our comprehensive suite of digital services tailored for restaurants.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable} antialiased`}>
        <ClientHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

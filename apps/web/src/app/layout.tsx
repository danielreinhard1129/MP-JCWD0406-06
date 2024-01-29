
import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Loading from "@/components/Loading";
import "aos";
import "aos/dist/aos.css";
import { Suspense } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import StoreProvider from "./StoreProvider";



export const metadata: Metadata = {
  title: "Symphony",
  description: "Generated Events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-primary">
        <StoreProvider>
          <Header />

          <Suspense fallback={<Loading />}>
            <main>{children}</main>
          </Suspense>

          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}

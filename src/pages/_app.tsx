import "@/styles/globals.css";
import "@/styles/all.min.css";
import { Trirong } from "next/font/google";
import type { AppProps } from "next/app";
import AppContext from "../context/AppContext";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* const trirong = Trirong({
  weight: [],
  variable: "--font-trirong",
}); */

const trirong = Trirong({
  weight: ["100", "400", "500", "600", "700", "800"],
  variable: "--font-trirong",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  const [bookNowModal, setBookNowModal] = useState<any>(false);
  return (
    <AppContext.Provider
      value={{
        state: {
          bookNowModal,
        },
        setBookNowModal,
      }}
    >
      <main className={`${trirong.variable}`}>
        <Component {...pageProps} />
      </main>
    </AppContext.Provider>
  );
}

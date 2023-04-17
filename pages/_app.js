import "@/styles/globals.scss";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    // mainGrid styles and poppins object from next/font
    <main className={` mainGrid ${poppins.className}`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

import "@/App.css";
import { ReactLenis } from "lenis/react";
import { Toaster } from "sonner";
import { I18nProvider } from "@/i18n";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <I18nProvider>
      <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
        <div className="App relative">
          <NoiseOverlay />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Marquee />
            <Services />
            <Products />
            <Contact />
          </main>
          <Footer />
          <Toaster
            position="bottom-right"
            theme="dark"
            toastOptions={{
              style: {
                background: "#0E1410",
                border: "1px solid #212D24",
                color: "#F2F0E9",
              },
            }}
          />
        </div>
      </ReactLenis>
    </I18nProvider>
  );
}

export default App;

import { useEffect } from "react";
import { DemoProvider, useDemo } from "./lib/demo-context";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Residences } from "./components/Residences";
import { Investment } from "./components/Investment";
import { Location } from "./components/Location";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

function Page() {
  const { track } = useDemo();

  useEffect(() => {
    track("page_view", "demo:load");
  }, [track]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Residences />
        <Investment />
        <Location />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <DemoProvider>
      <Page />
    </DemoProvider>
  );
}

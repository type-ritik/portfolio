import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TechBanner from "./components/TechBanner";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import About from "./components/About";
// import webBg from "./assets/sebastian.jpg";
import webBg1 from "./assets/martiin.jpg";

function App() {
  return (
    <>
      <div className=" relative text-[#f5f5f5]!">
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${webBg1})`,
            opacity: 0.07,
          }}
        />
        <div className="fixed inset-0 -z-20 bg-[#0a0a0a]!" />
      </div>
      <Header />
      <div className="w-full h-full justify-center items-center flex flex-col">
        <Hero />
        <About />
        <Projects />
        {/*
        <Skills />
        <TechBanner />
        <Contacts /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;

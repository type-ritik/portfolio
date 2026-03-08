import Header from "./components/Header";
import "./App.css";
import IntroContainer from "./components/IntroContainer";
import SkillContainer from "./components/SkillContainer";
import ProjectContainer from "./components/ProjectContainer";
import ApproachContainer from "./components/ApproachContainer";
import ResumeContactContainer from "./components/ResumeContactContainer";
import Footer from "./components/Footer";
import { AboutContainer } from "./components/AboutContainer";

function App() {
  return (
    <>
      <Header />
      <div className="w-[80%] h-full mx-auto! my-25!">
        <IntroContainer />
        <AboutContainer />
        <ProjectContainer />
        <SkillContainer />
        <ApproachContainer />
        <ResumeContactContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;

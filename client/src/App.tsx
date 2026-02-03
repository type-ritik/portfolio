import Header from "./components/Header";
import "./App.css";
import IntroContainer from "./components/IntroContainer";
import SkillContainer from "./components/SkillContainer";
import ProjectContainer from "./components/ProjectContainer";
import ApproachContainer from "./components/ApproachContainer";
import ResumeContactContainer from "./components/ResumeContactContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="w-[80%] mx-auto! my-25!">
        <IntroContainer />
        <SkillContainer />
        <ProjectContainer />
        <ApproachContainer />
        <ResumeContactContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;

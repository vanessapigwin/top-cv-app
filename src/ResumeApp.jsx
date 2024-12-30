import GeneralSection from "./components/General";
import WorkExperience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";

export default function ResumeApp() {
  return (
    <>
      <GeneralSection />
      <WorkExperience />
      <Education />
      <Skills />
    </>
  );
}

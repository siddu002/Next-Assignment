import Header from "@/Components/Header";
import Main from "@/Components/Main";
import Features from "@/Components/Features";
import ProjectTesstimonal from "@/Components/ProjectTesstimonal";
import Statisticdata from "@/Components/Statisticdata";
import Faq from "@/Components/Faq";
import BlogSection from "@/Components/BlogSection";
import FreeTrialBanner from "@/Components/FreeTrialBanner";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Main />
      <Features/>
      <ProjectTesstimonal/>
      <Statisticdata/>
      <Faq/>
      <BlogSection/>
      <FreeTrialBanner/>
      <Footer/>
    </div>
  );
}

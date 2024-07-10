import Layout from "@/src/layout/Layout";
import About from "components/About";
import Contact from "components/Contact";
import Home from "components/Home";
import Blog from "@/src/components/News";
import Services from "components/Service";
import dynamic from "next/dynamic";
import Skills from "@/src/components/Skills";
import Works from "@/src/components/Works";
import Service from "components/Service";
const Portfolio = dynamic(() => import("components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <Home />

      <About />
     
      <Skills />

      <Works />

      <Service />
     
      {/* <div className="tokyo_tm_portfolio_titles" /> */}
  
      {/* <Portfolio /> */}
   
      {/* <Blog /> */}
      
      <Contact />
    
    </Layout>
  );
};
export default Index;

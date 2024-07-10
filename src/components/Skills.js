import React from "react";
import { useContext } from "react";
import { TokyoContext } from "../Context";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import Skills1 from "./about/Skills1";
// import Skills from "./Skills/Skills";

const Skills = () => {
  return (
    <SectionContainer name={"skills"}>
      <div className="container">
        <div className="tokyo_tm_news w-full clear-both float-left h-auto pt-[90px] px-0 pb-[20px]">
          <h2 className="mb-[32px] uppercase font-extrabold font-montserrat">
            Skills
          </h2>
        </div>
      </div>
      <Skills1 />
    </SectionContainer>
  );
};

export default Skills;

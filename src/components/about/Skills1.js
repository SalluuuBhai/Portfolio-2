const programming = [
  { id: 1, name: "HTML", value: 95 },
  { id: 2, name: "CSS", value: 85 },
  { id: 3, name: "JavaScript", value: 70 },
  { id: 4, name: "TypeScript", value: 60 },
  { id: 5, name: "React", value: 80 },
  { id: 6, name: "Next JS", value: 70 },
  { id: 7, name: "Angular", value: 50 },
  { id: 8, name: "Node JS", value: 70 },
  { id: 9, name: "Mongo DB", value: 80 },
  { id: 10, name: "MY SQL", value: 65 },
];
const language = [
  { id: 1, name: "Bootstrap", value: 85 },
  { id: 2, name: "Tailwind CSS", value: 85 },
  { id: 3, name: "MeMaterial UI", value: 80 },
  { id: 3, name: "Ant Design", value: 70 },
];
const softskills = [
  { id: 1, name: "Problem-Solving", value: 60 },
  { id: 2, name: "DSA", value: 60 },
  { id: 3, name: "Firebase", value: 80 },
  { id: 4, name: "AWS", value: 70 },
  { id: 5, name: "SEO", value: 80 },
  { id: 6, name: "Redux", value: 75 },
  { id: 7, name: "GIT & GitHub", value: 85 },
  { id: 8, name: "Version Control", value: 85 },
  { id: 9, name: "User Experience and User Interface Design", value: 80 },
  { id: 10, name: "Responsive Web Design", value: 80 },
];
const Skills1 = () => {
  return (
    <div className="tokyo_tm_progressbox w-full h-auto clear-both float-left bg-white pt-[93px] pr-[0px] pb-[100px] pl-[0px]">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Programming Skills</h3>
            </div>
            <div className="tokyo_progress">
              {programming.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Styling Frameworks</h3>
            </div>
            <div className="tokyo_progress">
              {language.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="tokyo_section_title w-full h-auto clear-both float-left mt-[45px] mb-[40px]">
              <h3 className="text-[20px] font-bold">Soft Skills</h3>
            </div>
            <div className="tokyo_progress">
              {softskills.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills1;

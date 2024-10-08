import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img className="min-w-full" src="assets/img/slider/1.jpg" alt="image" />
      </div>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Mohamed Salman Faris</h3>
        <span>
          <strong>Fullstack JS Developer</strong>
        </span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          As a Full-stack JS Developer, I harness JavaScript, React, Next.js,
          Angular, and Node.js to build engaging, user-centric web applications.
          I am knowledgeable about backend and frontend development
          requirements, including database management. I handle any part of the
          process with ease. I am a collaborative team player with a willingness
          to learn and grow with the organization. Let's make technology work
          for us by creating solutions that are both innovative and accessible.
        </p>
        {/* <p className="mb-[11px]">
        Hi, my name is <strong>Mohamed Salman Faris</strong> and I'd like to share a bit about myself. My journey in the field of technology began with a Bachelor's Degree in Multimedia Communication Engineering from the prestigious University of Guadalajara. This comprehensive education equipped me with a solid foundation in manipulating audio, video, images, text, and animation tools to create efficient, functional, and aesthetically pleasing products, projects, and services.
      </p> */}

        {/* <p className="mb-[11px]"> 
        Throughout my career, I have had the opportunity to showcase my abilities in various roles. Prior to my current position at Improving, I had the privilege of contributing to an open-source project at IBM Mexico, where I left my mark on the widely acclaimed Carbon Design System. This experience allowed me to collaborate with talented professionals and further refine my skills in UX UI design.
      </p>

      <p className="mb-[11px]">
        My dedication to technology and innovation goes beyond my professional life. I continuously seek to expand my knowledge by staying up-to-date with the latest industry trends, attending conferences, and participating in online courses. This commitment ensures that I remain at the forefront of emerging technologies, enabling me to deliver cutting-edge solutions that meet the ever-evolving demands of the digital landscape.
      </p>

      <p className="mb-[11px]">
        With a passion for creating meaningful digital experiences and a proven track record of success, I believe I can be a valuable asset to any team or organization looking to make a lasting impact in the digital realm.
      </p> */}
      </div>
      {/* <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Age:
                </span>
                <span>32</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Location:
                </span>
                <span>Guadalajara, Jalisco, México</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="mailto:hello@carlosdiaz.dev"
                  >
                    hello@carlosdiaz.dev
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Nationality:
                </span>
                <span>Mexican</span>
              </li>

            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">

              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Study:
                </span>
                <span>Universidad de Guadalajara | UDG</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Degree:
                </span>
                <span>Multimedia Comunication Engineer</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Interest:
                </span>
                <span>Dance Salsa Music & Study</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Freelance:
                </span>
                <span>Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="tokyo_tm_button" data-position="left">
        {/* <a href="assets/pdf/Resume MD_SalmanFaris.S09'24.pdf" download>
          <span>Download CV</span>
        </a> */}
        <a href="https://drive.google.com/file/d/1rWxzeVHIpsVxn-AoDlIu7IYQaeARiC5L/view?usp=sharing" target="_blank">
          <span>Download CV</span>
        </a>
        {/* <a href="assets/pdf/MD_SalmanFaris_FSD-Resume.pdf" target="_blank">
          <span>Download CV</span>
        </a> */}
      </div>
    </Fragment>
  );
};
export default Intro;

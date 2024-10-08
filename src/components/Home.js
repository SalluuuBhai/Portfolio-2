import SectionContainer from "./SectionContainer";
import { socialIcon } from "../socialMedia"

const Home = () => {
  return (
    <SectionContainer name={"home"}>
      <div className="container">
        <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
          <div className="home_content flex items-center">
            <div
              className="avatar min-w-[300px] min-h-[300px] relative rounded-full"
              style={{ marginTop: '60px' }}
              data-type="wave"
            >
              {" "}
              {/* data-type values are: "wave", "circle", "square"*/}
              <div
                className="image absolute inset-0 bg-no-repeat bg-center bg-cover"
                // style={{ marginTop: '30px' }}
                data-img-url="assets/img/slider/salman.jpg"
              />
            </div>
            <div className="details ml-[80px]">
              <h3 className="name text-[55px] font-normal uppercase mb-[14px]">
                Mohamed <br></br><span className="font-extrabold">Salman Faris</span>
              </h3>
              <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">
              As a Full-stack JS Developer, I harness JavaScript, TypeScript, React, Next.js, Angular, and Node.js to build engaging, user-centric web applications. I am knowledgeable about backend and frontend development requirements, including database management. I handle any part of the process with ease. I am a collaborative team player with a willingness to learn and grow with the organization. Let's make technology work for us by creating solutions that are both innovative and accessible.
              </p>
              <div className="social w-full float-left" style={{ marginBottom: '150px' }}>
                <ul className="m-0 list-none">
                  {socialIcon.map((item) => (
                    <li className="mr-[2px] inline-block" key={item.id}>
                      <a
                        className="text-black text-[40px] transition-all duration-300 hover:text-black"
                        href={item.link}
                        target="_blank"
                      >
                        <i className={item.iconName} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;

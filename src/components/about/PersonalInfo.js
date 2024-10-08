const PersonalDetails = [
  { id: 1, text: "Mobile", value: "+91 8438270183" },
  { id: 2, text: "Email", value: "md.salmanfaris12@gmail.com" },
];
// const interests = [
//   { id: 1, text: "Make UI/UX Design" },
//   { id: 2, text: "Create Mobile App" },
//   { id: 3, text: "Site Optimization - SEO" },
//   { id: 4, text: "Custom Website" },
//   { id: 5, text: "Microservices" },
// ];

const PersonalInfo = () => {
  return (
    <div className="tokyo_tm_skillbox w-full h-auto clear-both float-left pt-[90px] pr-[0px] pb-[90px] pl-[0px]">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Personal Info</h3>
            </div>
            <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none">
                {/* <li className="m-0 pl-[55px] relative">
                  <span>
                    <img
                      className="svg text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                      src="assets/img/svg/rightarrow.svg"
                      alt="image"
                    />
                    Mobile No:
                  </span>
                </li>
                <li className="m-0 pl-[25px] relative">Email:</li> */}
                {PersonalDetails.map((item) => (
                  <li className="m-0 pl-[25px] relative" key={item.id}>
                    <span>
                      <img
                        className="svg text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                        src="assets/img/svg/rightarrow.svg"
                        alt="image"
                      />
                      {item.text}{" "}
                    </span>
                    :{" "}
                    <span>
                      {/* <img
                        className="svg text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                        src="assets/img/svg/rightarrow.svg"
                        alt="image"
                      /> */}
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Interests</h3>
            </div>
            <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none">
                {interests.map((item) => (
                  <li className="m-0 pl-[25px] relative" key={item.id}>
                    <span>
                      <img
                        className="svg text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                        src="assets/img/svg/rightarrow.svg"
                        alt="image"
                      />
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

import React from "react";
import { useContext } from "react";
import { TokyoContext } from "../Context";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const frontend = [
  {
    id: 1,
    title: "Admin Dashboard",
    image: "assets/img/works/work-1.jpg",
    author: "Mohamed Salman Faris",
    frontend: "React",
    url: "https://admin-dashboard-d25task.netlify.app/",
  },
  {
    id: 2,
    title: "CRUD Management",
    image: "assets/img/works/work-2.jpg",
    author: "Mohamed Salman Faris",
    frontend: "React",
    url: "https://student-teacher-management-crud-d29.netlify.app/",
  },
  {
    id: 3,
    title: "Apple Cart",
    image: "assets/img/works/work-3.jpg",
    author: "Mohamed Salman Faris",
    frontend: "React",
    url: "https://apple-iphone-cart.netlify.app/",
  },
  {
    id: 4,
    title: "E-Invitation",
    image: "assets/img/works/invitation.png",
    author: "Mohamed Salman Faris",
    frontend: "HTML, CSS",
    url: "https://azeem-samar-wedding-invitation.netlify.app/",
  },
];

const fullstack = [
  {
    id: 1,
    title: "User Authentication",
    image: "assets/img/works/password.png",
    author: "Mohamed Salman Faris",
    frontend: "React",
    backend: "NodeJS",
    url: "https://user-form-login-signup.netlify.app/",
  },
  {
    id: 2,
    title: "Expense Tracker",
    image: "assets/img/works/expense.png",
    author: "Mohamed Salman Faris",
    frontend: "React",
    backend: "NodeJS",
    url: "https://expense-tracker-money-manager.netlify.app/",
  },
  {
    id: 3,
    title: "Online Music Player",
    image: "assets/img/works/OMP.png",
    author: "Mohamed Salman Faris",
    frontend: "React",
    backend: "NodeJS",
    url: "https://online-music-player-web-app.netlify.app/",
  },
  {
    id: 4,
    title: "OfferAds",
    image: "assets/img/works/Offerads.jpg",
    author: "Mohamed Salman Faris",
    frontend: "React",
    backend: "NodeJS",
    url: "https://offerads.netlify.app/",
  },
  {
    id: 5,
    title: "Salluuu Pets",
    image: "assets/img/works/salluuupets.png",
    author: "Mohamed Salman Faris",
    frontend: "React",
    backend: "NodeJS",
    url: "https://salluuupets.online/",
  },
];

const Works = () => {
  const { setNewsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"works"}>
      <div className="container">
        <div className="tokyo_tm_news w-full clear-both float-left h-auto pt-[100px] px-0 pb-[45px]">
          <h2 className="mb-[62px] uppercase font-extrabold font-montserrat">
            Works
          </h2>
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Full Stack"}
                title={"Full Stack Web App"}
              />
            </div>
          </div>
          <ul className="ml-[-50px] list-none">
            {fullstack
              .slice()
              .reverse()
              .map((item) => (
                <li
                  className="mb-[50px] float-left w-1/2 pl-[50px]"
                  key={item.id}
                >
                  <div className="list_inner w-full clear-both float-left h-auto relative">
                    <div className="image relative overflow-hidden">
                      <img
                        className="min-w-full opacity-0"
                        src="assets/img/works/work3.jpg"
                        alt="image"
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url={item.image}
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <a
                        className="tokyo_tm_full_link"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        // onClick={() => {
                        //   modalToggle(true);
                        //   setNewsModal(item);
                        // }}
                      />
                    </div>
                    <div className="details w-full float-left px-[40px] pt-[30px] pb-[25px] bg-white transition-all duration-300">
                      <div className="extra flex items-center justify-between mb-[25px] relative">
                        <div className="short">
                          <p className="date font-montserrat text-[13px] text-[#767676]">
                            By{" "}
                            <a
                              className="text-[#767676] transition-all duration-300 hover:text-black"
                              // href="#"
                              // onClick={() => {
                              //   modalToggle(true);
                              //   setNewsModal(item);
                              // }}
                            >
                              {item.author}
                            </a>
                            {/* <span className="relative">{item.date}</span> */}
                          </p>
                          <span className="relative">
                            Frontend : {item.frontend}
                          </span>{" "}
                          <br></br>
                          <span className="relative">
                            Backend : {item.backend}
                          </span>
                        </div>
                      </div>
                      <h3 className="title mb-[10px] leading-[1.4]">
                        <a
                          className="text-black text-[18px] font-semibold inline-block transition-all duration-300 hover:text-black"
                          href="#"
                          onClick={() => {
                            modalToggle(true);
                            setNewsModal(item);
                          }}
                        >
                          {item.title}
                        </a>
                      </h3>
                      <div className="tokyo_tm_read_more">
                        <a
                          href="#"
                          onClick={() => {
                            modalToggle(true);
                            setNewsModal(item);
                          }}
                        >
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>

          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Frontend"}
                title={"Frontend Web App"}
              />
            </div>
          </div>
          <ul className="ml-[-50px] list-none">
            {frontend.map((item) => (
              <li
                className="mb-[50px] float-left w-1/2 pl-[50px]"
                key={item.id}
              >
                <div className="list_inner w-full clear-both float-left h-auto relative">
                  <div className="image relative overflow-hidden">
                    <img
                      className="min-w-full opacity-0"
                      src="assets/img/works/work3.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                      data-img-url={item.image}
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <a
                      className="tokyo_tm_full_link"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      // onClick={() => {
                      //   modalToggle(true);
                      //   setNewsModal(item);
                      // }}
                    />
                  </div>
                  <div className="details w-full float-left px-[40px] pt-[30px] pb-[25px] bg-white transition-all duration-300">
                    <div className="extra flex items-center justify-between mb-[25px] relative">
                      <div className="short">
                        <p className="date font-montserrat text-[13px] text-[#767676]">
                          By{" "}
                          <a
                            className="text-[#767676] transition-all duration-300 hover:text-black"
                            // href="#"
                            // onClick={() => {
                            //   modalToggle(true);
                            //   setNewsModal(item);
                            // }}
                          >
                            {item.author}
                          </a>{" "}
                          {/* <span className="relative">{item.date}</span> */}
                        </p>
                        <span className="relative">
                          Frontend : {item.frontend}
                        </span>{" "}
                      </div>
                    </div>
                    <h3 className="title mb-[10px] leading-[1.4]">
                      <a
                        className="text-black text-[18px] font-semibold inline-block transition-all duration-300 hover:text-black"
                        href="#"
                        // onClick={() => {
                        //   modalToggle(true);
                        //   setNewsModal(item);
                        // }}
                      >
                        {item.title}
                      </a>
                    </h3>
                    <div className="tokyo_tm_read_more">
                      <a
                        href="#"
                        onClick={() => {
                          modalToggle(true);
                          setNewsModal(item);
                        }}
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Works;

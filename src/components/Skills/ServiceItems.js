import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Web Development",
    text: [
      "Web development (JavaScript)  involves creating dynamic and interactive elements on websites and web applications using JavaScript. It includes both client-side (front-end) development, where JavaScript is used alongside HTML and CSS to enhance user experiences with features like animations and form validations, and server-side (back-end) development, leveraging frameworks like Node.js to build scalable and efficient server operations. JavaScript developers often work with popular frameworks and libraries such as React, Angular, and Vue.js to construct complex user interfaces and manage application states. They also utilize tools like Webpack, Babel, and npm for efficient development, as well as testing frameworks like Jest to ensure code quality. Proficiency in JavaScript, familiarity with front-end and back-end technologies, and experience with version control systems like Git are crucial for success in this field. JavaScript web developers play a vital role in creating engaging, responsive, and user-friendly web applications, enhancing the overall web experience.",
    ],
    image: "assets/img/news/webdev.jpg",
  },
  {
    id: 2,
    name: "Apps Development",
    text: [
      "App development (React Native) involves creating cross-platform mobile applications for both iOS and Android using a single JavaScript codebase. Developed by Facebook, this framework leverages React for building user interfaces and provides near-native performance by using native components. Key features include reusable components, hot reloading for real-time updates, and extensive support from a vibrant community. React Native also allows integration with native code and utilizes numerous third-party plugins for added functionalities. This approach significantly reduces development time and effort, making it a popular choice for efficient, high-quality mobile app development.",
    ],
    image: "assets/img/news/appdev.png",
  },
  {
    id: 3,
    name: "UX/UI Design",
    text: [
      "UI design, or User Interface design, focuses on creating visually appealing and functional interfaces for software applications and websites. It involves designing the layout, interactive elements, and overall aesthetics to ensure an intuitive and engaging user experience. UI designers use tools like Adobe XD, Sketch, and Figma to create wireframes, mockups, and prototypes. They consider factors such as color schemes, typography, spacing, and visual hierarchy to make the interface user-friendly and accessible. Effective UI design enhances user satisfaction by making interactions smooth and enjoyable, ultimately contributing to the success of the application or website.",
    ],
    image: "assets/img/news/uiux.webp",
  },
  {
    id: 4,
    name: "E-commerce Design",
    text: [
      "E-commerce design involves creating online shopping experiences that are visually appealing, user-friendly, and optimized for conversion. It includes designing the layout, product displays, navigation, and checkout processes to ensure a seamless and engaging experience for users. Effective e-commerce design prioritizes ease of use, with clear calls to action, intuitive navigation, and responsive design to accommodate various devices. It also incorporates elements like high-quality images, detailed product descriptions, and customer reviews to build trust and encourage purchases. A well-designed e-commerce site enhances user satisfaction and boosts sales by providing a smooth, enjoyable shopping experience.",
    ],
    image: "assets/img/news/ecom.jpg",
  },
  {
    id: 5,
    name: "Digital Marketing",
    text: [
      "Digital marketing encompasses various strategies and tactics used to promote products, services, or brands through digital channels. It leverages platforms such as social media, search engines, email, and websites to reach and engage with target audiences. Key components include search engine optimization (SEO) to improve visibility in search results, pay-per-click (PPC) advertising for targeted traffic, social media marketing to build brand awareness and engage followers, and email marketing to nurture leads and retain customers. Digital marketers analyze data and metrics to refine strategies, optimize campaigns, and drive conversions. Effective digital marketing campaigns can increase brand awareness, generate leads, and ultimately drive revenue growth in today's digital landscape.",
    ],
    image: "assets/img/news/digi.jpg",
  },
  {
    id: 6,
    name: "Responsive Design",
    text: [
      "Responsive design is an approach to web design that ensures web pages render well on a variety of devices and window or screen sizes. This includes providing an optimal viewing and interaction experience—easy reading and navigation with a minimum of resizing, panning, and scrolling—across a wide range of devices from desktop monitors to mobile phones. Responsive design uses flexible grids and layouts, images, and CSS media queries to adapt the website's appearance and functionality based on the device being used. By prioritizing user experience and accessibility, responsive design enhances usability and satisfaction, making websites more effective and engaging for all users.",
    ],
    image: "assets/img/news/res.jpg",
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;

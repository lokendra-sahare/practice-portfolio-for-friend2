import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const Portfolio = () => {
  const items = [
    {
      id: 1,
      title: "Amazon Clone",
      img: "https://img.freepik.com/premium-photo/vector-illustration-online-shopping-concept-with-people_1038422-32958.jpg?ga=GA1.1.12840364.1692295179&semt=ais_hybrid",
      desc: "A MERN chat app allows users to send real-time messages with features like user authentication, chat rooms, and notifications. It uses MongoDB for data storage, Express for server logic, React for the frontend, and Node.js for the backend.",
      link: "https://dipanshupatel221.github.io/Amazon-clone/",
    },
    {
      id: 2,
      title: "Weather App",
      img: "https://img.freepik.com/premium-photo/create-modern-weather-app-interface-image_1008415-70861.jpg?size=626&ext=jpg&ga=GA1.1.12840364.1692295179&semt=ais_hybrid",
      desc: "A weather app built with HTML, CSS, and JavaScript that uses an API to display real-time weather updates. It provides accurate forecasts , user-friendly interface for a seamless weather-checking experience.",
      link: "https://weather-web-app-practice3.netlify.app",
    },
    {
      id: 3,
      title: "Tip Calculator",
      img: "https://img.freepik.com/premium-photo/flat-calculator-illustration-with-accessories_1025753-179457.jpg?ga=GA1.1.12840364.1692295179&semt=ais_hybrid",
      desc: "A tip calculator built with HTML, CSS, and JavaScript that allows users to quickly calculate tips based on the bill amount. It features a simple, user-friendly interface, providing instant results and accurate tip calculation.",
      link: "https://tip-calculator-web-application.netlify.app",
    },
    {
      id: 4,
      title: "Digital Clock",
      img: "https://img.freepik.com/premium-photo/black-alarm-clock-with-yellow-digital-display-showing-time-2128_36682-370268.jpg?ga=GA1.1.12840364.1692295179&semt=ais_hybrid",
      desc: "A digital clock built with HTML, CSS, and JavaScript that displays the current time in a sleek, easy-to-read format. It updates in real-time and offers a simple yet functional design for daily timekeeping.",
      link: "https://another-digital-clock-project.netlify.app",
    },
  ];

  const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

    return (
      <motion.section ref={ref}>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer">
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{ y: y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>
                <a href={`${item.link}`}>See Demo</a>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  };

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end ", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id}></Single>;
      })}
    </div>
  );
};

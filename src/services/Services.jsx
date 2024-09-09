import { useRef } from "react";
import "./services.scss";
import { animate, color, motion, useInView } from "framer-motion";

export const Services = () => {
  const variant = {
    initial: {
      x: -500,
      y: 100,
      opacity: 1,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variant}
      initial="initial"
      //   whileInView="animate"
      ref={ref}
      animate="animate"
    >
      <motion.div className="textContainer" variants={variant}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variant}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variant}>
        <motion.div className="box">
          <h2>UI Design</h2>
          <p>
            Creative and detail-oriented UI designer that enhance user
            experience and engagement.Adept at balancing aesthetics with
            functionality to deliver designs that are both attractive and
            effective.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box">
          <h2>DSA</h2>
          <p>
            Proficient in Data Structures and Algorithms, skilled at solving
            complex coding challenges with optimized solutions, and experienced
            in implementing efficient algorithms to improve performance and
            scalability.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box">
          <h2>Web Development</h2>
          <p>
            Experienced MERN stack developer, proficient in building responsive,
            full-stack web applications with expertise in JavaScript, React,
            Node.js, Express, and MongoDB for seamless user experiences.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

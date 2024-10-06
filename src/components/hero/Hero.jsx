import { animate, motion } from "framer-motion";
import "./Hero.scss";
import { Repeat } from "react-bootstrap-icons";

export const Hero = () => {
  const textVariant = {
    initial: {
      x: -500,
      opacity: 0,
    },

    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },

    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariant = {
    initial: {
      x: 0,
    },

    animate: {
      x: "-220%",
      transition: {
        duration: 20,
        repeatType: "mirror",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariant}>DIPANSHU PATEL</motion.h2>
          <motion.h1 variants={textVariant}>
            Web Developer and Web Designer
          </motion.h1>
          <motion.div className="buttons" variants={textVariant}>
            <motion.button variants={textVariant}>
              <a href="#Portfolio">See The Latest Works</a>
            </motion.button>
            <motion.button variants={textVariant}>
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariant}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariant}
        initial="initial"
        animate="animate"
      >
        Front End Web Developer
      </motion.div>
      <div className="imageContainer">
        <img src="./hero2.png" alt="" />
      </div>
    </div>
  );
};

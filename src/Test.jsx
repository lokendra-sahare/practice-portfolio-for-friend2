import { motion } from "framer-motion";

export const Test = () => {
  const varients = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
    hidden: {
      opacity: 0,
    },
  };

  const items = ["item1", "item2", "item3", "item4"];
  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={varients}>
        {items.map((item) => {
          return (
            <motion.li variants={varients} key={item}>
              {item}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

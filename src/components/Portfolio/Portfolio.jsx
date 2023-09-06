import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Perfect solution for developing application experience</p>
          </div>
          {/* <span className="secondaryText">Explore More Works</span> */}
        </motion.div>

        
        <div className={`flexCenter ${css.showCase}`}>
          <a href="http://www.irhabiz.com/" target="_blank"><motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="project" width={380}/></a>
          <a href="https://www.thebakehousebyishika.com/" target="_blank"><motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" width={380}/></a>
          <a href="https://www.mapleouting.com/" target="_blank"><motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" width={380}/></a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

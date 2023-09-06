import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const handleDownload = () => {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
    const pdfFile = "./Sufyanur-Rasheed-ReactJS Developer.pdf";
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Sufyanur-Rasheed-ReactJS Developer.pdf"; // Change the downloaded file name if needed
    link.click();
  };

  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Hey There,I'm Sufyan ",
                1000, // wait 2s before replacing "Mice" with "Hamsters"
                "Hey There,I'm Sufyan ReactJS Developer",
              ]}
              wrapper="span"
              speed={30}
              style={{ fontSize: "1.5rem", display: "inline-block" }}
              repeat={Infinity}
            />
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            I developed beautiful simple
            <br />
            things, And I love what i do <br />
            <Button
              onClick={handleDownload}
              variant="contained"
              color="primary"
              size="small"
            >
              Download CV
            </Button>
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            style={{ height: "370px" }}
            src="./person.png"
            alt=""
          />
        </motion.div>

        <a className={css.email} href="mailto:sufyan4081@gmail.com">
          sufyan4081@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">1.6</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>REACTJS DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

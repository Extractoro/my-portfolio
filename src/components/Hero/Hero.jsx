import Navigation from "../Navigation/Navigation";
import s from "./Hero.module.css";
import Container from "../Container/Container";
import pdf from "../../files/resume.pdf";
import { AiOutlineMail, AiOutlineDownload } from "react-icons/ai";

const Hero = () => {
  return (
    <div className={s["hero"]}>
      <Container>
        <Navigation />
        <div className={s["hero__info"]}>
          <h1 className={s["hero__name"]}>
            Hello!
            <br /> I'm Vadym Tytarenko
          </h1>
          <h3 className={s["hero__position"]}>
            Junior Frontend Developer from Ukraine
            <br /> who loves to communicate with people with
            <br /> common interests.
          </h3>
          <div className={s["hero__buttons"]}>
            <a
              href="mailto:vadymtytarenkoo@gmail.com"
              className={s["hero__email"]}
            >
              <span className={s["hero__email-icon"]}>
                <AiOutlineMail />
              </span>
              Email me
            </a>
            <a href={pdf} download className={s["hero__download"]}>
              <span className={s["hero__download-icon"]}>
                <AiOutlineDownload />
              </span>
              Download CV
            </a>
          </div>
        </div>
        <div className={s["circle"]}></div>
        <div className={s["circle1"]}></div>
        <div className={s["circle2"]}></div>
      </Container>
    </div>
  );
};
// img
export default Hero;

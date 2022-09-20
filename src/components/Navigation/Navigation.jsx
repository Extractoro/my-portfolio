import Container from "../Container/Container";
import s from "./Navigation.module.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { HiDesktopComputer } from "react-icons/hi";

const Navigation = () => {
  return (
    <div className={s["navigation-bg"]}>
      <Container>
        <header className={s["navigation"]}>
          <a href="#home" className={s["navigation__link"]}>
            <span className={s["navigation-span"]}>
              <AiOutlineHome />
            </span>
            Home
          </a>
          <a href="#about" className={s["navigation__link"]}>
            <span className={s["navigation-span"]}>
              <AiOutlineUser />
            </span>
            About me
          </a>
          <a href="#technologies" className={s["navigation__link"]}>
            <span className={s["navigation-span"]}>
              <HiDesktopComputer />
            </span>
            Technologies
          </a>
        </header>
      </Container>
    </div>
  );
};

export default Navigation;

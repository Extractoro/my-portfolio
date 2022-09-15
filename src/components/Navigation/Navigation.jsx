import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={s["header"]}>
      <a href="#home" className={s["header__link"]}>
        Home
      </a>
      <a href="#about" className={s["header__link"]}>
        About me
      </a>
      <a href="/#" className={s["header__link"]}>
        Technologies
      </a>
    </header>
  );
};

export default Navigation;

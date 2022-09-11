import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={s["header"]}>
      <a href="/#" className={s["header__link"]}>
        Home
      </a>
      <a href="/#" className={s["header__link"]}>
        About
      </a>
      <a href="/#" className={s["header__link"]}>
        Technologies
      </a>
    </header>
  );
};

export default Navigation;

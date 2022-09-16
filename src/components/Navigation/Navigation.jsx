import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={s["navigation"]}>
      <a href="#home" className={s["navigation__link"]}>
        Home
      </a>
      <a href="#about" className={s["navigation__link"]}>
        About me
      </a>
      <a href="#technologies" className={s["navigation__link"]}>
        Technologies
      </a>
    </header>
  );
};

export default Navigation;

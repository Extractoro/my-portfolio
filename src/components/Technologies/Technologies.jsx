import Container from "../Container/Container";
import s from "./Technologies.module.css";
import { nanoid } from "nanoid";
import data from "../data/technologies.json";

const Technologies = () => {
  const hardskills = data.hardskills;
  const softskills = data.softskills;
  return (
    <div className={s["technologies"]} id="technologies">
      <Container>
        <div className={s["technologies__container"]}>
          <p className={s["technologies__suptitle"]}>My abilities</p>
          <h2 className={s["technologies__title"]}>Technologies</h2>

          <div className={s["technologies__wrapper"]}>
            <div className={s["technologies__hardskills"]}>
              <div className={s["technologies__hardskills__wrapper"]}>
                <h3 className={s["technologies__hardskills__title"]}>
                  Hard skills
                </h3>
                <ul className={s["technologies__hardskills__list"]}>
                  {hardskills.map(({ name, level }) => (
                    <li
                      className={s["technologies__hardskills__item"]}
                      key={nanoid()}
                      id={nanoid()}
                    >
                      <h3>{name}</h3>
                      <h5>{level}</h5>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={s["technologies__softskills"]}>
              <div className={s["technologies__softskills__wrapper"]}>
                <h3 className={s["technologies__softskills__title"]}>
                  Soft skills
                </h3>
                <ul className={s["technologies__softskills__list"]}>
                  {softskills.map((name) => (
                    <li
                      className={s["technologies__softskills__item"]}
                      key={nanoid()}
                      id={nanoid()}
                    >
                      <h3>{name}</h3>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Technologies;

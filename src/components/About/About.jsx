import Container from "../Container/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import s from "./About.module.css";
import { TbMedal } from "react-icons/tb";
import { AiOutlineProject } from "react-icons/ai";
import { MdOutlineFeedback } from "react-icons/md";

const About = () => {
  const clases = s["react-tabs__tab"];
  return (
    <div className={s["about"]} id="about">
      <Container>
        <div className={s["about__container"]}>
          <p className={s["about__suptitle"]}>My intro</p>
          <h2 className={s["about__title"]}>About me</h2>

          <Tabs className={s["react-tabs"]}>
            <TabList className={s["react-tabs__tab-list"]}>
              <Tab className={clases}>
                <span className={s["tab__icon"]}>
                  <TbMedal />
                </span>
                Experience
              </Tab>
              <Tab className={clases}>
                <span className={s["tab__icon"]}>
                  <AiOutlineProject />
                </span>
                Projects
              </Tab>
              <Tab className={clases}>
                <span className={s["tab__icon"]}>
                  <MdOutlineFeedback />
                </span>
                Feedback
              </Tab>
            </TabList>

            <TabPanel
              className={
                s[
                  "react-tabs__tab-panel react-tabs__tab-panel--selected panel-content"
                ]
              }
            >
              <h2 className={s["tabs__h2"]}>
                😥 | Unfortunately, I have no work experience, but this is not
                for long and I am ready to develop and improve my skills.
              </h2>
            </TabPanel>
            <TabPanel
              className={
                s[
                  "react-tabs__tab-panel react-tabs__tab-panel--selected panel-content"
                ]
              }
            >
              <h2 className={s["tabs__h2"]}>
                📈 | I have three team and one individual project. They show the
                technologies that I used. You can find them below.
              </h2>
            </TabPanel>
            <TabPanel
              className={
                s[
                  "react-tabs__tab-panel react-tabs__tab-panel--selected panel-content"
                ]
              }
            >
              <h2 className={s["tabs__h2"]}>
                📩 | There are many social networks where you can write to me. I
                am online 24/7. They are listed below.
              </h2>
            </TabPanel>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default About;

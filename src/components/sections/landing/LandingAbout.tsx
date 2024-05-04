import { useTranslation } from "react-i18next";
import { aboutData } from "../../../helpers/constants";
import AboutCard from "../../cards/AboutCard";

const LandingAbout = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <section className="landing__about">
      <div className="about-content">
        <div className="header">
          <h2 dangerouslySetInnerHTML={{ __html: t("about.title") }} />
        </div>
        <div className="content">
          <div className="row gy-5 gx-4">
            {aboutData.map((item, index) => (
              <div key={index} className={item.col_indice}>
                <AboutCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;

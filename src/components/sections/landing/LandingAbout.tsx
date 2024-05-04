import { aboutData } from "../../../helpers/constants";
import AboutCard from "../../cards/AboutCard";

const LandingAbout = (): JSX.Element => {
  return (
    <section className="landing__about">
      <div className="about-content">
        <div className="header">
          <h2>
            Tout ce dont vous avez <span>besoin</span>
          </h2>
        </div>
         <div className="row gy-5 gx-4">
            {aboutData.map((item, index) => (
              <div key={index} className={item.col_indice}>
                <AboutCard {...item} />
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default LandingAbout;

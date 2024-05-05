import { useTranslation } from "react-i18next";
import FadeAnimation from "../../animations/FadeAnimations";
// import TextAnimation from "../../animations/TextAnimation";
// import { useEffect } from "react";

const LandingHero = (): JSX.Element => {
  const { t } = useTranslation();
  // const { divRef } = TextAnimation();

  // useEffect(() => {}, [i18n.language]);

  return (
    <section className="landing__hero">
      <div className="hero-content">
        <FadeAnimation direction="left">
          <button className="btn btn-top">
            {t("hero.button_top")} <span>{t("hero.button_top2")}</span>
            <img src="/arrow_right.svg" alt="" />
          </button>
        </FadeAnimation>
        <FadeAnimation direction="bottom">
          <div className="title">
            <h1 dangerouslySetInnerHTML={{ __html: t("hero.title") }} />
          </div>
        </FadeAnimation>
        <FadeAnimation direction="right">
          <p>{t("hero.text")}</p>
        </FadeAnimation>
        <button className="btn btn-bottom">{t("hero.button_bottom")}</button>
      </div>
    </section>
  );
};

export default LandingHero;

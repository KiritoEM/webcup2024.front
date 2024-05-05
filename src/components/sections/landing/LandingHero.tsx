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
            La solution à vos problèmes <span>Voir plus</span>
            <img src="/arrow_right.svg" alt="" />
          </button>
        </FadeAnimation>
        <FadeAnimation direction="bottom">
          <div className="title">
            <h1
              // key={t("hero.title")}
              dangerouslySetInnerHTML={{ __html: t("hero.title") }}
            />
          </div>
        </FadeAnimation>
        <FadeAnimation direction="right">
          <p>
            Nos anges gardiens sont là pour vous aider dans le deuil, les tâches
            ménagères, le soutien émotionnel et bien plus encore
          </p>
        </FadeAnimation>
        <button className="btn btn-bottom">Se connecter</button>
      </div>
    </section>
  );
};

export default LandingHero;

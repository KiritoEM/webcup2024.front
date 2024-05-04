const LandingHero = (): JSX.Element => {
  return (
    <section className="landing__hero">
      <div className="hero-content">
        <button className="btn btn-top">
          La solution à vos problèmes <span>Voir plus</span>
          <img src="/arrow_right.svg" alt="" />
        </button>
        <h1>
          {" "}
          Dans l'obscurité, nous apportons la <span>lumière</span>{" "}
        </h1>
        <p>
          Nos anges gardiens sont là pour vous aider dans le deuil, les tâches
          ménagères, le soutien émotionnel et bien plus encore
        </p>
        <button className="btn btn-bottom">Se connecter</button>
      </div>
    </section>
  );
};

export default LandingHero;

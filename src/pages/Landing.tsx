import LandingLayout from "../components/layouts/LandingLayout";
import LandingHero from "../components/sections/landing/LandingHero";
import LandingTarif from "../components/sections/landing/LandingTarif";

const Landing = (): JSX.Element => {
  return (
    <section className="landing">
      <LandingLayout>
        <LandingHero />
        <LandingTarif />
      </LandingLayout>
    </section>
  );
};

export default Landing;

import LandingLayout from "../components/layouts/LandingLayout";
import LandingAbout from "../components/sections/landing/LandingAbout";
import LandingAngel from "../components/sections/landing/LandingAngel";
import LandingHero from "../components/sections/landing/LandingHero";
import LandingTarif from "../components/sections/landing/LandingTarif";

const Landing = (): JSX.Element => {
  return (
    <section className="landing">
      <LandingLayout>
        <LandingHero />
        <LandingAbout />
        <LandingAngel />
        <LandingTarif />
      </LandingLayout>
    </section>
  );
};

export default Landing;

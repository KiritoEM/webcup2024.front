import LandingLayout from "../components/layouts/LandingLayout";
import LandingAbout from "../components/sections/landing/LandingAbout";
import LandingHero from "../components/sections/landing/LandingHero";
import LandingFooter from "../components/sections/landing/LandingFooter";
const Landing = (): JSX.Element => {
  return (
    <section className="landing">
      <LandingLayout>
        <LandingHero />
        <LandingAbout />
        <LandingFooter />
      </LandingLayout>
    </section>
  );
};

export default Landing;

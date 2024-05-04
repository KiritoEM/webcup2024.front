import LandingLayout from "../components/layouts/LandingLayout";
import LandingHero from "../components/sections/landing/LandingHero";

const Landing = (): JSX.Element => {
  return (
    <section className="landing">
      <LandingLayout>
        <h1>hello world</h1>
        <LandingHero />
      </LandingLayout>
    </section>
  );
};

export default Landing;

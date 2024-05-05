import LandingLayout from "../components/layouts/LandingLayout";
import LandingAbout from "../components/sections/landing/LandingAbout";
import LandingAngel from "../components/sections/landing/LandingAngel";
import LandingHero from "../components/sections/landing/LandingHero";
import LandingTarif from "../components/sections/landing/LandingTarif";
import ChabotContainer from "../components/chat-bot/ChatBotContainer";
import LandingFooter from "../components/sections/landing/LandingFooter";
const Landing = (): JSX.Element => {
  return (
    <section className="landing">
      <LandingLayout>
        <ChabotContainer />
        <LandingHero />
        <LandingAbout />
        <LandingAngel />
        <LandingTarif />
        <LandingFooter />
      </LandingLayout>
    </section>
  );
};

export default Landing;

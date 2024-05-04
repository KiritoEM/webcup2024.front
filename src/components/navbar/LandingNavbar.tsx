import { useNav } from "../../hooks/useNav";

const LandingNavbar = (): JSX.Element => {
  const { openMenu } = useNav();
  return (
    <nav
      className={`landing-navbar ${openMenu && "open-nav-responsive"}`}
    ></nav>
  );
};

export default LandingNavbar;

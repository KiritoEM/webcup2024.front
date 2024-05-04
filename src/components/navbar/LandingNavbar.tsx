const LandingNavbar = (): JSX.Element => {
  return (
    <nav
      className={`landing-navbar ${openMenu && "open-nav-responsive"}`}
    ></nav>
  );
};

export default LandingNavbar;

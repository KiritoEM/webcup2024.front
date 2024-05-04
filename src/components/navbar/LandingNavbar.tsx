import { useNav } from "../../hooks/useNav";

const LandingNavbar = (): JSX.Element => {
  const { openMenu } = useNav();
  return (
    <nav className={`landing-navbar ${openMenu && "open-nav-responsive"}`}>
      {/* section1 */}
      <div className="nav-section1">
        <ul>
          
        </ul>
      </div>
    </nav>
  );
};

export default LandingNavbar;

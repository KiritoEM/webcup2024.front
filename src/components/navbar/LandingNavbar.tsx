import { useTranslation } from "react-i18next";
import { navList } from "../../helpers/constants";
import { useNav } from "../../hooks/useNav";

const LandingNavbar = (): JSX.Element => {
  const { openMenu } = useNav();
  const { t } = useTranslation();

  return (
    <nav className={`landing-navbar ${openMenu && "open-nav-responsive"}`}>
      {/* section1 */}
      <div className="nav-section1">
        <ul>
          {navList.navSection01.map((item, index) => (
            <li key={index}>{t(item.key)}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default LandingNavbar;

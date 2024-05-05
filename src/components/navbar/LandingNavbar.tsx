import { useTranslation } from "react-i18next";
import { navList } from "../../helpers/constants";
import { useNav } from "../../hooks/useNav";
import { Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";

const LandingNavbar = (): JSX.Element => {
  const { openMenu } = useNav();
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Fragment>
      <nav className={`landing-navbar ${openMenu && "open-nav-responsive"}`}>
        <div className="landing-navbar__container">
          {/* section1 */}
          <div className="nav-section1">
            <ul>
              {navList.navSection01.map((item, index) => (
                <li key={index}>
                  <a href="">{t(item.key)}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* logo */}
          <div className="logo">
            <img src="/logo.png" alt="" />
          </div>

          {/* section2 */}
          <div className="nav-section2">
            <ul>
              <li>
                <img src="/fr.svg" alt="" />
                Fr
              </li>
              <li>
                <a href="">{t("nav02.FAQ")}</a>
              </li>
              <li>
                <button className="btn" onClick={() => navigate("/login")}>
                  {t("nav02.button")}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default LandingNavbar;

import { dashboardnavData } from "../../helpers/constants";

const DashboardNav = (): JSX.Element => {
  return (
    <nav className="dashboard-nav">
      <div className="nav-container">
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
        <div className="nav-items">
          <ul>
            {dashboardnavData.map((item, index) => (
              <li
                key={index}
                id={window.location.pathname === item.url ? "nav-active" : ""}
              >
                <img
                  src={
                    window.location.pathname === item.url
                      ? item.icon_active
                      : item.icon
                  }
                  alt=""
                />{" "}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="line"></div>
        <div className="settings">
          <p>
            <img src="/settings.svg" alt="" /> Paramètres
          </p>
        </div>
        <div className="account">
          <img src="/default-user.png" alt="" />
          <div className="user-info">
            <h6>Junnot d 'Avis</h6>
            <p>Paramètres</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;

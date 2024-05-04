const DashboardHeader = (): JSX.Element => {
  return (
    <header className="dashboard-header">
      <div className="search-bar">
        <img src="/search.png" alt="" />
        <input type="text" placeholder="Rechercher..." />
      </div>
      <div className="notification">
        <img src="/Bell.png" alt="" />
      </div>
      <div className="user">
        <img src="/default-user.png" alt="" />
        <p>
          Connecté en tant que <span>Junnot D’avis</span>
        </p>
      </div>
    </header>
  );
};

export default DashboardHeader;

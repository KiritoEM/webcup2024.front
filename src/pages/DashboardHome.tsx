import DashboardHeader from "../components/headers/DashboardHeader";
import Dashboardlayout from "../components/layouts/Dashboardlayout";

const DashboardHome = (): JSX.Element => {
  return (
    <section className="dashboard__home">
      <Dashboardlayout>
        <div className="home-content">
          <DashboardHeader />
        </div>
      </Dashboardlayout>
    </section>
  );
};

export default DashboardHome;

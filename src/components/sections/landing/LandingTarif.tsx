import { useTranslation } from "react-i18next";
import { tarifData } from "../../../helpers/constants";
import TarifCard from "../../cards/TarifCard";

const LandingTarif = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <section className="landing__tarif">
      <div className="tarif-content">
        <div className="header">
          <h2 dangerouslySetInnerHTML={{ __html: t("tarif.title") }} />
        </div>
        <div className="content row">
          <div className="row">
            {tarifData.map((tarif, index) => (
              <div className="col-4" key={index}>
                <TarifCard {...tarif} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTarif;

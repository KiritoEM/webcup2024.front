import { useTranslation } from "react-i18next";
import { ItarifCard } from "../../utils/interfaces";

const TarifCard = ({
  button,
  engagement,
  price,
  subtitle,
  text,
  id,
}: ItarifCard): JSX.Element => {
  const { t } = useTranslation();

  return (
    <article className="tarif-card" id={id}>
      <div className="details">
        <h2 dangerouslySetInnerHTML={{ __html: t(subtitle) }} />
        <p dangerouslySetInnerHTML={{ __html: t(text) }} />
        <div className="line"></div>
        <div className="price">
          <h1>
            Ar {price}K <span>/mois</span>
          </h1>
        </div>
        <p dangerouslySetInnerHTML={{ __html: t(engagement) }} />
      </div>
      <div className="button">
        <button className="btn">{t(button)}</button>
      </div>
    </article>
  );
};

export default TarifCard;

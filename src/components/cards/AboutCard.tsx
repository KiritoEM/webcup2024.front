import { useTranslation } from "react-i18next";
import { IaboutCard } from "../../utils/interfaces";

const AboutCard = ({ image, text, subtitle, id }: IaboutCard): JSX.Element => {
  const { t } = useTranslation();
  return (
    <article
      className="about-card"
      style={{ backgroundImage: `url(${image})`}}
      id={id}
    >
      <div className="content">
        <h4>{t(subtitle)}</h4>
        <p>{t(text)}</p>
      </div>
    </article>
  );
};

export default AboutCard;

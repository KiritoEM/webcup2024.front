import { useTranslation } from "react-i18next";
import { IauthInput } from "../../utils/interfaces";

const AuthInput = ({ label, name, placeholder }: IauthInput): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="auth-input">
      <label htmlFor="auth-input">{t(label)}</label>
      <input
        type="text"
        id="auth-input"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default AuthInput;

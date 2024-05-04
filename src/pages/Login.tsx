import { useTranslation } from "react-i18next";
import AuthHeader from "../components/headers/AuthHeader";
import AuthInput from "../components/inputs/AuthInput";

const Login = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <section className="login auth">
      <div className="form-container">
        <AuthHeader title={t("login.title")} />
        <AuthInput label="auth.email" name="" placeholder="exampl@gmail.com" />
        <AuthInput label="auth.password" name="" placeholder="••••••••••" />
        <div className="options">
          <div className="save">
            <input type="checkbox" name="" id="" /> {t("auth.save_email")}
          </div>
          <p className="forgot-password">{t("auth.forgot_password")}</p>
        </div>
        <div className="button">
          <button className="btn">Se connecter</button>
        </div>
        <p className="signup-link">
          Nouveau ici?<span> Créer un compte</span>
        </p>
      </div>
    </section>
  );
};

export default Login;

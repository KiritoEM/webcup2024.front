import { useTranslation } from "react-i18next";
import AuthHeader from "../components/headers/AuthHeader";
import AuthInput from "../components/inputs/AuthInput";
import { useNavigate } from "react-router-dom";
import authServices from "../services/authServices";

const Login = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = authServices();
  return (
    <section className="login auth">
      <form
        action="post"
        className="form-container"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => login(e)}
      >
        <AuthHeader title={t("login.title")} />
        <AuthInput label="auth.email" name="email" placeholder="example@gmail.com" />
        <AuthInput label="auth.password" name="password" placeholder="••••••••••" />
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
          Nouveau ici?
          <span onClick={() => navigate("/signup")}> Créer un compte</span>
        </p>
      </form>
    </section>
  );
};

export default Login;

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
      </div>
    </section>
  );
};

export default Login;

import { useTranslation } from "react-i18next";
import AuthHeader from "../components/headers/AuthHeader";

const Login = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <section className="login auth">
      <div className="form-container">
        <AuthHeader title={t("login.title")} />
      </div>
    </section>
  );
};

export default Login;

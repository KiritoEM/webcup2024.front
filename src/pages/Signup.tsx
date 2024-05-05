import { useTranslation } from "react-i18next";
import AuthHeader from "../components/headers/AuthHeader";
import AuthInput from "../components/inputs/AuthInput";

const Signup = () => {
  const { t } = useTranslation();
  return (
    <section className="login auth">
      <div className="form-container">
        <AuthHeader title={t("signup.title")} />
        <AuthInput
          label="auth.localisation"
          name=""
          placeholder="Votre localisation"
        />
        <AuthInput label="auth.name" name="" placeholder="Votre nom" />
        <AuthInput label="auth.email" name="" placeholder="example@gmail.com" />
        <AuthInput label="auth.password" name="" placeholder="••••••••••" />
        <div className="button">
          <button className="btn">S 'inscrire</button>
        </div>
      </div>
    </section>
  );
};

export default Signup;

import AuthHeader from "../components/headers/AuthHeader";
import AuthInput from "../components/inputs/AuthInput";

const Signup = () => {
  return (
    <section className="login auth">
      <div className="form-container">
        <AuthHeader title="Créer un compte" />
        <AuthInput
          label="Localisation"
          name=""
          placeholder="Votre localisation"
        />
        <AuthInput label="Nom" name="" placeholder="Votre nom" />
        <AuthInput label="Email" name="" placeholder="example@gmail.com" />
        <AuthInput label="Mot de passe" name="" placeholder="••••••••••" />
        <div className="button">
          <button className="btn">S 'inscrire</button>
        </div>
      </div>
    </section>
  );
};

export default Signup;

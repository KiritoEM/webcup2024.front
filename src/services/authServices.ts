/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function authServices() {
  const navigate = useNavigate();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const form = e.currentTarget;
      const password = form["password"].value;
      const email = form["email"].value;

      console.log(email, password);

      const loginResponse = await axios.post(
        `http://trimobe.madagascar.webcup.hodi.host/api/auth/login`,
        {
          password,
          email,
        }
      );
      if (loginResponse.status === 200) {
        navigate("/dashboard/home");
        form["password"].value = "";
        form["email"].value = "";
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { login };
}

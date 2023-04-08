import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useLoginMutation } from "../../redux/slices/bookApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToken } from "../../redux/slices/tokenSlice";
import { addUser } from "../../redux/slices/userSlice";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if ((email && password) === "") {
      toast.error("Email and password fields cannot be empty");
      return;
    } else {
      await login({ email, password })
        .unwrap()
        .then(
          ({
            accessToken,
            sid,
            refreshToken,
            userData: { name, email, id, goingToRead, currentlyReding, finishedReading },
          }) => {
            Cookies.set("token", accessToken);
            if (accessToken) {
              dispatch(addUser({ name, email, id, goingToRead, currentlyReding, finishedReading, sid, refreshToken }));
            }
          }
        )
        .catch(() => {
          toast.warn("Please check your email address or password");
        });
      const token = Cookies.get("token");
      if (token === undefined) {
        return;
      }
      dispatch(addToken(token));
      navigate("/");
      form.reset();
    }
  };

  const { form, label, input, logBtn } = styles;

  return (
    <form className={form} onSubmit={handleSubmit} autoComplete="off">
      <label className={label}>
        Email
        <input className={input} type="email" name="email" />
      </label>
      <label className={label}>
        Password
        <input className={input} type="password" name="password" />
      </label>
      <button className={logBtn} type="submit">
        Log In
      </button>
    </form>
  );
};

import Cookies from "js-cookie";
import { useLoginMutation } from "../../../redux/slices/bookApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToken } from "../../../redux/slices/tokenSlice";
import { addUser } from "../../../redux/slices/userSlice";
import {
  Form,
  LabelForm,
  InputForm,
  LoginBtn,
  PasswordVisibility,
  NotificationBox,
} from "./LoginForm.styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPswVisible, setIsPswVisible] = useState(false);

  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
            userData: {
              name,
              email,
              id,
              goingToRead,
              currentlyReding,
              finishedReading,
            },
          }) => {
            Cookies.set("token", accessToken);
            if (accessToken) {
              dispatch(
                addUser({
                  name,
                  email,
                  id,
                  goingToRead,
                  currentlyReding,
                  finishedReading,
                  sid,
                  refreshToken,
                })
              );
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
      resetForm();
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelForm>
        Email<span>*</span>
        <InputForm
          type="email"
          name="email"
          placeholder="your@email.com"
          onChange={inputChange}
        />
      </LabelForm>
      <LabelForm>
        Password<span>*</span>
        <InputForm
          type={isPswVisible ? "text" : "password"}
          name="password"
          placeholder="Password"
          onChange={inputChange}
        />
        {password && (
          <PasswordVisibility
            type="button"
            onClick={() => setIsPswVisible((isPswVisible) => !isPswVisible)}
          >
            {isPswVisible ? <RxEyeOpen /> : <RxEyeClosed />}
          </PasswordVisibility>
        )}
      </LabelForm>
      <LoginBtn type="submit">Login</LoginBtn>
      <NotificationBox />
    </Form>
  );
};

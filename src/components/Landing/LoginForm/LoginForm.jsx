import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useLoginMutation } from "../../../redux/slices/bookApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToken } from "../../../redux/slices/tokenSlice";
import { addUser } from "../../../redux/slices/userSlice";
import { Form, LabelForm, InputForm, LoginBtn } from "./LoginForm.styled"; 

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

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelForm>
        Email<span>*</span>
        <InputForm type="email" name="email" placeholder="your@email.com" />
      </LabelForm>
      <LabelForm>
        Password<span>*</span>
        <InputForm type="password" name="password" placeholder="Password" />
      </LabelForm>
      <LoginBtn type="submit">
        Login
      </LoginBtn>
    </Form>
  );
};

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../../redux/slices/bookApi";
import {
  Form,
  LabelForm,
  InputForm,
  RegisterBtn,
  PasswordVisibility,
  NotificationBox,
} from "./RegisterForm.styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPswVisible, setIsPswVisible] = useState(false);
  const [isConfirmPswVisible, setIsConfirmPswVisible] = useState(false);

  const [register] = useRegisterMutation();
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const navigate = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "confirm") {
      setConfirmPassword(value);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      setIsConfirmPassword(false);
    }
    if (confirmPassword === password) {
      setIsConfirmPassword(true);
      await register({ name, email, password })
        .unwrap()
        .then(() => {
          toast.success("Now you can use your credentials to login");
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 3000);
        })
        .catch(() => {
          toast.warn(`User with ${email} already exists`);
        });
      resetForm();
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelForm>
        Username<span>*</span>
        <InputForm
          type="text"
          name="name"
          required
          placeholder="Username"
          onChange={inputChange}
        />
      </LabelForm>
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
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
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
      <LabelForm>
        Confirm Password<span>*</span>{" "}
        {!isConfirmPassword && <span>Incorrect</span>}
        <InputForm
          type={isConfirmPswVisible ? "text" : "password"}
          name="confirm"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
          placeholder="Confirm Password"
          onChange={inputChange}
        />
        {confirmPassword && (
          <PasswordVisibility
            type="button"
            onClick={() => setIsConfirmPswVisible((isPswVisible) => !isPswVisible)}
          >
            {isConfirmPswVisible ? <RxEyeOpen /> : <RxEyeClosed />}
          </PasswordVisibility>
        )}
      </LabelForm>
      <RegisterBtn type="submit">Register</RegisterBtn>
      <NotificationBox />
    </Form>
  );
};

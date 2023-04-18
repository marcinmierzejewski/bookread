import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../../redux/slices/bookApi";
import { Form, LabelForm, InputForm, RegisterBtn, NotificationBox } from "./RegisterForm.styled";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const RegisterForm = () => {
  const [register] = useRegisterMutation();
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (confirm !== password) {
      setIsConfirmPassword(false);
    }
    if (confirm === password) {
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
      form.reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelForm>
        Username<span>*</span>
        <InputForm type="text" name="name" required placeholder="Username" />
      </LabelForm>
      <LabelForm>
        Email<span>*</span>
        <InputForm type="email" name="email" placeholder="your@email.com" />
      </LabelForm>
      <LabelForm>
        Password<span>*</span>
        <InputForm
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
          placeholder="Password"
        />
      </LabelForm>
      <LabelForm>
        Confirm Password<span>*</span>{" "}
        {!isConfirmPassword && <span>Incorrect</span>}
        <InputForm
          type="password"
          name="confirm"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
          placeholder="Confirm Password"
        />
      </LabelForm>
      <RegisterBtn type="submit">Register</RegisterBtn>
      <NotificationBox />
    </Form>
  );
};

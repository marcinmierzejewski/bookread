import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const Form = styled.form`
  display: block;
  max-width: 400px;  
  margin: 0 auto;
  padding-inline: 25px;
  padding-top: 30px;
  @media screen and (min-width: 480px) {
    background-color: #ffffff;
    margin-top: 70px;
  }
  @media screen and (min-width: 768px) {
    padding-inline: 40px;
  }
`;
export const LabelForm = styled.label`
  display: block;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 38px;
  > span {
    color: var(--color-accent);
    margin-left: 5px;
  }  
  @media screen and (min-width: 480px) {
    color: #898f9f;
  }
`;
export const InputForm = styled.input`
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 5px;
  border: 2px solid transparent;
  padding-left: 13px;
  outline: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #F5F7FA;
  &::placeholder {
    color: #A6ABB9;
  }
  &:focus {
    border: 2px solid var(--color-accent);
  }
`;
export const LoginBtn = styled.button`
  border: none;
  display: block;
  margin: 0 auto;
  width: 100%;
  padding: 11px;
  margin-top: 30px;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgb(97, 92, 92);
  transition: all 250ms linear;
  font-weight: 600;
  font-size: 16px;
  line-height: 38px;
  background-color: var(--color-accent);
  color: #ffffff;

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 3px rgb(97, 92, 92);
    background-color: var(--color-accent);
  }
  &:hover {
    background-color: var(--color-hover);
    color: #ffffff;
  }
`;

export const NotificationBox = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    max-width: 100%;
  }
  .Toastify__toast {
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
    background: var(--color-hover);
  }
`;
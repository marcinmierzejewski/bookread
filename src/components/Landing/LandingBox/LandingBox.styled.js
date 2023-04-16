import styled from "styled-components";
import bgImage from "../LoginForm/images/background3.png";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;
export const LandingFormBox = styled.div`
  flex-grow: 1;
  min-width: 50%;
  background-image: linear-gradient(rgba(9, 30, 63, 0.8), rgba(9, 30, 63, 0.8)),
    url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const ContentBox = styled.div`
  flex-grow: 1;
`;

export const LoginBtnSwitch = styled.button`
  display: block;
  width: 100%;
  max-width: 400px;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 38px;
  padding-top: 5px;
  padding-bottom: 11px;
  text-decoration: underline;
  margin: 0 auto;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  color: var(--color-accent);
  @media screen and (min-width: 480px) {
    padding-bottom: 25px;
    background-color: #ffffff;
    margin-bottom: 70px;
  }
`;

export const RegisterSwitch = styled.p`
  display: block;
  width: 100%;
  max-width: 400px;
  align-items: center;
  text-align: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 38px;
  padding-top: 5px;
  padding-bottom: 11px;
  margin: 0 auto;
  color: #898F9F;
  @media screen and (min-width: 480px) {
    padding-bottom: 25px;
    background-color: #ffffff;
    margin-bottom: 70px;
  }
  > button {
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    color: var(--color-accent);
    text-decoration: underline;
  }
`;

import { useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import { LoginContent } from "../LoginContent/LoginContent";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { RegisterContent } from "../RegisterContent/RegisterContent";
import { LandingWrapper, LandingFormBox, ContentBox, LoginBtnSwitch, RegisterSwitch } from "./LandingBox.styled";

import ReactCardFlip from "react-card-flip";

export const LandingBox = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <LandingWrapper>
      <LandingFormBox>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div>
            <LoginForm />
            <LoginBtnSwitch onClick={() => setIsFlipped(true)}>Register</LoginBtnSwitch>
          </div>
          <div>
            <RegisterForm />
            <RegisterSwitch>Already have an account?<button onClick={() => setIsFlipped(false)}>Log in</button></RegisterSwitch>
          </div>
        </ReactCardFlip>
      </LandingFormBox>
      <ContentBox>
        {isFlipped ? <RegisterContent /> : <LoginContent />}
      </ContentBox>
    </LandingWrapper>
  );
};

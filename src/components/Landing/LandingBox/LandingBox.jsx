import { useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import ReactCardFlip from "react-card-flip";

export const LandingBox = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <LoginForm />
          <button onClick={() => setIsFlipped(true)}>Register</button>
        </div>
        <div>
          <RegisterForm />
          <button onClick={() => setIsFlipped(false)}>Login</button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

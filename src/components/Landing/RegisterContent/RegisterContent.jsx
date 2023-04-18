import { RegisterContentBox } from "./RegisterContent.styled";
import { SlArrowRight } from "react-icons/sl";

export const RegisterContent = () => {
  return (
    <RegisterContentBox>
      <h2>Books Reading</h2>
      <ul>
        <li>
          Will help you to
          <ul>
            <li>
              <SlArrowRight />
              Create your goal faster and proceed to read
            </li>
            <li>
              <SlArrowRight />
              Divide process proportionally for each day
            </li>
            <li>
              <SlArrowRight />
              Track your success
            </li>
          </ul>
        </li>
        <li>
          You may also
          <ul>
            <li>
              <SlArrowRight />
              Pose your own independent point of view
            </li>
            <li>
              <SlArrowRight />
              Improve your professional skills according to new knowledge
            </li>
            <li>
              <SlArrowRight />
              Become an interesting interlocutor
            </li>
          </ul>
        </li>
      </ul>
    </RegisterContentBox>
  );
};

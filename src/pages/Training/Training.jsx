import { Section } from "../../components/Section/Section";
import { TrainingWrapper } from "./Training.styled";
import { MyTraining } from "../../components/Training/MyTraining/MyTraining";

const Training = () => {
  return (
    <TrainingWrapper>
      <Section>
        <MyTraining />
      </Section>
      
    </TrainingWrapper>
  )
};

export default Training;
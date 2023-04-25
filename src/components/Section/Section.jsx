import { SectionBox, Wrapper } from "./Section.styled";

export const Section = ({ title, children }) => {
  return (
    <SectionBox>      
      <Wrapper>
        <h2>{title}</h2>
        {children}
      </Wrapper>
    </SectionBox>
  );
};

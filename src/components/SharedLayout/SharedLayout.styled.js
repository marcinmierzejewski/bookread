import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 1280px;
  margin: 0 auto;
  gap: 12px;
  height: 90px;
  font-size: 24px;

  > nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    font-size: 30px;
    justify-content: space-between;
  }
`;

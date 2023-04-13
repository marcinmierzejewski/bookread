import styled from "styled-components";

export const AppBarBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 25px;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
`;

export const Logo = styled.div`
  font-family: var(--font-abril);
  font-size: 20px;
  flex-grow: 1;
  text-align: ${(props) => (props.isUserLogin ? "left" : "center")};
  @media screen and (min-width: 480px) {
    text-align: left;
  }
`;

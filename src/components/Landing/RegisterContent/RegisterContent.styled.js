import styled from "styled-components";

export const RegisterContentBox = styled.div`
  display: block;
  max-width: 535px;
  padding-top: 30px;
  text-align: center;
  padding-inline: 25px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    padding-top: 60px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 120px;
  }

  > h2 {
    font-family: var(--font-abril);
    font-weight: 400;
    font-size: 34px;
    line-height: 38px;
    margin-bottom: 20px;
    @media screen and (min-width: 1280px) {
      margin-bottom: 52px;
    }
  }

  > ul > li {
    font-weight: 500;
    font-size: 20px;
    line-height: 38px;
    text-align: left;

    > ul {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      margin-top: 14px;
      margin-bottom: 20px;
      > li {
        display: flex;
        align-items: center;
        color: #898f9f;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 14px;
        > svg {
          color: var(--color-accent);
          height: 10px;
          margin-right: 5px;
        }
      }
    }
  }
`;

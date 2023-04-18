import styled from "styled-components";

export const LoginContentBox = styled.div`
  display: block;
  max-width: 400px;
  text-align: center;
  padding-inline: 45px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
  > p:first-child {
    font-family: var(--font-abril);
    font-weight: 400;
    font-size: 59px;
    margin-top: 20px;
    color: var(--color-accent);
    @media screen and (min-width: 768px) {
      font-size: 69px;
      margin-top: 80px;
    }
    @media screen and (min-width: 1280px) {
      margin-top: 120px;
    }
  }

  > p:nth-child(2) {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #242a37;
    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 38px;
    }
  }

  > p:nth-child(3) {
    width: max-content;
    margin: 0 auto;
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    color: #898f9f;
    border-top: 1px solid #898f9f;
    margin-top: 18px;
    @media screen and (min-width: 768px) {
      margin-top: 28px;
      font-size: 20px;
      line-height: 38px;
    }
  }
`;

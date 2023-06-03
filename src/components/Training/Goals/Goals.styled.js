import styled from "styled-components";

export const GoalsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);
  margin-bottom: 40px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 23px 45px 8px;
  }
`;
export const GoalsTitle = styled.div`
  background: #b1b5c2;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  width: 100%;
  flex-grow: 1;
  padding: 11px 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.9;
  text-align: center;
  color: #ffffff;
`;

export const GoalsContent = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 45px 0;
  }

  > li {
    width: 100px;
    font-weight: 700;
    font-size: 45px;
    line-height: 0.95;
    text-align: center;
    color: #091e3f;
    @media screen and (min-width: 768px) {
      font-size: 40px;
    }

    > span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      padding: 31px 37px;
      background: #f5f7fa;
      margin-bottom: 14px;
      box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
      @media screen and (min-width: 768px) {
        padding: 11px 37px;
        margin-bottom: 4px;
      }
    }

    > p {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      color: #898f9f;
      @media screen and (min-width: 768px) {
        font-size: 11px;
        line-height: 1.18;
      }
    }
  }

  > li:not(:last-child) {
    margin-right: 20px;
    @media screen and (min-width: 768px) {
      margin-right: 35px;
    }
  }
`;

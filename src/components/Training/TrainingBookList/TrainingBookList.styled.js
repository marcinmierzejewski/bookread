import styled from "styled-components";

export const FirstLine = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  > li {
    font-weight: 500;
    font-size: 14px;
    line-height: 38px;
    color: #898f9f;
  }

  > li:nth-child(1) {
    flex-grow: 6;
    width: 44%;
  }
  > li:nth-child(2) {
    flex-grow: 4;
    width: 32%;
  }
  > li:nth-child(3) {
    flex-grow: 1;
    width: 10%;
  }
  > li:nth-child(4) {
    flex-grow: 1;
    width: 10%;
  }
  > li:nth-child(5) {
    width: 300px;
  }
`;

export const BookItemBox = styled.li`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 178px;
  width: 270px;
  font-weight: 500;
  font-size: 14px;
  line-height: 38px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  position: relative;
  @media screen and (min-width: 768px) {
    min-height: 62px;
    width: 100%;
    flex-direction: row;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 30px;
  }

  &:not(:last-child) {
    margin-bottom: 15px;
    @media screen and (min-width: 768px) {
      margin-bottom: 10px;
    }
  }
  > p {
    font-size: 12px;
    line-height: 38px;
    width: 100%;
    justify-content: flex-start;
    &:not(:first-child) {
      @media screen and (max-width: 768px) {
        padding-left: 55px;
      }
      > span {
        display: inline-block;
        font-weight: 500;
        font-size: 12px;
        line-height: 38px;
        width: 50px;
        margin-right: 25px;
        color: #898f9f;
        @media screen and (min-width: 768px) {
          display: none;
        }
      }
    }
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
  > p:nth-child(1) {
    display: flex;
    align-items: center;
    line-height: 15px;
    padding-right: 30px;

    padding-left: 20px;
    @media screen and (min-width: 768px) {
      line-height: 17px;
      flex-grow: 6;
      width: 44%;
    }
    @media screen and (max-width: 768px) {
      margin-top: 18px;
      margin-bottom: 10px;
    }
    > span {
      display: flex;
      align-items: center;
      > svg {
        color: grey;
        width: 22px;
        height: 18px;
        margin-right: 13px;
        @media screen and (min-width: 768px) {
          margin-right: 20px;
        }
      }
    }
  }
  > p:nth-child(2) {
    @media screen and (min-width: 768px) {
      flex-grow: 4;
      width: 32%;
    }
  }
  > p:nth-child(3) {
    @media screen and (min-width: 768px) {
      flex-grow: 1;
      width: 10%;
    }
  }
  > p:nth-child(4) {
    @media screen and (min-width: 768px) {
      flex-grow: 1;
      width: 10%;
    }
  }
`;
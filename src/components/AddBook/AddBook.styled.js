import styled from "styled-components";

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: flex-end;
    > div:not(:last-child) {
      margin-right: 15px;
    }
  }

  > div > label {
    font-weight: 500;
    font-size: 14px;
    line-height: 38px;
    margin-top: 20px;
    color: #898f9f;
    > input {
      width: 100%;
      height: 42px;
      border: 2px solid var(--color-grey);
      padding-left: 13px;
      outline: none;
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      background-color: #f5f7fa;
      &::placeholder {
        color: #a6abb9;
      }
      &:focus {
        border: 2px solid var(--color-accent);
      }
    }
  }
`;

export const TitleBox = styled.div``;

export const BookItem = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    > label:not(:last-child) {
      margin-right: 27px;
    }
    > label:nth-child(1) {
      width: 50%;
    }
    > label:nth-child(2) {
      width: 25%;
    }
    > label:nth-child(3) {
      width: 25%;
    }
  }
`;

export const AddBookBtn = styled.button`
  width: 171px;
  height: 42px;
  margin: 0 auto;
  margin-top: 40px;
  font-weight: 500;
  font-size: 14px;
  line-height: 38px;
  background: transparent;
  border: 2px solid var(--color-accent);
  transition: 250ms;
  cursor: pointer;
  &:active {
    background-color: var(--color-accent);
  }
  &:hover {
    background-color: var(--color-hover);
    color: #ffffff;
  }
`;

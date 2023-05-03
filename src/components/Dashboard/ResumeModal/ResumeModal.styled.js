import styled from "styled-components";

export const ModalOverlay = styled.div`
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(21, 57, 90, 0.3);
  transition: all 250ms linear;
`;

export const Modal = styled.div`
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  background: #ffffff;
  display: block;
  padding-top: 17px;
  padding-bottom: 48px;
  padding-inline: 30px;
  gap: 50px;
  min-height: 420px;
  width: calc(100% - 30px);
  max-width: 570px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 5;
  transform: translate(-50%, -50%);
  transition: all 250ms linear;
  > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 38px;
    color: #242a37;
  }
`;

export const FormResume = styled.form`
  font-weight: 500;
  font-size: 16px;
  line-height: 38px;
  color: #242a37;
  > label {
    width: 100%;
    > textarea {
      display: block;
      border: 1px solid #a6abb9;
      width: 100%;
      resize: none;
      padding: 10px;
      height: 170px;
      &:focus {
        border: 1px solid var(--color-accent);
      }
    }
  }
  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 25px;
    flex-wrap: wrap;

    > button {
      font-weight: 500;
      font-size: 14px;
      line-height: 38px;
      text-align: center;
      min-width: 97px;
      background-color: #ffffff;
      cursor: pointer;
      @media screen and (min-width: 768px) {
        min-width: 130px;
      }
    }

    > button:last-child {
      color: #ffffff;
      background-color: var(--color-accent);
      border: none;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      margin-left: 15px;
      @media screen and (min-width: 768px) {
        margin-left: 30px;
      }
    }
  }
`;

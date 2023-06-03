import styled from "styled-components";

export const TrainingTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.9;
  text-align: center;
  color: #ffffff;
  background: #b1b5c2;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  padding: 11px 0;
  margin-bottom: 30px;
`;

export const TrainingForm = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    > div {
      position: relative;
      width: 250px;

      > input {
        width: 100%;
        height: 50px;
        border: 1px solid rgba(166, 171, 185, 1);
        color: rgba(166, 171, 185, 1);
        padding: 0 20px 0 50px;
        outline: none;
        transition: 250ms;
        &:focus {
        border: 1px solid var(--color-accent);
        }
      }

      > span {
        position: absolute;
        top: 16.5px;
        left: 13px;
         > svg {
          color: rgba(166, 171, 185, 1);
          width: 17px;
          height: 17px;
         }
      }
    }

    > div:first-child {
      margin-right: 45px;
    }
  }
`;

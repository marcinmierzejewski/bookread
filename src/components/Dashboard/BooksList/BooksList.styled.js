import styled from "styled-components";

export const BooksListBox = styled.ul`

  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const BookListTitle = styled.p`
  font-weight: 600;
  font-size: 19px;
  line-height: 38px;
`;

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
`;

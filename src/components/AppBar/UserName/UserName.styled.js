import styled from "styled-components";

export const UserNameBox = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-weight: 300;
    font-size: 14px;
    line-height: 38px;
    color: #242a37;
  }
`;

export const FirstNameLetter = styled.span`
  position: relative;
  margin-right: 24px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  line-height: 38px;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: -7px;
    left: -12px;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background-color: #f5f7fa;
    z-index: -1;
  }
`;

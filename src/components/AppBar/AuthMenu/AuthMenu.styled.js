import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AuthMenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Link = styled(NavLink)`
  /* padding: 8px 16px; */
  /* border-radius: 4px; */
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  transition: all 250ms linear;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: var(--color-hover);
  }

  &.active {
    color: var(--color-accent);
  }

  > a {
    display: flex;
    align-items: center;
  }

  > svg {
    color: var(--color-grey);
    height: 17px;
    width: 22px;
  }
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  > a:first-child {
    position: relative;
    margin-right: 20px;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: -7.5px;
      left: -5.5px;
      width: 33px;
      height: 33px;
      border-radius: 50%;
      background-color: #f5f7fa;
      z-index: -1;
    }
  }

  > a:last-child {
    position: relative;
    margin-right: 37px;
    @media screen and (min-width: 768px) {
      margin-right: 19px;
  }
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: -7.5px;
      right: -14px;
      width: 1px;
      height: 33px;
      background-color: #E0E5EB;
      z-index: 5;
      pointer-events: none;
    }
  }
`;

export const Letter = styled.span`
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
    top: 2px;
    left: -12px;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background-color: #f5f7fa;
    z-index: -1;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  text-decoration: underline;
  font-weight: 300;
  font-size: 14px;
  line-height: 38px;
  cursor: pointer;
`;

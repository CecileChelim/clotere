import styled from "styled-components";
import { Button, Dropdown } from "reactstrap";

export const ButtonPrimary = styled(Button)`
  background-color: #006855;
  border:0;
  font-size:18px;
  color:#fff;
  transition: background-color 200ms ease-in-out;
  color: #fff;
  padding: 14px 18px;
  border-radius: 8px;
  line-height: 100%;
  font-weight: 600;
  &:hover {
    background-color: #3260d9;
    svg {
      transition: all 0.5s ease;
      transform: translateX(10px);
    }
  }
`;

export const ButtonPrimarySmall = styled(ButtonPrimary)`
  font-size:16px;
  padding: 10px 18px;
`;
export const LinkS = styled.a`
  font-size:18px;
  color:#000;
  transition: all 200ms ease-in-out;
  padding: 18px 22px;
  border-radius: 8px;
  line-height: 100%;
  font-weight: 600;
  &:hover {
    color: #006855;
    svg {
      transition: all 0.5s ease;
      transform: translateX(10px);
    }
  }
`;
export const LinkCard = styled.a`
  font-size:16px;
  color:#006855;
  transition: all 200ms ease-in-out;
  line-height: 100%;
  font-weight: 400;
  margin-right:.8rem;
`;

export const DropdownPrimary = styled(Dropdown)`
  button.dropdown-toggle{
    background-color: #006855;
border:0;
font-size:18px;
color:#fff;font-weight:600;
  }
`;


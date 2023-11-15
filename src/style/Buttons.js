import styled from "styled-components";
import { Button } from "reactstrap";

export const ButtonPrimary = styled(Button)`
  background-color: #39a6a6;
  border-color: #39a6a6;
  transition: background-color 200ms ease-in-out;
  color: #fff;
  padding: 18px 22px;
  border-radius: 8px;
  font-size: 22px;
  line-height: 100%;
  font-weight: 600;
  letter-spacing: -0.87px;
  &:hover {
    background-color: #308c8c;
    border-color: #308c8c;
    svg {
      transition: all 0.5s ease;
      transform: translateX(10px);
    }
  }
`;
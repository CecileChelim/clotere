import styled from "styled-components";
import { Button, Dropdown } from "reactstrap";

export const ButtonPrimary = styled(Button)`
&.btn{
  border:0;
  font-size:18px;
  padding: 18px 24px;
  border-radius: 8px;
  line-height: 100%;
  font-weight: 600;
  transition: all 200ms ease-in-out;
  &:hover {
    transform: translate(0, -2px);
    svg {
      transition: all 0.5s ease;
      transform: translateX(10px);
    }
  }
  img{
    width: 20px;
    margin-left: 0.6rem;
  }
}
&.btn-primary{
  background-color: ${props => props.theme.colors.main}!important;
  color:${props => props.theme.colors.black};
  &:hover{
    background-color: ${props => props.theme.colors.mainDark};
  }
}
&.btn-white{
  background-color: ${props => props.theme.colors.white};
  color:${props => props.theme.colors.black};
  
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
    background-color: transparent;
border:0;
font-size:16px;
text-decoration:underline;
color:${props => props.theme.colors.black};
font-weight:600;
  }
`;


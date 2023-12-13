import styled from "styled-components";
import {Row} from "reactstrap";

export const TitlePage = styled.h1`
  font-size:22px;
  color:#000;
  font-weight:600;
`;
export const TitlePageBig = styled.h1`
  font-size:32px;
  color:#000;
  font-weight:600;
`;

export const TitlePageApp = styled(Row)`
margin-bottom: 2rem;
@media all and (max-width: 768px) {
  .col-md-7,.col-md-5{
    width:100%!important;
    text-align:center!important;
  }
}
`;




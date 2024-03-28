import styled from "styled-components";
import {
   Card
} from "reactstrap";

export const CardArticle = styled(Card)`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
border-radius:1rem;
a{
    font-weight: 600;
    color: ${props => props.theme.colors.greenDark};
}
.card-title{
    font-size: 18px;
    font-weight: 600;
}
.card-body{
    padding:2rem;
}
img.mainimg{
    height: 150px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
}
.card-blog-author{
    display:flex;
    margin-top:1rem;
    margin-bottom:1rem;
    .content-author{
        margin-left:1rem;
        p{margin-bottom:0;}
    }
    .read-time{
        font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.colors.main};
    }
}
`;
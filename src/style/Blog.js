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

export const ArticleContent = styled.div`
ol.breadcrumb{
    background-color:white;
    padding:20px 0;
    margin-bottom:0;
    .container{display:flex;}
    li.breadcrumb-item{
        a{
            font-weight: 500;
            color: ${props => props.theme.colors.greenDark};
            text-decoration:none;
            
        }
        &.active{
            color: ${props => props.theme.colors.main};font-weight: 500;
        }
    }
}//end breadcrumb
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
section{
    background-color:white;
    padding: 80px 0;
    a{
        font-weight: 600;
        color: ${props => props.theme.colors.greenDark};
    }
    h2{
        margin-top:2rem;
    }
    h1,h2,h3{
        font-size: 28px;
    font-weight: 700;
    line-height: 39.2px;
    color: ${props => props.theme.colors.greenDark};
    }
    p{
        font-size: 16px;
        font-weight: 400;
        color: ${props => props.theme.colors.greenDark};
    }

    //liste
    ul.list-group{
        li.list-group-item{
            border:0;
            padding-left: 2rem;
            h3{
                font-size:18px;
                font-size: 18px;
                border-left: 10px solid ${props => props.theme.colors.main};
                padding-left: 5px;
                border-radius: 4px;
            }
        }
    }
    .alert{
        background: linear-gradient(180deg, rgba(239, 234, 224, 1) 24%, rgba(255, 255, 255, 1) 100%)!important;
        border:0;
    }
}
`;

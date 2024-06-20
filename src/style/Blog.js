import styled from "styled-components";
import {
    Card,Container,Row
} from "reactstrap";

export const CardArticle = styled(Card)`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
border-radius:1rem;
min-height:530px;
overflow:hidden;
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
.EndBloc{
    position:absolute;
    bottom:0;
}
@media all and (max-width: 768px) {
    margin-bottom:2rem;
  }
`;

export const BlogAuthor = styled.div`
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
`;

export const ArticleContent = styled.div`
    .article{
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, .08);
    margin-bottom: 50px;
    padding: 3rem 4rem;
    position: relative;
    transition: .3s ease-in-out;
    }
ol.breadcrumb{
    padding:20px 0;
    margin-bottom:0;
    .container{display:flex;justify-content:center;}
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
section.content{
    a{
        font-weight: 600;
        color: ${props => props.theme.colors.greenDark};
    }
    h2{
        margin-top:2rem;
    }
    h1,h2,h3{
    color: #000;
    font-size: 30px;
    line-height: 1.2em;
    transition: all .3s ease-in-out;
    
    }
    p{
        font-size: 17px;
        line-height: 1.76em;
        padding-top: 35px;
        font-weight: 400;
        color:#403f3f;
    }

    .blog-quote {
    background: #f8fafc;
    border-left: 5px solid ${props => props.theme.colors.main};
    font-size: 18px;
    font-style: normal;
    line-height: 35px;
    margin: 16px 0 0;
    padding: 30px 40px;
    position: relative;
    z-index: 2;
}

    //liste
    ul.list-group{
    
        li.list-group-item{
            border:0;
            h3{
                font-size:18px;
                font-size: 18px;
                border-left: 10px solid ${props => props.theme.colors.main};
                border-radius: 4px;
            }
                ul{
                padding-left: 2rem;
                li{margin-bottom:.5rem;}
                }
        }
    }
    .alert{
        background: linear-gradient(180deg, rgba(239, 234, 224, 1) 24%, rgba(255, 255, 255, 1) 100%)!important;
        border:0;
    }
}
`;

export const RowArticle = styled(Row)`
display:flex!important;
align-items:stretch;
.col-article{height:100%!important;}
`;
export const ContainerListeArticle = styled(Container)`
padding:4rem 0;
 .post-meta {
  width: 100%;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, .08);
  margin-bottom: 50px;
  padding: 20px 20px;
  position: relative;
  transition: .3s ease-in-out;
  width: 100%;
  &:hover{
  transform: translateY(-10px);
  }
}
 .post-data {
  padding: 15px 35px 0 0;
}
 .post-meta .post-img {
  border-radius: 10px;
  overflow: hidden;
  background: #212121;
  position: relative;
}
 .post-meta .blog-title a {
  font-size: 24px;
  font-weight: 500;
  color: var(--heading);
  line-height: 1.44em;
  letter-spacing: -0.5px;
  margin: 15px 0 10px;
  transition: all 0.3s ease-in-out;
  text-decoration:none;
}
 .post-meta .blog-title:hover h5 {
  color: #6f6cff;
}

h3.blog-title {
  line-height:24px!important;
}
 .post-meta .read-btn {
  font-size: 17px;
  color: rgba(0, 0, 0, 0.5);
}
 .post-meta .read-btn:hover {
  text-decoration: underline;
  color: #000;
}
  
  @media all and (max-width: 768px) {
      .col-article{display:flex;flex-grow: 1!important;}
  }
`;

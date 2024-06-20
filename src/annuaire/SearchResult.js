import styled from "styled-components";

export const SearchResultS = styled.div`
padding: 10px 20px;
  .search-result:hover {
    background-color: #efefef;
  }
`;


    

export const SearchResult = ({ result }) => {
  return (
    <SearchResultS
      className="search-result"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </SearchResultS>
  );
};
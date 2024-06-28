 import React from 'react';
 import styled from "styled-components";

 export const PaginationS = styled.div`
li{
 background-color:#fff;
 border-radius:.3rem;
 padding:.5rem;
 padding:.4rem;
 margin-right:.5rem;
}
`;
 
const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
   const pageNumbers = [];
 
   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
   }
 
   return (
      <PaginationS className="pagination-container">
         <ul className="pagination">
            {pageNumbers.map((number) => (
               <li
                  key={number}
                  onClick={() => paginate(number)}
                  className="page-number"
               >
                  {number}
               </li>
            ))}
         </ul>
      </PaginationS>
   );
};
 
export default Paginate;
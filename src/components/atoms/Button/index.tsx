import styled from 'styled-components';

export default styled.button<{ textColor: string; bgColor: string }>`
   padding: 0.8rem;

   border-radius: 0.4rem;
   border: none;

   color: ${(props) => props.textColor};
   background-color: ${(props) => props.bgColor};

   cursor: pointer;

   &:hover {
      filter: brightness(1.2);
   }

   &:active {
      filter: brightness(1.4);
   }
`;

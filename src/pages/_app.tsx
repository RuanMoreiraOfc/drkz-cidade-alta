import { GlobalStyle } from '@styles/Globals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from '@pages/index';

export default MyApp;

function MyApp() {
   return (
      <Page>
         <GlobalStyle />

         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home />} />
            </Routes>
         </BrowserRouter>
      </Page>
   );
}

const Page = styled.div`
   max-width: 100%;
   min-height: 100vh;

   display: flex;
   align-items: center;
   justify-content: center;
`;

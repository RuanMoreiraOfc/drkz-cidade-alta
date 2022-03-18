import { GlobalStyle } from '@styles/Globals';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import styled from 'styled-components';

import store from '@store/index';

import MyApp from '@pages/_app';

const Page = styled.div`
   max-width: 100%;
   min-height: 100vh;

   display: flex;
   align-items: center;
   justify-content: center;
`;

ReactDOM.render(
   <React.StrictMode>
      <Page>
         <ReduxProvider store={store}>
            <GlobalStyle />
            <MyApp />
         </ReduxProvider>
      </Page>
   </React.StrictMode>,
   document.getElementById('root'),
);

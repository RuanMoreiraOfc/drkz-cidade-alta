import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthMiddleware from '@pages/authMiddleware';
import Login from '@pages/index';

export default MyApp;

type Props = {};

function MyApp({}: Props) {
   return (
      <BrowserRouter>
         <Routes>
            <Route //
               path='/'
               element={<AuthMiddleware render={<Login />} />}
            />
         </Routes>
      </BrowserRouter>
   );
}

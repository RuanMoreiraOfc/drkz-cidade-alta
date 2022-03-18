import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '@pages/index';

export default MyApp;

type Props = {};

function MyApp({}: Props) {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path='/' //
               element={<Home />}
            />
         </Routes>
      </BrowserRouter>
   );
}

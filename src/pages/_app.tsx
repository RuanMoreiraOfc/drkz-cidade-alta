import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AuthMiddleware from '@pages/authMiddleware';
import Login from '@pages/index';
import Dashboard from '@pages/dashboard';
import DashboardView from '@pages/dashboard/view';
import DashboardEdit from '@pages/dashboard/edit';
import DashboardCreate from '@pages/dashboard/create';

export default MyApp;

type Props = {};

function MyApp({}: Props) {
   const basename = import.meta.env.VITE_APP_BASE_URL;

   return (
      <BrowserRouter
         basename={typeof basename === 'boolean' ? undefined : basename}
      >
         <Routes>
            <Route //
               path='/'
               element={<AuthMiddleware render={<Login />} />}
            />
            <Route
               path='/dashboard'
               element={<AuthMiddleware render={<Dashboard />} />}
            />
            <Route
               path='/dashboard/view/*'
               element={<AuthMiddleware render={<DashboardView />} />}
            />
            <Route
               path='/dashboard/edit/*'
               element={<AuthMiddleware render={<DashboardEdit />} />}
            />
            <Route
               path='/dashboard/create'
               element={<AuthMiddleware render={<DashboardCreate />} />}
            />
            <Route
               path='*'
               element={
                  <AuthMiddleware
                     render={<Navigate to='/dashboard' replace />}
                  />
               }
            />
         </Routes>
      </BrowserRouter>
   );
}

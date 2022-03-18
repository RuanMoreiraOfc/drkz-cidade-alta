import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import type { StoreState } from '@store/index';

export default connect<Pick<Props, 'isAuthenticated'>, {}, {}, StoreState>(
   (state) => ({
      isAuthenticated: state.session.username !== null,
   }),
)(AuthMiddleware);

type Props = {
   isAuthenticated: boolean;
   render: JSX.Element;
};

function AuthMiddleware({ isAuthenticated, render }: Props) {
   const location = useLocation();

   if (isAuthenticated === true && location.pathname === '/') {
      return <Navigate to={'/dashboard'} replace />;
   }

   if (isAuthenticated === false && location.pathname !== '/') {
      return <Navigate to={'/'} replace />;
   }

   return render;
}

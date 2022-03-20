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
      const searchSplitted = location.search
         .slice(1)
         .replace(/&/g, '=')
         .split('=');
      const searchMap = searchSplitted.reduce(
         (result, cur, i, originalArr) =>
            (i + 1) / 2 === 0
               ? { ...result, [originalArr[i + 1]]: cur }
               : result,
         {} as Record<'next_redirect', string>,
      );

      return <Navigate to={searchMap.next_redirect || '/dashboard'} replace />;
   }

   if (isAuthenticated === false && location.pathname !== '/') {
      return <Navigate to={`/?next_redirect=${location.pathname}`} replace />;
   }

   return render;
}

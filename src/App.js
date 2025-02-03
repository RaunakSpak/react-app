import React, {lazy} from 'react';

const AppRoutes = lazy(() => import('./routes'));

function App() {
  return <AppRoutes />
}

export default React.memo(App);
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from './GlobalStyle';
import UserRoutes from './UserRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from '../redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing && <Loader />}
      {!isRefreshing && <UserRoutes />}
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

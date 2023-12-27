import { useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/auth/auth-operations';
import { Wrapper } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { Chip } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOutUser());

  return (
    <Wrapper>
      <p>Welcome, {user.name}</p>

      <Chip
        label="LogOut"
        variant="outlined"
        onClick={handleLogOut}
        sx={{
          border: '1px solid #dfcece',
          color: '#000000',
          textShadow: '-1px -1px 1px #ffffff31, 1px 1px 1px #00000031',
          boxShadow: 3,
        }}
      />
    </Wrapper>
  );
};

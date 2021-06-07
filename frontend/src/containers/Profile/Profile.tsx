import React, { FC } from 'react';
import { Box } from '@material-ui/core';
// import { useHistory } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Profile as ProfileComponent } from './Profile.styles';
import { ProfileProps } from './Profile.interface';
import { ProfileForm } from '../../components/ProfileForm';
import { useUser, useUpdateUserEmail } from '../../api';
import { getUserIdFromLocalStorage } from '../../api/api.helpers';

export const Profile: FC<ProfileProps> = () => {
  const user  = useUser({ userId: getUserIdFromLocalStorage()});
  const { mutate } = useUpdateUserEmail();
  
  // const history = useHistory();

  return (
  <ProfileComponent><Box flex={1} display="flex" alignItems="center" justifyContent="center">
    <Box width="30%" height="100%">
      <AccountCircle style={{ color: 'black', fontSize: 150, marginTop: 120, marginLeft: 80}} />
     
      </Box>
  <Box display="flex" flexDirection="column" width={320} gridRowGap={20}>
    <ProfileForm
       initialValues={{name: user.data?.username ?? '', username: user.data?.username ?? '', email: user.data?.email ?? '', userId: getUserIdFromLocalStorage()}}
       onSubmit={(data) =>{
          mutate({ data, params: {userId: getUserIdFromLocalStorage() } });
       }
      }
    />
  </Box>
</Box></ProfileComponent>
);
};

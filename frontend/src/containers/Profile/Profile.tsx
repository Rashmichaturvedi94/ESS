import React, { FC } from 'react';
import { Box } from '@material-ui/core';
// import { useHistory } from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Profile as ProfileComponent, IconBox } from './Profile.styles';
import { ProfileProps } from './Profile.interface';
import { ProfileForm } from '../../components/ProfileForm';
import { useUser, useUpdateUserEmail } from '../../api';
import { getUserIdFromLocalStorage } from '../../api/api.helpers';

export const Profile: FC<ProfileProps> = () => {
  const user  = useUser();
  const { mutate } = useUpdateUserEmail();
  
  // const history = useHistory();

  return (
  <ProfileComponent><Box flex={1} display="flex" alignItems="center" justifyContent="center">
    <IconBox>
      <PersonOutlineIcon style={{ color: 'black', fontSize: 200}}/>
    </IconBox>
  <Box display="flex" flexDirection="column" width={320} gridRowGap={20}>
    <ProfileForm
       initialValues={{name: user.data?.username ?? '', username: user.data?.username ?? '', email: user.data?.email ?? '', userId: getUserIdFromLocalStorage()}}
       onSubmit={(data) =>{
          mutate({ data, params: {userId: user.data?.id ?? 0 } });
       }
      }
    />
  </Box>
</Box></ProfileComponent>
);
};

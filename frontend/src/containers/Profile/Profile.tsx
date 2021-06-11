import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Profile as ProfileComponent, IconBox } from './Profile.styles';
import { ProfileProps } from './Profile.interface';
import { ProfileForm } from '../../components/ProfileForm';
import { useUserMe, useUpdateUserEmail } from '../../api';

export const Profile: FC<ProfileProps> = () => {
  const user  = useUserMe();
  const { mutate } = useUpdateUserEmail();

  return (
    <ProfileComponent>
      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        <IconBox>
          <PersonOutlineIcon style={{ color: 'black', fontSize: 200}}/>
        </IconBox>
        <Box display="flex" flexDirection="column" width={320} gridRowGap={20}>
          <ProfileForm
            initialValues={{name: user.data?.username ?? '', username: user.data?.username ?? '', email: user.data?.email ?? '', userId: user.data?.id ?? 0 }}
            onSubmit={(data) =>{
                mutate({ data, params: { userId: user.data?.id } });
            }
            }
          />
        </Box>
      </Box>
    </ProfileComponent>
  );
};

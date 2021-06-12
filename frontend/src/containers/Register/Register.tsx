import React, { FC } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { Register as RegisterComponent } from './Register.styles';
import { RegisterProps } from './Register.interface';
import { RegisterForm } from '../../components/RegisterForm';
import { paths } from '../../const/paths';
import { useRegister } from '../../api';

export const Register: FC<RegisterProps> = () => {
  const { error, mutate } = useRegister();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    history.push(paths.login);
  };

  return (
  <RegisterComponent>
    <Box flex={1} display="flex" alignItems="center" justifyContent="center">
      <Box style={{backgroundColor:'#C4C4C4'}} width="45%" height="100%">
        <ImportContactsIcon style={{ color: 'black', fontSize: 150, marginTop: 50, marginLeft: 150}} />
        <Typography variant="h2" component="h2" align='center'>
          Genious
        </Typography>
        <Typography variant="h3" align='center'>E-Learning</Typography>
      </Box>
      <Box display="flex" flexDirection="column" width="55%" gridRowGap={20}>
        <RegisterForm
          errors={error?.response?.data}
          onSubmit={(data) => mutate({ data }, { onSuccess:() => {setOpen(true); }  })}
        />
        <Dialog
            open={open}
            onClose={handleClose}
          >
          <DialogContent>
            <DialogContentText>
              Account successfully created.Please Login.
            </DialogContentText>
          </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        <Button
          fullWidth
          variant="text"
          onClick={() => history.push(paths.login)}
        >
          Already have an account? Login
        </Button>
      </Box>
    </Box>
  </RegisterComponent>
  );
};

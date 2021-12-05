import React, { useState, useEffect } from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';

import { messageService, SubjectData } from '../../resources/MessageService';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ToastMessage() {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [color, setColor] = useState<AlertColor>('success');

  const handleClose = (_event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const subscription = messageService
      .getMessage()
      .subscribe((data: SubjectData) => {
        setMessage(data.message);
        setColor(data.severity);
        setOpen(data.message !== '');
      });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity={color} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

import React, { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { Actor as ActorModel } from '../../types';
import { DialogTitleWrapper, DialogContent, ActorWrapper } from './style';

export default function Actor(props: { actor: ActorModel; isStar: boolean }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [dialogOpened, setOpenedDialogStatus] = useState<boolean>(false);

  const openModal = event => {
    event.preventDefault();
    setOpenedDialogStatus(true);
  };

  return (
    <>
      <ActorWrapper onClick={openModal} star={props.isStar}>
        {props.actor.name}
      </ActorWrapper>
      <Dialog
        open={dialogOpened}
        onClose={() => setOpenedDialogStatus(false)}
        fullScreen={fullScreen}
      >
        <DialogTitleWrapper>
          <DialogTitle>{props.actor.name}</DialogTitle>
          <IconButton onClick={() => setOpenedDialogStatus(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitleWrapper>
        <DialogContent dividers>
          <img src={props.actor.image} alt={props.actor.name} />
          {t('movieDetailsPage.character', {
            character: props.actor.asCharacter,
          })}
        </DialogContent>
      </Dialog>
    </>
  );
}

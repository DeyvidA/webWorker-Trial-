import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
  modal: {
    position: 'relative'
  },

  modalCloseButton: {
    padding: '7px',
    position: 'absolute',
    top: '13px',
    right: '13px',
    zIndex: 1,
    minWidth: 24,
    borderRadius: 24,

    '&:hover': {
      '& .MuiSvgIcon-root': {
        color: palette.text.secondary
      }
    },

    [breakpoints.down('xs')]: {
      position: 'fixed'
    }
  },

  modalCloseIcon: {
    color: '#6975AB'
  },

  scrollPaper: {
    alignItems: 'baseline'
  },

  dialogPaper: {
    overflowY: 'visible'
  }
}), { index: 1 });

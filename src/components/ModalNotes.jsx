import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CreateArea from './CreateArea';
import logo from "../images/worktalk.png"


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    backgroundColor:"rgba(198, 194, 247, 0.435)"
  },
}));

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button id="openButton" itemID="popover" aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
      ADD<img className="logoButton" src={logo} alt=""/>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
            <CreateArea />
        </Typography>
      </Popover>
    </div>
  );
}

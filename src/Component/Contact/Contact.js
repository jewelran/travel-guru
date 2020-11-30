import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Contact.css'
const Contact = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
      };
    return (
        <div>
      <Button className ="contact-btn" variant="outlined" color="primary" onClick={handleClickOpen}>
        contact
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <h1>Contact Now!</h1>
          </DialogContentText>
          <DialogContentText>
            To contact with me, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            placeholder="Enter your Email"
            label="Email Address"
            type="email"
            fullWidth
          />
           <TextField
            margin="dense"
            id="password"
            placeholder=" Enter your Password"
            label="Password"
            type="password"
            fullWidth
          />
          <TextField
            margin="dense"
            id="comment"
            label="Your comments!"
            type="text"
            placeholder= "write something here..."
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
           Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    );
};

export default Contact;
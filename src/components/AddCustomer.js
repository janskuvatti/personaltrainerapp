import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
export default function AddCustomer (props){
    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({

    firstname: '', 
    lastname: '',
    streetaddress: '',
    postcode: '',
    city: '', 
    email: '',
    phone: ''
});
const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const  handleNewInput = (e) => {
setCustomer({...customer, [e.target.name]: e.target.value})
  }
  const addCustomer = () => {
      props.saveNewCustomer(customer);

      handleClose();

  }
return(
    <div>
<Button style={{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}>
    Add new customer
</Button>
  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Add new customer</DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        name="firstname"
        value ={customer.firstname}
        label="Firstname"
        onChange={e => handleNewInput(e)}
        fullWidth
      />
        <TextField
        margin="dense"
        name="lastname"
        value ={customer.lastname}
        label="Lastname"
        onChange={e => handleNewInput(e)}
        fullWidth
      />
     <TextField
        margin="dense"
        name="streetaddress"
        value ={customer.streetaddress}
        label="Sreetaddress"
        onChange={e => handleNewInput(e)}
        fullWidth
      /> 
      <TextField
        margin="dense"
        name="postcode"
        value ={customer.postcode}
        label="Postcode"
        onChange={e => handleNewInput(e)}
        fullWidth
      />
      <TextField
        margin="dense"
        name="city"
        value ={customer.city}
        label="City"
        onChange={e => handleNewInput(e)}
        fullWidth
      />
      <TextField
        margin="dense"
        name="email"
        value ={customer.email}
        label="Email"
        onChange={e => handleNewInput(e)}
        fullWidth
      />
       <TextField
        margin="dense"
        name="phone"
        value ={customer.phone}
        label="Phone"
        onChange={e => handleNewInput(e)}
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      
      </Button>
      <Button onClick={addCustomer} color="primary">
        Save
      </Button>
    </DialogActions>
  </Dialog>

    </div>
);
}
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
export default function EditCustomer(props){
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
      console.log(props.customer); 
      setCustomer({ 
firstname: props.customer.firstname, 
      lastname: props.customer.lastname,
      streetaddress: props.customer.streetaddress,
      postcode: props.customer.postcode,
      city: props.customer.city, 
      email: props.customer.city,
      phone: props.customer.phone
    })
      setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
    const  handleNewInput = (e) => {
      setCustomer({...customer, [e.target.name]: e.target.value})
    }
    const updateCustomer = () => {
        props.updateCustomer(customer, props.customer.links[0].href);
        handleClose();
    }
   
    return(
        <div>
    <Button variant="contained"  color="primary"  size="small" onClick={handleClickOpen}>
        Edit
    </Button>
    
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Edit customer</DialogTitle>
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
      <Button onClick={updateCustomer} color="primary">
        Save
      </Button>
    </DialogActions>
  </Dialog>

        </div>
    );
}
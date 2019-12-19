import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
  
export default function AddTraining (props){
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

   

const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };
  const handleNewInput = (e) => {
    setTraining({...training, [e.target.name]: e.target.value});
};
const handleNewDate = (e) => {
    const newDate = moment(e.target.value).format();
    setTraining({...training, formatdate: e.target.value, date: newDate})
}
  const [training, setTraining] = React.useState({

    date: '',
    formatdate: '',
    duration: '',
    activity: '',
    customer: props.training.links[0].href,
 
});




  const addTraining = () => {
      props.saveNewTraining(training, props.training.links[0].href);
      handleClose();

  }
return(
    <div>
    <Button style={{margin: 10}} variant="outlined" color="secondary"  size="small" onClick={handleClickOpen}>

    Add Training
</Button>
  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Add new training</DialogTitle>
    <DialogContent>
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Trainings date"
        type="datetime-local"
        name="date"
        className={classes.textField}
        onChange={e => handleNewDate(e)}
value={training.formatdate}
        InputLabelProps={{
          shrink: true,
        }}
      />
  
    
     
        <TextField
        margin="dense"
        name="duration"
        value ={training.duration}
        label="Duration"
        onChange={e => handleNewInput(e)}
        fullWidth
      />
    
      <TextField
        margin="dense"
        name="activity"
        value ={training.activity}
        label="Activity"
        onChange={e => handleNewInput(e)}
        fullWidth
      />
   </form>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      
      </Button>
      <Button onClick={addTraining} color="primary">
        Save
      </Button>
    </DialogActions>
  </Dialog>

    </div>
);
}
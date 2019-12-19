
import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import SnackBar from 'react-material-snackbar';

import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import moment from 'moment';

const ListAllTrainings = () =>{
    const [trainings, setTrainigs] = useState([]);
const [customer, setCustomer] = useState([]);
    useEffect(() => fetchTrainings(), []);
    const deleteTraining = (link) => {
      //  const url = 'https://customerrest.herokuapp.com/api/trainings/{id}' 
          if(window.confirm("Are you sure you want to delete this training?")){
        fetch(link, {method:'DELETE'})
        .then(res => fetchTrainings())
       
        .catch(err => console.error(err))

        }

    }
    const showSnackbar = () => {
        return(
            <div>
<SnackBar
  show={true}                            //Boolean  - Required and Default - `false`
  timer={6000}                           //Number   - Optional and Default - `4000` (4 secs)
>
  // Pass any HTML element to render
  <p>Loading...</p>
</SnackBar>
</div>
        );
    }
    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainigs(data.content))
    
    }
       
    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setCustomer(data.customer))
    
    }
       
    const columns = [
          {
            Header: "Date",
            accessor: "date",
         Cell: row => moment(row.value).format('DD.MM.YYYY  HH:mm')
         
     
    },

                  
           
          
          {
        Header: "Duration",
        accessor: "duration"
        },
        {
        Header: "Activity",
        accessor: "activity"
        },
        {
            Header: "customer_Firstname",
      accessor: "customer.lastname"

        },
            {
                Header: "customer_Lastname",
                accessor: "lastname"
                },
      
                {
                    sortable: false,
                    filterable: false,
                    width: 100,
                   accessor: "links[0].href",
                  Cell: row => <Button variant="contained" color="secondary" size="small" onClick={() => deleteTraining(row.value)}>Delete</Button>
                                          
                                       
               },
               {
                sortable: false,
                filterable: false,
                width: 100,
               accessor: "links[0].href",
              Cell: row => <Button variant="contained" color="secondary" size="small"><a href="./Customerinfo">Customer</a></Button>
                                      
                                   
           }

    ]
return(
    <div>
        <h1>Trainings</h1>
        <ReactTable data={trainings}    columns={columns} sortable={true} filterable={true} defaultPageSize={10} />

    </div>
)

}
export default ListAllTrainings
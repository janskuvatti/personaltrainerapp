
import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';

import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import moment from 'moment';

const ListAllTrainings = () =>{
    const [trainings, setTrainigs] = useState([]);
    useEffect(() => fetchTrainings(), []);
    const deleteTraining = (link) => {
      console.log(link);
          if(window.confirm("Are you sure you want to delete this training?")){
        fetch(link, {method:'DELETE'})
        .then(res => fetchTrainings())

        .catch(err => console.error(err))

        }

    }
   
    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainigs(data.content))
    
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
                    sortable: false,
                    filterable: false,
                    width: 100,
                   accessor: "links[0].href",
                  Cell: row => <Button variant="contained" color="secondary" size="small" onClick={() => deleteTraining(row.value)}>Delete</Button>
                                          
                                       
               },
              

    ]
return(
    <div>
        <h1>Trainings</h1>
        <ReactTable data={trainings}    columns={columns} sortable={true} filterable={true} defaultPageSize={10} />

    </div>
)

}
export default ListAllTrainings
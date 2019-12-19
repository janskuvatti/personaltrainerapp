import React, {useState, useEffect} from 'react';

import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import AddTraining from './AddTraining';
import Button from '@material-ui/core/Button';

const ListAllCustomers = () =>{
    const [customers, setCustomers] = useState([]);
    useEffect(() => fetchCustomers(), []);

    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
         
    }
       
    const saveNewCustomer = (customer) => {
      fetch('https://customerrest.herokuapp.com/api/customers', {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(customer)
      })


      .then(res => fetchCustomers())
      .catch(err => console.error(err))
    
      alert("Added new customer");

    }
       
    const updateCustomer = (customer, link) => {
      fetch(link, {
        method : 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(customer)
      })


      .then(res => fetchCustomers())
      .catch(err => console.error(err))
      alert("Updated customer");
     console.log(link)
      }
  
      const deleteCustomer = ( link) => {
        console.log(link);
        //const url = customers.links[0].href;
        if(window.confirm("Are you sure you want to delete this customer?")){
        fetch(link, {method:'DELETE'})
        .then(res => fetchCustomers())
        
       
        .catch(err => console.error(err))

        }
    }
    const saveNewTraining = (training, link) => {
      console.log(link);
      fetch('https://customerrest.herokuapp.com/api/trainings', {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(training)
      })


      .then(res => fetchCustomers())
      .catch(err => console.error(err))
    
      alert("Added new training");

    }
    const columns = [
        {
          Header: "Firstname",
           accessor: "firstname"
          }, 
          {
        Header: "Lastname",
        accessor: "lastname"
        },
        {
        Header: "Sreetaddress",
        accessor: "streetaddress"
        },
        {
        Header: "Postcode",
       accessor: "postcode"
      },
      {
      Header: "City",
      accessor: "city"
    },
      {
       Header: "email",
      accessor: "email"
     },
     {
        Header: "Phone",
       accessor: "phone"
      },
      {
        sortable: false,
        filterable: false,
        width: 100,
       Cell: row => <EditCustomer customer={row.original}  updateCustomer={updateCustomer} />
                              
                           
      },  
      {
        sortable: false,
        filterable: false,
        width: 200,
        accessor: "links[0].href",

       Cell: row => <AddTraining training={row.original}  saveNewTraining={saveNewTraining} />
                              
                           
      },  
      {
        sortable: false,
        filterable: false,
        width: 100,
       accessor: "links[0].href",
      Cell: row => <Button variant="contained" color="secondary" size="small" onClick={() => deleteCustomer(row.value)}>Delete</Button>
                              
                           
   },

    ]
return(
    <div>
        <h1>Customers</h1>
        <AddCustomer saveNewCustomer={saveNewCustomer} />
        <ReactTable data={customers}    columns={columns} sortable={true} filterable={true} defaultPageSize={10} />

    </div>
)
}
export default ListAllCustomers
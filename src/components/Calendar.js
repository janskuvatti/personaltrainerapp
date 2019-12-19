import React, {useState, useEffect} from 'react';
import { Calendar, momentLocalizer , Views} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import moment from 'moment'

const ShowTrainings = ( ) => {
    const localizer = momentLocalizer(moment)
    let allViews = Object.keys(Views).map(k => Views[k])

    const ColoredDateCellWrapper = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
      style: {
        backgroundColor: '#FFA07A',
      },
    })
    const [trainings, setTrainings]= useState([]);

    useEffect(() => {fetchTrainings()}, []);
    const fetchTrainings  = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then (response => response.json())
        .then(data => {
          let x = 0;
while(x < data.length ){
        
            let date = moment.utc(data[x].date).toDate();
            let ending = moment.utc(date).add(data[x].duration, 'minutes').toDate()

            let workout= {start: date, date: data[x].date, title: moment(data[x].date).format('DD/MM/YYYY') + ' ' +data[x].activity + '-'
            + data[x].customer.lastname + ', ' + data[x].customer.firstname, end: ending};
            x++;
            setTrainings(trainings => [...trainings, workout])

    }
},[])

}





        
  return (
      <div  style={{ height: 700, fontWeight: "bold" }}>
          <h1>Training calendar</h1>
    <Calendar

      localizer={localizer}
      events={trainings}
      startAccessor="start"
      endAccessor="end"
      components={{
        timeSlotWrapper: ColoredDateCellWrapper,
        
      }}
      views={allViews}

    />

      </div>
  );  
}
export default ShowTrainings
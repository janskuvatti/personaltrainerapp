import React from 'react';

import"bootstrap/dist/css/bootstrap.min.css";
const Navigation = () => {
return (
    <div>
		<ul className="nav nav-pills nav-fill">

<li className="nav-item">
<a className="nav-link " style={{color: "white"}} href="/">Home</a>
</li>
<li className="nav-item">
  <a className="nav-link" style={{color: "white"}} href="/customers">Customers</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="/trainings" style={{color: "white"}}>Trainings</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="/calendar" style={{color: "white"}}>Calendar</a>
</li>

</ul>
  </div>
)
}
export default Navigation
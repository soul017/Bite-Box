import { useState } from "react";
// Passing props in Functional Component i.e. name,surname
const user = ({name,surname}) => {
  // Creating state variable in function component
    const[count]=useState(0);
    const[count2]=useState(1);
  return (
  
    <div className="user-card">
      <div>
        <h1> Its a Functional component</h1>
      </div>
      <h2>Count:{count}</h2>
      <h2>Count2:{count2}</h2>
      <h2>NAME:{name}</h2>
      <h2>SURNAME:{surname}</h2>
      <h3>LOCATION: Aligarh</h3>
    </div>
  );  
};

export default user;

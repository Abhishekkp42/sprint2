import axios from "axios";
import {useState} from "react";


export const AddHouse = () => {

  const [text, setText] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent:"",
    bachelor: ""
  })

  const handleSubmit= (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/houses", text)
  }

  const handleChange= (e) => {
    let {className, value, checked, type} = e.target;
    value= type=== "checkbox" ? checked : false;
    setText({...text, [className] :value})
  }

  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" required onChange={handleChange}/>
        <br />
        <label>ownerName</label>
        <input type="text" className="ownerName" required onChange={handleChange}/>
        <br />
        <label>address</label>
        <input  type="text" className="address" required onChange={handleChange}/>
        <br />
        <label>areaCode</label>
        <input type="text" className="areaCode" required onChange={handleChange}/>
        <br />
        <label>rent</label>
        <input type="text" className="rent" required onChange={handleChange}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox" className="bachelor" onChange={handleChange}/>
        <br />
        <label>married</label>
        <input type="checkbox" className="married" onChange={handleChange}/>
        <br />
        <label>image</label>
        <input  type="text" className="image" required onChange={handleChange}/>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};

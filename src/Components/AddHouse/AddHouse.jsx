import axios from "axios";
import {useState} from "react";


export const AddHouse = () => {

  const [addhouse, setHouse] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent:"",
    preferredTenant: "",
    img: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/houses", addhouse).then(() => {
      alert("Successful");
      setHouse({
        name: "",
        ownername: "",
        address: "",
        areaCode: "",
        rent: "",
        preferredTenant: "",
        img: "",
      });
    });
  };

  const handleChange = (e) => {
    let { id, value, checked, type } = e.target;
    value = type === "checked" ? checked : value;
    setHouse({
      ...addhouse,
      [id]: value,
    });
  };

  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" required onChange={handleChange} value={addhouse.name} id="name"/>
        <br />
        <label>ownerName</label>
        <input type="text" className="ownerName" required onChange={handleChange} value={addhouse.ownername} id="ownername"/>
        <br />
        <label>address</label>
        <input  type="text" className="address" required onChange={handleChange} value={addhouse.address} id="address"/>
        <br />
        <label>areaCode</label>
        <input type="text" className="areaCode" required onChange={handleChange} value={addhouse.areaCode} id="areaCode" />
        <br />
        <label>rent</label>
        <input type="text" className="rent" required onChange={handleChange} value={addhouse.rent} id="rent" />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox" className="bachelor" onChange={handleChange} checked={addhouse.bachelor} id="preferredTenant" value="bachelor"/>
        <br />
        <label>married</label>
        <input type="checkbox" className="married" onChange={handleChange} checked={addhouse.married} id="preferredTenant" value="married"/>
        <br />
        <label>image</label>
        <input  type="text" className="image" required onChange={handleChange} value={addhouse.img} id="img" />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};

import {useState} from "react";


export const AddHouse = () => {

  const [text, setText] = useState()

  return (
    <div className="addHouseContainer">
      <form>
        <label>name</label>
        <input type="text" className="name" value={""} required onChange={(e) => {
          setText(e.target.value)
        }}/>
        <br />
        <label>ownerName</label>
        <input value={""} type="text" className="ownerName" required onChange={(e) => {
          setText(e.target.value)
        }}/>
        <br />
        <label>address</label>
        <input value={""} type="text" className="address" required onChange={(e) => {
          setText(e.target.value)
        }}/>
        <br />
        <label>areaCode</label>
        <input value={""} type="text" className="areaCode" required onChange={(e) => {
          setText(e.target.value)
        }}/>
        <br />
        <label>rent</label>
        <input value={""} type="text" className="rent" required onChange={(e) => {
          setText(e.target.value)
        }}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={""} type="checkbox" className="bachelor" onChecked={(e) => {
          setText(e.target.value)
        }}/>
        <br />
        <label>married</label>
        <input checked={""} type="checkbox" className="married" onChecked={(e) => {
          setText(e.target.value)
        }}/>
        <br />
        <label>image</label>
        <input value={""} type="text" className="image" required onChange={(e) => {
          setText(e.target.value)
        }}/>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};

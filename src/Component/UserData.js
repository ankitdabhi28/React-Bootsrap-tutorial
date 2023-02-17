import { useState } from "react";
import { Input, Button } from "reactstrap";
function Section() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    adderss: "",
    password: "",
  });

  //print data set
  const [print, dataPrint] = useState(false);

  console.log("InputData", user);

  let name, value;
  const getData = (event) => {
    name = event.target.name;
    value = event.target.value;
    //for data Set...
    setUser({ ...user, [name]: value });

    //for data print....
    dataPrint(false, { ...user, [name]: value });
  };
  return (
    <div className="">
      <div className="mainSec p-4 row">
        <div className="Inputs col-lg-6">
          <div className="name1">
            <Input
              type="text"
              name="name"
              placeholder="Type Your Name"
              value={user.name}
              onChange={getData}
            />
            <br />
          </div>

          <div className="email1">
            <Input
              type="email"
              name="email"
              placeholder="Type Your Email"
              value={user.email}
              onChange={getData}
            />
            <br />
          </div>

          <div className="phno">
            <Input
              type="number"
              name="phone"
              placeholder="Type Your Phone Number"
              onChange={getData}
            />{" "}
            <br />
          </div>

          <div className="add">
            <Input
              name="adderss"
              placeholder="Type Your Address"
              type="textarea"
              onChange={getData}
            />{" "}
            <br />
          </div>

          <div className="pass">
            <Input
              type="password"
              placeholder="Type Your Password"
              name="password"
              value={user.password}
              onChange={getData}
            />
            {""}
            <br />
          </div>

          <div className="sub">
            <Button
              className="btn"
              color="secondary"
              size="lg"
              onClick={() => dataPrint(true)}
            >
              Submit
            </Button>
          </div>
        </div>

        <div className="InputPrint p-4 col-lg-6 card">
          <div>
            <h1 className="P">Print Data</h1>
            {print ? (
              <>
                <h4 className="Pname"> Name : {user.name} </h4>
                <h4 className="Pemial"> Email : {user.email}</h4>
                <h4 className="Pphone"> Phone : {user.phone}</h4>
                <h4 className="Padd"> Adderss : {user.adderss}</h4>
                <h4 className="Ppass"> Password : {user.password}</h4>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;

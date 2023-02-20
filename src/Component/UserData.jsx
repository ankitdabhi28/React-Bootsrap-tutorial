import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { Input, Button, Table } from "reactstrap";
function Section() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    adderss: "",
    password: "",
  });

  //print data set
  const [tabledata, dataTable] = useState([]);
  console.log('table>', tabledata);


  console.log("InputData", user);

  let name, value;
  const getData = (event) => {
    name = event.target.name;
    value = event.target.value;
    //for data Set...
    setUser({ ...user, [name]: value });

  };

  const data = (e) => {
    e.preventDefault();
    // dataPrint(true)
    dataTable([...tabledata, user])
    setUser({
      name: "",
      email: "",
      phone: "",
      adderss: "",
      password: "",
    })
  }

  return (
    <div className="">
      <div className="mainSec p-4 row">
        <div className="Inputs col-lg-4">
          <form className="card p-4" onSubmit={(e) => data(e)}>
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
                value={user.phone}
                onChange={getData}
              />{" "}
              <br />
            </div>

            <div className="add">
              <Input
                name="adderss"
                placeholder="Type Your Address"
                type="textarea"
                value={user.adderss}
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
            <div className="container">
              <Button
                className="btn"
                color="secondary"
                size="lg"
                type="submit"
              // onClick={() => data()}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div className="InputPrint card col-lg-8 ">
          <div className="p-4">
            <h1 className="P">Print Data</h1>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th> Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {
                  tabledata?.map((row, i) => {
                    return (
                      <tr key={i}>
                        <td> {row.name} </td>
                        <td> {row.email}</td>
                        <td> {row.phone}</td>
                        <td> {row.adderss}</td>
                        <td> {row.password}</td>
                      </tr>
                    )
                  })
                }
              </tbody>

            </Table>
          </div>
        </div>
        <NavLink to="/Table">Table</NavLink>
      </div >
    </div >
  );
}

export default Section;

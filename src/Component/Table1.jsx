import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
// import Header from "./Header";
function Table1() {


    const tableData = [

        {
            id: 1,
            firstname: "ankit",
            lastname: "dabhi",
            username: "dabhi@ad"

        }
        , {
            id: 2,
            firstname: "ad",
            lastname: "abcd",
            username: "abcd@ad"

        },
        {
            id: 3,
            firstname: "xyz",
            lastname: "a2b",
            username: "xyz@a2b"

        },
        {
            id: 4,
            firstname: "adsf",
            lastname: "ojmn",
            username: "ojmn@adsf"

        },
        {
            id: 5,
            firstname: "yhvjjkn",
            lastname: "asdfghjk",
            username: "asdfghjk@yhvjjkn"

        }

    ];

    return (
        <div className="p-4">

            <Table
                bordered
                hover
            >
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            FirstName
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Username
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {tableData.map((data) =>
                        <tr key={data.id}>

                            <th>{data.id}</th>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                            <td>{data.username}</td>
                        </tr>
                    )}

                </tbody>

            </Table>

            <NavLink className=" col-2 m-5" to="/Table/UserData" >UserData</NavLink>


        </div>
    );
}
export default Table1;
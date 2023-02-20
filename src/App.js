import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import HomePg from "./Component/HomePg";
import { Route, Routes } from "react-router-dom";
import Table1 from "./Component/Table1";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import UserData from "./Component/UserData";

function App() {
  return (
    <div className="App">
      {/* <HomePg /> */}
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<HomePg />} />
          <Route path="Table" element={<Table1 />} />
          <Route path="UserData" element={<UserData />} />
        </Route>

        <Route path="/Table">
          <Route path="UserData" element={<UserData />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

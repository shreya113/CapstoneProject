import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import {Routes, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import ListUser from "./Components/User/ListUser";
import AddUser from "./Components/User/EditUser";
import EditUser from "./Components/User/EditUser";

function App() {
  const { isLogged } = useSelector((state) => state);
  return (
    <div className="container">
    <h2>This is crud app</h2>
    {!isLogged?<Login/>: ""}
    <Routes>
      <Route path="/list" element={<ListUser />}/>
      <Route path="/create" element={<AddUser />}/>
      <Route path="/edit/:id" element={<EditUser />}/>
    </Routes>
    <Login/>
    </div>
  );
}

export default App;
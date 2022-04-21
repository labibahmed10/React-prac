import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Line } from "recharts";
import "./App.css";
import MyLineChart from "./CHART_ITEMS/LineChart/MyLineChart";
import Navbar from "./TAIL_WIND/Navbar/Navbar";
import Pricing from "./TAIL_WIND/Pricing/Pricing";
import UpdateOne from "./UpdateOne";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    fetch("http://localhost:5000/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers([...users, data]);
      });
  };

  const handleDeleteUser = (id) => {
    const confirm = window.confirm("Are you sure want to delete?");

    if (confirm) {
      console.log(id);
      fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainig = users.filter((u) => u._id !== id);
          setUsers(remainig);
        });
    }
  };
  return (
    <div className="App">
      {/* <Navbar></Navbar> // tailwind er card 
      <Pricing></Pricing> */}
      {/* Line chart */}
      {/* <MyLineChart></MyLineChart> */}
      <Routes>
        <Route path="/update/:id" element={<UpdateOne></UpdateOne>}></Route>
      </Routes>

      <h1 className="text-center m-5">WIll be practicing node here</h1>
      <h1 className="text-center m-5 text-2xl">Users length: {users.length}</h1>
      <div>
        {users.map((u) => (
          <p key={u._id}>
            name: {u.name} email: {u.email}
            <button className="m-5 bg-slate-600 px-5 text-white" onClick={() => handleDeleteUser(u._id)}>
              X
            </button>
            <Link to={`/update/${u._id}`}>Go Individual</Link>
          </p>
        ))}
      </div>

      <div className="mx-auto">
        <form onSubmit={handleSubmit}>
          <input className="border m-2 p-4 w-64" type="text" name="name" id="name" />
          <input className="border m-2 p-4 w-64" type="email" name="email" id="email" />
          <input className="bg-green-300 p-4" type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;

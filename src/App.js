import { useEffect, useState } from "react";
import "./App.css";
import MyLineChart from "./CHART_ITEMS/LineChart/MyLineChart";
import Navbar from "./TAIL_WIND/Navbar/Navbar";
import Pricing from "./TAIL_WIND/Pricing/Pricing";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = { name, email };

    fetch("", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  };
  return (
    <div className="App">
      {/* <Navbar></Navbar> // tailwind er card 
      <Pricing></Pricing> */}
      {/* Line chart */}
      {/* <MyLineChart></MyLineChart> */}

      <h1 className="text-center m-5">WIll be practicing node here</h1>
      <h1 className="text-center m-5 text-2xl">Users length: {users.length}</h1>
      <div>
        {users.map((u) => (
          <p>{u.name}</p>
        ))}
      </div>

      <div className="mx-auto">
        <form action="" onSubmit={handleSubmit}>
          <input className="border m-2 p-4 w-64" type="email" name="email" id="email" />
          <input className="border m-2 p-4 w-64" type="text" name="name" id="name" />
          <input className="bg-green-300 p-4" type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;

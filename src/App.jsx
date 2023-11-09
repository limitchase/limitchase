import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Log from "./pages/Log";
import Home from "./pages/Home";
import PizzaMenu from "./pages/PizzaMenu";
import Steps from "./pages/Steps";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/log">Change Log</Link>
        </p>
        <p>
          <Link to="/steps">Steps</Link>
        </p>
        <p>
          <Link to="/pizza-menu">Pizza Menu</Link>
        </p>
      </nav>
      <Routes>
        <Route path="log" element={<Log />} />
        <Route path="pizza-menu" element={<PizzaMenu />} />
        <Route path="steps" element={<Steps />} />
        {/* <Route path="users/*" element={<Users />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

// function Users() {
//   return (
//     <div>
//       <nav>
//         <Link to="me">My Profile</Link>
//       </nav>

//       <Routes>
//         <Route path=":id" element={<h1>id</h1>} />
//         <Route path="me" element={<h1>me</h1>} />
//       </Routes>
//     </div>
//   );
// }

export default App;

import Navbar from "./component/Navbar";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import About from "./component/About/About";
import Home from "./component/Home/Home";
import Services from "./component/Services/Services";
// import Contact from "./component/Contact/Contact";
import Login from "./component/Auth.js/Login";
import Register from "./component/Auth.js/Register";
import useUserContext from "./hooks/useUserContext";

function App() {
  const [page, setPage] = React.useState("login");
  const { user } = useUserContext();
  return (
    <div className="App flex flex-col pt-5 px-16 h-dvh">
      <BrowserRouter>
        <Navbar page={page} />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home setPage={setPage} />} />
          <Route path="/home" element={<Home setPage={setPage} />} />
          {/* Services */}
          <Route path="/services" element={<Services setPage={setPage} />} />
          {/* About */}
          <Route path="/about" element={<About setPage={setPage} />} />
          {/* Contact */}
          {/* <Route path="/contact" element={<Contact setPage={setPage} />} /> */}
          {/* Auth */}
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login setPage={setPage} />}
          />
          <Route
            path="/register"
            element={
              user ? <Navigate to="/" /> : <Register setPage={setPage} />
            }
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

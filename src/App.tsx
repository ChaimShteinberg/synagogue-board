import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
// import Admin from "./Pages/Admin";
// import { useState } from "react";
// import type { ParnesType } from "./types/parnesType";

function App() {
  // const [parnesList, setParnesList] = useState<ParnesType[]>([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/admin" element={<Admin setParnesList={setParnesList} />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

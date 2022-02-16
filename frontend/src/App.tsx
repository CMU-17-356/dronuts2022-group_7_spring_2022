import React from 'react';
import './App.css';
import CustomNavbar from "./Components/CustomNavbar";
import PendingOrderCard from "./Components/PendingOrders/PendingOrderCard";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <Routes>
          <Route path="/pending" element= {<PendingOrderCard/>} />
          <Route path="/" element= {<PendingOrderCard/>} />
          <Route path="/checkout" element= {<PendingOrderCard/>} />
      </Routes> 
    </div>
    </Router>
  );
}

export default App;
import React, { lazy } from "react";
import "./app.css"
const Approutes = lazy(() => import("./routes/Approutes"));
import {
  BrowserRouter ,
} from 'react-router-dom'

function App() {
  return (
    <div  className="myApp ">
      <BrowserRouter>
        <Approutes />
      </BrowserRouter>
    </div>
  );
}

export default App;

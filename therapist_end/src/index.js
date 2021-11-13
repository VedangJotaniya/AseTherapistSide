import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import Reg from "./Reg";
import Appointments from "./Appointments";
ReactDOM.render(
    <BrowserRouter>
        <Reg />
    </BrowserRouter>,
    document.getElementById("root")
);

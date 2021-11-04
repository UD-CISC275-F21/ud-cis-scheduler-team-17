import React from "react";
//import { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { OurTable } from "./components/Table";
import { Container } from "react-bootstrap";

/*function App(): JSX.Element {

    

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                UD CIS Scheduler
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>Dara McNally</p>
                <p>Riyara Master</p>
                <p>Trea Holley</p> 
            </header>
        </div>
    );
}*/

function App(): JSX.Element {

    

    return (
        <Container>
            <OurTable></OurTable>
        </Container>
    );
}
export default App;

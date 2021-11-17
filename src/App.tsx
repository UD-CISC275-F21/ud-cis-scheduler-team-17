import React from "react";
//import { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SemesterTable } from "./components/SemesterViewer";
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

    //TODO: Save/Load
    //TODO: Export/Import (CSV/PDF?) (Do some research)
    //TODO: Make it look nice
    //TODO: Welcome screen

    return (
        <Container>
            <SemesterTable></SemesterTable>
        </Container>
    );
}
export default App;

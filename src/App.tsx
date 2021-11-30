import React from "react";
//import { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./override.css";
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

    //TODO: Export/Import (CSV/PDF?) (Do some research)

    return (
        <>
            <div className="text-center" style={{fontFamily: "Courier New"}}>
                <h1><strong>UDel CISC Degree Planner</strong></h1>
                <p>Welcome to the University of Delaware CISC Degree Planner! Here you can add/delete semesters and courses from your degree plan.</p>
                <h5>Click Add Semester or Edit to get started!</h5>
            </div>
            <Container>
                <SemesterTable></SemesterTable>
            </Container>
        </>
    );
}
export default App;

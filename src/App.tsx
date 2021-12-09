import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./override.css";
import { SemesterTable } from "./components/SemesterViewer";
import { Container } from "react-bootstrap";

function App(): JSX.Element {

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

import React from "react";
import {Subject} from "../interfaces/subject";
import { Card, Row, Button } from "react-bootstrap";
//import { TableFace } from "../interfaces/tableface";

export function SubjectTable({currentSem}:{
    currentSem: number
}) : JSX.Element {
    const subjectList: Subject[] = [
        {id: "CISC106", name: "General Computer Science for Engineers", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3}];
    
    return (
        <Card>
            <Row><strong>Semester {currentSem}</strong></Row>
            <table>
                <tr><th>Class ID</th><th>Class Name</th><th>Credits</th></tr>
                { subjectList.map((sbj: Subject) => {
                    return <tr key={sbj.name}>
                        <td>{sbj.id}</td>
                        <td>{sbj.name}</td>
                        <td>{sbj.credits}</td>
                    </tr>;
                })}
            </table>
            <Button >Add Course</Button>
            <Button >Delete Course</Button>
            <Button >Delete Semester</Button>
        </Card>
    );
    //Table setup credit to Dr. Bart
}
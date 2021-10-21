import React from "react";
import {Subject} from "../interfaces/subject";
import { Card, Row } from "react-bootstrap";
//import { TableFace } from "../interfaces/tableface";

export function SubjectTable({currentSem, currYear}:{
    currentSem: number,
    currYear: number
}) : JSX.Element {
    const subjectList: Subject[] = [
        {id: "CISC106", name: "General Computer Science for Engineers", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3}];
    
    return (
        <Card>
            <Row><strong>Semester {currentSem} Year {currYear}</strong></Row>
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
        </Card>
    );
    //Table setup credit to Dr. Bart
}
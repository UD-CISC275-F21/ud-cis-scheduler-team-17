import React from "react";
import {Subject} from "../interfaces/subject";
import { Card, Row, Button, Col } from "react-bootstrap";
import { TableFace } from "../interfaces/tableface";

export function SubjectTable({currID, currentSem, currYear}:{
    currID: number,
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
            <Row>
                <Col><Button >Add Course</Button></Col>
                <Col><Button >Delete Course</Button></Col>
                <Col><Button >Delete Semester</Button></Col>
            </Row>
        </Card>
    );
    //Table setup credit to Dr. Bart
}
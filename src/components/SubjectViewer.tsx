import React from "react";
import {Subject} from "../interfaces/subject";
import { Card, Row, Button, Col } from "react-bootstrap";
import { TableFace } from "../interfaces/tableface";

export function SubjectTable({currID, currentSem, currYear, semList, setSemList, thisID, idSet}:{
    currID: number,
    currentSem: number,
    currYear: number,
    semList: TableFace[],
    setSemList: (semList: TableFace[]) => void,
    thisID: number,
    idSet: (num: number) => void
}) : JSX.Element {
    const subjectList: Subject[] = [
        {id: "CISC106", name: "General Computer Science for Engineers", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3}];

    function deleteSem () {
        idSet(thisID+1);
        const fixedList: TableFace[] = semList;
        const idx = fixedList.indexOf({id: currID, semester: currentSem, year: currYear});
        fixedList.splice(idx);
        setSemList(fixedList);
    }

    return (
        <Card>
            <Row><strong>Semester {currentSem} Year {currYear}</strong></Row>
            <Row>ID {currID}</Row>
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
                <Col><Button onClick={deleteSem}>Delete Semester</Button></Col>
            </Row>
        </Card>
    );
    //Table setup credit to Dr. Bart
}
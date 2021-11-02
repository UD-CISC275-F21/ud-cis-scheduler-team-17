import React, { useState } from "react";
import {Subject} from "../interfaces/subject";
import { Card, Row, Button, Col } from "react-bootstrap";
import { TableFace } from "../interfaces/tableface";

export function SubjectTable({currID, currentSem, currYear, semList, setSemList, thisID, idSet, semPer}:{
    currID: number,
    currentSem: number,
    currYear: number,
    semList: TableFace[],
    setSemList: (semList: TableFace[]) => void,
    thisID: number,
    idSet: (num: number) => void,
    semPer: number
}) : JSX.Element {
    const [subjectList, setSubjectList] = useState<Subject[]>([
        {id: "CISC106", name: "General Computer Science for Engineers", credits: 3, key: 1},
        {id: "CISC", name: "ClassName", credits: 3, key: 2},
        {id: "CISC", name: "ClassName", credits: 3, key: 3},
        {id: "CISC", name: "ClassName", credits: 3, key: 4},
        {id: "CISC", name: "ClassName", credits: 3, key: 5}]);

    const [editRow, setEditRow] = useState<number>(0);

    
    function deleteSem () {
        //idSet(thisID+1);
        const fixedList: TableFace[] = semList;
        //const idx = fixedList.indexOf({id: currID, semester: currentSem, year: currYear});
        //const idx = fixedList.indexOf(this);
        fixedList.splice(currID, 1);
        if (fixedList[0]) {
            let temp: TableFace; 
            for (let i=currID; fixedList[i]; i++) {
                temp = fixedList[i];
                temp.id = i;
                temp.semester -= 1;
                if (temp.semester==0) {
                    temp.year -= 1;
                    temp.semester = semPer;
                }
                fixedList[i] = temp;
            }
            idSet(thisID-1);
            setSemList(fixedList);
        } else {
            idSet(-1);
        }
    }

    function editSem (currSem: number) {
        setEditRow(currSem);
        alert("editSem has been used!");
    }

    function submitSem () {
        alert("Submitted!");
        setEditRow(0);
    }

    let newRow = 0;

    //<Row>ID {currID}</Row>
    return (
        <Card>
            <Row><strong>Semester {currentSem} Year {currYear}</strong></Row>
            <table>
                <tr><th>Class ID</th><th>Class Name</th><th>Credits</th></tr>
                { subjectList.map((sbj: Subject) => {
                    {newRow++;} // Track what row it is on
                    return (
                        (editRow == newRow) ? ( // If the current row was set to be edited, do this
                            <tr key={sbj.id}> 
                                <td>
                                    <input></input>
                                </td>
                                <td>
                                    <input></input>
                                </td>
                                <td>
                                    <input></input>
                                </td>
                                <td><Button onClick={submitSem}>Submit</Button></td>
                            </tr>
                        ):( // otherwise do what it originally does
                            <tr key={sbj.id}> 
                                <td>{sbj.id}</td>
                                <td>{sbj.name}</td>
                                <td>{sbj.credits}</td>
                                <td><Button onClick={() => editSem(sbj.key)}>Edit</Button></td>
                            </tr>
                        )
                    );
                })}
            </table>
            <Row>
                <Col><Button >Add Course</Button></Col>
                <Col><Button >Delete Course</Button></Col>
                <Col><Button onClick={deleteSem}>Delete This Semester</Button></Col>
            </Row>
        </Card>
    );
    //Table setup credit to Dr. Bart
}
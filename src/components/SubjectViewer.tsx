import React from "react";
import { useState } from "react";
import {Subject} from "../interfaces/subject";
import { Card, Row, Button, Col, InputGroup, FormControl } from "react-bootstrap";
import { TableFace } from "../interfaces/semester";

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
    const [currentId, setId] = useState<string>("CISC");
    const [courseName, setcourseName]  = useState<string>("ClassName");
    const [currentKey, setKey] = useState<number>(5);
    const [subjectList, setSub] = useState<Subject[]> ([{id: currentId, name: courseName, credits: 3, key: 1},{id: currentId, name: courseName, credits: 3, key: 2},{id: currentId, name: courseName, credits: 3, key: 3},{id: currentId, name: courseName, credits: 3, key: 4},{id: currentId, name: courseName, credits: 3, key: 5}]);

    const [editRow, setEditRow] = useState<number>(0);

    function addCourse () {
        const tempKey = currentKey + 1;
        setKey(tempKey);
        setId(currentId);
        setcourseName(courseName);
        const temp: Subject = {id: currentId, name: courseName, credits: 3, key: tempKey};
        const sub: Subject[] = [...subjectList, temp];
        //sub.push(temp);
        setSub(sub);
        // Need to fix key generation
    }

    function deleteCourse () {
        setKey(currentKey - 1);
        const sub: Subject[] = [...subjectList];
        sub.pop();
        setSub(sub);
    }

    function clearCourse () {
        setKey(0);
        setSub([{id: currentId, name: courseName, credits: 3, key: 0}]);
    }

    function deleteSem () {
        //idSet(thisID+1);
        const fixedList: TableFace[] = [...semList];
        //const idx = fixedList.indexOf({id: currID, semester: currentSem, year: currYear});
        //const idx = fixedList.indexOf(this);
        fixedList.splice(currID, 1);
        if (fixedList[0]) {
            let temp: TableFace; 
            for (let i=currID; fixedList[i]; i++) {
                temp = fixedList[i];
                temp.id = i;
                temp.semesterNum -= 1;
                if (temp.semesterNum==0) {
                    temp.year -= 1;
                    temp.semesterNum = semPer;
                }
                fixedList[i] = temp;
            }
            idSet(thisID-1);
            //setSemList(fixedList);
        } else {
            idSet(-1);
            //setSemList(fixedList);
        }
        setSemList(fixedList);
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
                <thead><tr><th>Class ID</th><th>Class Name</th><th>Credits</th></tr></thead>
                { subjectList.map((sbj: Subject) => {
                    {newRow++;} // Track what row it is on
                    return (
                        editRow == newRow ? // If the current row was set to be edited, do this
                            <tr key={sbj.key}> 
                                <td>
                                    <InputGroup className="sbj-id">
                                        <FormControl
                                            placeholder={sbj.id}
                                            aria-label="ID"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>
                                <td>
                                    <InputGroup className="sbj-name">
                                        <FormControl
                                            placeholder={sbj.name}
                                            aria-label="Name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>
                                <td>
                                    <InputGroup className="sbj-credits">
                                        <FormControl
                                            placeholder={sbj.credits.toString()}
                                            aria-label="Credits"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </td>
                                <td><Button onClick={submitSem}>Submit</Button></td>
                            </tr>
                            : // otherwise do what it originally does
                            <tr key={sbj.key}> 
                                <td>{sbj.id}</td>
                                <td>{sbj.name}</td>
                                <td>{sbj.credits}</td>
                                <td><Button onClick={() => editSem(sbj.key)}>Edit</Button></td>
                            </tr>
                    );
                })}
            </table>
            <Row>
                <Col><Button data-testid="add-course-button"onClick={addCourse}>Add Course</Button></Col>
                <Col><Button data-testid="delete-last-course-button"onClick = {deleteCourse}>Delete Course</Button></Col>
                <Col><Button data-testid="delete-this-semester-button" onClick={deleteSem}>Delete This Semester</Button></Col>
            </Row>
        </Card>
    );
    //Table setup credit to Dr. Bart
}
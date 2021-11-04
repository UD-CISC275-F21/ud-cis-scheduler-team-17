import React from "react";
import { useState } from "react";
import {Subject} from "../interfaces/subject";
import { Card, Row, Button, Col, InputGroup, FormControl } from "react-bootstrap";
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
    const [currentId, setId] = useState<string>("CISC");
    const [courseName, setcourseName]  = useState<string>("ClassName");
    const [currentKey, setKey] = useState<number>(0);
    const [subjectList, setSub] = useState<Subject[]> ([{id: currentId, name: courseName, credits: 3, key: currentKey},{id: currentId, name: courseName, credits: 3, key: currentKey},{id: currentId, name: courseName, credits: 3, key: currentKey},{id: currentId, name: courseName, credits: 3, key: currentKey},{id: currentId, name: courseName, credits: 3, key: currentKey}]);

    const [editRow, setEditRow] = useState<number>(0);

    function addCourse () {
        const tempKey = currentKey + 1;
        setKey(tempKey);
        setId(currentId);
        setcourseName(courseName);
        const temp: Subject = {id: currentId, name: courseName, credits: 3, key: tempKey};
        const sub: Subject[] = subjectList;
        sub.push(temp);
        setSub(sub);
    }

    function deleteCourse () {
        setKey(currentKey - 1);
        const sub: Subject[] = subjectList;
        sub.pop();
        setSub(sub);
    }

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
                                            placeholder={(sbj.credits).toString()}
                                            aria-label="Credits"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
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
                <Col><Button onClick={addCourse}>Add Course</Button></Col>
                <Col><Button onClick = {deleteCourse}>Delete Course</Button></Col>
                <Col><Button onClick={deleteSem}>Delete This Semester</Button></Col>
            </Row>
        </Card>
    );
    //Table setup credit to Dr. Bart
}
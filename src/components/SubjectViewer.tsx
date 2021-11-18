import React from "react";
import { useState } from "react";
import {Subject} from "../interfaces/subject";
import { Card, Row, Button, Col, InputGroup, FormControl } from "react-bootstrap";
import { Semester } from "../interfaces/semester";

export function SubjectTable({currID, currentSem, currYear, semList, setSemList, lastID, idSet, semPer, semCount, setSemCount}:{
    currID: number,
    currentSem: number,
    currYear: number,
    semList: Semester[],
    setSemList: (semList: Semester[]) => void,
    lastID: number,
    idSet: (num: number) => void,
    semPer: number,
    semCount: number,
    setSemCount: (num: number) => void
}) : JSX.Element {
    const [currentId, setId] = useState<string>("CISC");
    const [courseName, setcourseName]  = useState<string>("ClassName");
    const [currentKey, setKey] = useState<number>(5);
    const [subjectList, setSub] = useState<Subject[]> ([{id: currentId, name: courseName, credits: 3, key: 1},{id: currentId, name: courseName, credits: 3, key: 2},{id: currentId, name: courseName, credits: 3, key: 3},{id: currentId, name: courseName, credits: 3, key: 4},{id: currentId, name: courseName, credits: 3, key: 5}]);

    const [editRow, setEditRow] = useState<number>(0);
    const [editId, setEditId] = useState<string>("");
    const [editName, setEditName] = useState<string>("");
    const [editCredits, setEditCredits] = useState<number>(0);

    //const semesterID = currID.valueOf();
    //const currentSemesterNumber = currentSem.valueOf();
    //const currentSemesterYear = currYear.valueOf();
    //const currentSemesterNumber = currentSem;
    //const currentSemesterYear = currYear;

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
        idSet(lastID+1);
        const fixedList: Semester[] = [...semList];
        //const toDelete: Semester = {id: currID, semesterNum: currentSem, year: currYear};
        const idx = fixedList.findIndex((semester: Semester) => semester.id===currID);
        /*if (idx===-1) {
            alert("element not found");
        }*/
        fixedList.splice(idx, 1);
        //const idx = fixedList.indexOf(this);
        //fixedList.splice(currID, 1);
        if (fixedList[0]) {
            let temp: Semester; 
            for (let i=idx; fixedList[i]; i++) {
                temp = fixedList[i];
                //temp.semesterNum = i;
                temp.semesterNum -= 1;
                if (temp.semesterNum===0) {
                    temp.year -= 1;
                    temp.semesterNum = semPer;
                }
                fixedList[i] = temp;
            }
            //setSemList(fixedList);
        } else {
            idSet(-1);
            //setSemList(fixedList);
        }
        setSemCount(semCount-1);
        setSemList(fixedList);
    }

    function editSem (currSem: number) {
        setEditRow(currSem);
    }

    function submitSem () {
        const tempList = subjectList;
        tempList[editRow-1].id = editId;
        tempList[editRow-1].name = editName;
        tempList[editRow-1].credits = editCredits;
        setSub(tempList);
        alert("Submitted!");
        setEditRow(0);
    }

    let newRow = 0;


    //<Row>ID {semesterID}</Row>
    //<Row>ID {currID} SemesterNo. {currentSem} YearNo. {currYear}</Row>
    return (
        <Row><Card className="m-3">
            <Row><p className="text-center"><strong>Semester {currentSem} Year {currYear}</strong></p></Row>
            <table>
                <thead><tr><th>Class ID</th><th>Class Name</th><th>Credits</th></tr></thead>
                { subjectList.map((sbj: Subject) => {
                    {newRow++;} // Track what row it is on
                    return (
                        editRow == newRow ? // If the current row was set to be edited, do this
                            /** Editing bugs - Riyara:
                             *  - Was Start Over a bit buggy before? If not I messed with it a little, sorry.
                             *  - If you submit with nothing in there, it will use default values (0) or the previously used edit values
                             *  - Probably isn't nice-looking that it says "NaN" if you put in a non-number for credits. Easily fixable I'd imagine
                            */
                            <tr key={sbj.key}> 
                                <td>
                                    <InputGroup className="sbj-id">
                                        <FormControl
                                            placeholder={sbj.id}
                                            aria-label="ID"
                                            aria-describedby="basic-addon1"
                                            onChange={(event) => setEditId(event.target.value)}
                                        />
                                    </InputGroup>
                                </td>
                                <td>
                                    <InputGroup className="sbj-name">
                                        <FormControl
                                            placeholder={sbj.name}
                                            aria-label="Name"
                                            aria-describedby="basic-addon1"
                                            onChange={(event) => setEditName(event.target.value)}
                                        />
                                    </InputGroup>
                                </td>
                                <td>
                                    <InputGroup className="sbj-credits">
                                        <FormControl
                                            placeholder={sbj.credits.toString()}
                                            aria-label="Credits"
                                            aria-describedby="basic-addon1"
                                            onChange={(event) => setEditCredits(parseInt(event.target.value,10))}
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
                                <td><Button className="m-1" onClick={() => editSem(sbj.key)}>Edit</Button></td>
                            </tr>
                    );
                })}
            </table>
            <Row>
                <Col><Button className="m-2" data-testid="add-course-button"onClick={addCourse}>Add Course</Button></Col>
                <Col><Button className="m-2" data-testid="delete-last-course-button" onClick = {deleteCourse}>Delete Course</Button></Col>
                <Col><Button className="m-2" data-testid="clear-courses-button" onClick={clearCourse}>Clear Courses</Button></Col>
                <Col><Button className="m-2" data-testid="delete-this-semester-button" onClick={deleteSem}>Delete This Semester</Button></Col>
            </Row>
        </Card></Row>
    );
    //Table setup credit to Dr. Bart
}
//<div className="btn btn-del-course">
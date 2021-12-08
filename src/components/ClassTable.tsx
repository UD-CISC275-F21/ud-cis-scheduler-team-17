import React from "react";
import { useState } from "react";
import {Class} from "../interfaces/class";
import { Card, Row, Button, Col, InputGroup, FormControl } from "react-bootstrap";
import { Semester } from "../interfaces/semester";

export function ClassTable({currID, currentSem, currYear, semList, setSemList, lastID, idSet, semPer, setSemCount, classList}:{
    currID: number,
    currentSem: number,
    currYear: number,
    semList: Semester[],
    setSemList: (semList: Semester[]) => void,
    lastID: number,
    idSet: (num: number) => void,
    semPer: number,
    setSemCount: (num: number) => void
    classList: Class[];
}) : JSX.Element {
    const [currentId, setId] = useState<string>("CISC");
    const [courseName, setcourseName]  = useState<string>("ClassName");
    const [currentKey, setKey] = useState<number>(6);

    const [editRow, setEditRow] = useState<number>(0);
    const [editId, setEditId] = useState<string>("");
    const [editName, setEditName] = useState<string>("");
    const [editCredits, setEditCredits] = useState<number>(0);

    function addCourse () {
        const tempKey = currentKey + 1;
        setKey(tempKey);
        setId(currentId);
        setcourseName(courseName);
        const temp: Class = {courseID: currentId, name: courseName, credits: 3, key: tempKey};
        const newClasses: Class[] = [...classList, temp];
        // Need to fix key generation
        classList = [...newClasses];
        const fixedList: Semester[] = [...semList];
        const idx = fixedList.findIndex((semester: Semester) => semester.id===currID);
        fixedList[idx].classes = classList;
        setSemList(fixedList);
    }

    function deleteCourse (currentKey: number) {
        const fixedList: Semester[] = [...semList];
        const idx = fixedList.findIndex((semester: Semester) => semester.id===currID);
        fixedList[idx].classes = classList.filter((sbj) => sbj.key !== currentKey);
        setSemList(fixedList);
    }

    function clearCourse () {
        setKey(0);
        classList = [];
        const fixedList: Semester[] = [...semList];
        const idx = fixedList.findIndex((semester: Semester) => semester.id===currID);
        fixedList[idx].classes = classList;
        setSemList(fixedList);
    }

    function deleteSem () {
        idSet(lastID+1);
        const fixedList = semList.filter((semFilter) => semFilter.id!==currID);
        for (let i=0, temp:Semester; fixedList[i]; i++) {
            temp = fixedList[i];
            temp.semesterNum = (i%semPer)+1;
            temp.year = Math.trunc(i/semPer)+1;
        }
        setSemCount(fixedList.length-1);
        setSemList(fixedList);
    }

    function editCourse (currCourse: number) {
        setEditRow(currCourse);
    }

    function submitSem () {
        const tempList = [...classList];
        if (editId!=="") {
            tempList[editRow-1].courseID = editId;
        }
        if (editName!=="") {
            tempList[editRow-1].name = editName;
        }
        if (editCredits!==0) {
            tempList[editRow-1].credits = editCredits;
        }
        classList = tempList;
        setEditRow(0);
        setEditId("");
        setEditName("");
        setEditCredits(0);
    }

    let newRow = 0;

    // THE BELOW COMMENTS ARE FOR DEVELOPMENTAL TESTING
    //<Row>ID {semesterID}</Row>
    //<Row>ID {currID} SemesterNo. {currentSem} YearNo. {currYear}</Row>
    return (
        <Row><Card className="text-center m-3">
            <Col>
                <p className="text-center" style={{fontSize:17}}><u><strong>Year {currYear} Semester {currentSem}</strong></u></p>
            </Col>
            <table>
                <thead><tr><th>Class ID</th><th>Class Name</th><th>Credits</th></tr></thead>
                { classList.map((sbj: Class) => {
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
                                            placeholder={sbj.courseID}
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
                                <td>{sbj.courseID}</td>
                                <td>{sbj.name}</td>
                                <td>{sbj.credits}</td>
                                <Button className="m-1" data-testid="edit-course-button" onClick={() => editCourse(classList.findIndex((subject: Class)=>subject.key===sbj.key)+1)}>Edit</Button>
                                <Button className="btn btn-small-delete rounded-circle m-1" data-testid="delete-course-button" onClick={() => deleteCourse(sbj.key)}>X</Button>
                            </tr>
                    );
                })}
            </table>
            <Row>
                <Col><Button className="m-2" data-testid="add-course-button" onClick={addCourse}>Add Course</Button></Col>
                <Col><Button className="m-2" data-testid="clear-courses-button" onClick={clearCourse}>Clear Courses</Button></Col>
                <Col><Button className="btn btn-delete m-2" data-testid="delete-this-semester-button" onClick={deleteSem}>Delete Semester</Button></Col>
            </Row>
        </Card></Row>
    );
    //Table setup credit to Dr. Bart
    //<Col><Button className="m-2" data-testid="delete-last-course-button" onClick = {deleteLastCourse}>Delete Course</Button></Col>
}
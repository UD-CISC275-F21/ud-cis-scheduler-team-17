import { Row, Button } from "react-bootstrap";
import React from "react";
//import { SubjectTable } from "./SubjectViewer";
import { TableFace } from "../interfaces/tableface";
import { useState } from "react";
import { YearViewer } from "./YearViewer";

/*
I think for this it should return a card and several subject components (which will need to be made for ease of adding classes).
It should have the buttons to add courses.
3 columns 5 rows default?
-NEEDS "ADD CLASS" BUTTON
*/
export function OurTable() : JSX.Element {
    const [currentID, setID] = useState<number>(0);
    const semestersPerYear = 2; // In case we want to change the number of semesters per year
    const [semesters, setSem] = useState<TableFace[]>([{id:currentID, semester: 1, year: 1}]);

    function addSemester() {
        const tempid = currentID+1;
        let tempsem = (1+tempid)%semestersPerYear;
        const tempyear = Math.trunc(tempid/semestersPerYear)+1;
        if (tempsem===0) {
            tempsem+=semestersPerYear;
        }
        setID(tempid);
        const temp: TableFace = {id: tempid, semester: tempsem, year: tempyear};
        const sems: TableFace[] = semesters;
        sems.push(temp);
        setSem(sems);
    }
    
    function deleteSemester() {
        setID(currentID-1);
        const sems: TableFace[] = semesters; 
        sems.pop();
        if (!sems[0]) {
            setID(-1);
        }
        setSem(sems);
    }
    
    function deleteAllSems() {
        setID(0);
        setSem([{id:0, semester: 1, year: 1}]);
    }

    return (
        <>
            <Row><Button onClick={addSemester} className="m-3">Add Semester</Button></Row>
            <Row>
                <table>
                    { semesters.map((sem: TableFace) => {
                        return <tr key={sem.year}>
                            <td><YearViewer semesterList={semesters} setSemesterFunc={setSem} lastID={currentID} changeID={setID} perYear={semestersPerYear}></YearViewer></td>
                        </tr>;
                    })}
                </table>
            </Row>
            <Button onClick={deleteSemester} className="m-3">Delete Last Semester</Button>
            <Button onClick={deleteAllSems} className="m-3">Start Over</Button>
        </>
        //<SubjectTable currentSem={currentSemester}></SubjectTable>
    );
}


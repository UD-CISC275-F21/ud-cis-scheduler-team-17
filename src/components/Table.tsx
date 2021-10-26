import { Row, Button } from "react-bootstrap";
import React from "react";
import { SubjectTable } from "./SubjectViewer";
import { TableFace } from "../interfaces/tableface";
import { useState } from "react";

/*
I think for this it should return a card and several subject components (which will need to be made for ease of adding classes).
It should have the buttons to add courses.
3 columns 5 rows default?
-NEEDS SUBJECTVIEWER COMPONENT FOR RETURN
-NEEDS "ADD CLASS" BUTTON
*/
export function OurTable() : JSX.Element {
    //const defaultID = 1;
    const [currentSemester, setSemester] = useState<number>(1);
    const [currentYear, setYear] = useState<number>(1);
    const [currentID, setID] = useState<number>(1);
    //const [currentki, setki] = useState<number>(1);
    const semestersPerYear = 2; // In case we want to change the number of semesters per year
    //let newSemester: TableFace = 
    /*const semesters: TableFace[] = [
        {semester: 1}
    ];*/

    //const [semesters, setSem] = useState<TableFace[]>([{semester: currentSemester}]);
    const [semesters, setSem] = useState<TableFace[]>([{id: currentID, semester: currentSemester, year: currentYear}]);

    function addSemester() {
        const tempid = currentID+1;
        let tempsem = tempid%semestersPerYear;
        let tempyear = currentYear;
        if (tempsem===0) {
            tempsem+=semestersPerYear;
        }
        if ((tempid%semestersPerYear)===1) {
            tempyear += 1;
            setYear(tempyear);
        }

        setSemester(tempsem);
        setID(tempid);
        const temp: TableFace = {id: tempid, semester: tempsem, year: tempyear};
        //temp.semester = currentSemester;
        const sems: TableFace[] = semesters;
        sems.push(temp);
        setSem(sems);
    }

    function deleteSemester() {
        setID(currentID-1);
        const sems: TableFace[] = semesters; 
        sems.pop();
        setSem(sems);
    }
    
    function deleteAllSems() {
        setSemester(1);
        setYear(1);
        setID(1);
        setSem([{id: 1, semester: 1, year: 1}]);
    }

    /*const tempSems: TableFace[] = semesters;
    tempSems.push({semester: currentSemester});
    addSem(tempSems);*/

    return (
        <>
            <Row><Button onClick={addSemester} className="m-3">Add Semester</Button></Row>
            <Row>
                <table>
                    { semesters.map((sem: TableFace) => {
                        return <tr key={sem.id}>
                            <td><SubjectTable currentSem={sem.semester} currYear={sem.year} currID={sem.id} semList={semesters} setSemList={setSem} thisID={currentID} idSet={setID}></SubjectTable></td>
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


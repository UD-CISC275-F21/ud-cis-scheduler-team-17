import { Row, Button} from "react-bootstrap";
import React from "react";
import { SubjectTable } from "./SubjectViewer";
import { Semester } from "../interfaces/semester";
import { useState } from "react";

/*
I think for this it should return a card and several subject components (which will need to be made for ease of adding classes).
It should have the buttons to add courses.
3 columns 5 rows default?
-NEEDS "ADD CLASS" BUTTON
*/

export function SemesterTable() : JSX.Element {
    //const defaultID = 1;
    //const [currentSemester, setSemester] = useState<number>(0);
    //const [currentYear, setYear] = useState<number>(0);
    const [currentID, setID] = useState<number>(0);
    const semestersPerYear = 2; // In case we want to change the number of semesters per year
    //let newSemester: TableFace = 
    /*const semesters: TableFace[] = [
        {semester: 1}
    ];*/
    //setSemester(currentSemester); // This exists solely to appease the linter.
    //const [semesters, setSem] = useState<TableFace[]>([{semester: currentSemester}]);
    //const [semesters, setSem] = useState<TableFace[]>([{id: currentID, semester: currentSemester, year: currentYear}]);
    const [allSemesters, changeSemesters] = useState<Semester[]>([{id:currentID, semesterNum: 1, year: 1}]);
    
    const [semesterCounter, setSemesterCounter] = useState<number>(0);

    function addSemester() {
        const tempSemCounter = semesterCounter+1;
        const tempid = currentID+1;
        let tempsem = (1+tempSemCounter)%semestersPerYear;
        /*if (currentID===0) {
            tempsem = 2;
        }*/
        //let tempyear = currentYear;
        const tempyear = Math.trunc(tempSemCounter/semestersPerYear)+1;
        if (tempsem===0) {
            tempsem+=semestersPerYear;
        }
        /*if ((tempid%semestersPerYear)===0) {
            /*if (currentID===0) {
                tempyear -= 1;
            }
            tempyear += 1;
            setYear(tempyear);
        }*/

        //setSemester(tempsem);
        setID(tempid);
        const temp: Semester = {id: tempid, semesterNum: tempsem, year: tempyear};
        //temp.semester = currentSemester;
        const sems: Semester[] = [...allSemesters, temp];
        //sems.push(temp);
        changeSemesters(sems);
        setSemesterCounter(tempSemCounter);
    }
    
    function deleteSemester() {
        setID(currentID-1);
        const sems: Semester[] = [...allSemesters]; 
        sems.pop();
        if (!sems[0]) {
            setID(-1);
            //setYear(0);
            //setSemester(0);
        }
        changeSemesters(sems);
    }
    
    function deleteAllSems() {
        //setSemester(0);
        //setYear(0);
        setID(-1);
        changeSemesters([]);
        setSemesterCounter(-1);
        //addSemester();
    }

    /*const tempSems: TableFace[] = semesters;
    tempSems.push({semester: currentSemester});
    addSem(tempSems);*/

    return (
        <>
            <Row><Button data-testid="add-semester-button" onClick={addSemester} className="btn btn-add m-3" style={{fontFamily: "Courier New"}}>Add Semester</Button></Row>
            <Row>
                <table>
                    { allSemesters.map((sem: Semester) => {
                        return <tr key={sem.id}>
                            <td><SubjectTable currentSem={sem.semesterNum} currYear={sem.year} currID={sem.id} semList={allSemesters} setSemList={changeSemesters} lastID={currentID} idSet={setID} semPer={semestersPerYear} semCount={semesterCounter} setSemCount={setSemesterCounter}></SubjectTable></td>
                        </tr>;
                    })}
                </table>
            </Row>
            <Button data-testid="delete-last-semester-button" onClick={deleteSemester} className="btn btn-delete m-3" style={{fontFamily: "Courier New"}}>Delete Last Semester</Button>
            <Button data-testid="clear-all-semesters-button" onClick={deleteAllSems} className="btn btn-delete m-3" style={{fontFamily: "Courier New"}}>Clear All Semesters</Button>
        </>
        //<SubjectTable currentSem={currentSemester}></SubjectTable>
    );
}


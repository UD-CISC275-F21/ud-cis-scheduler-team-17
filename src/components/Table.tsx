import { Row, Button } from "react-bootstrap";
import React from "react";
import { SubjectTable } from "./SubjectViewer";
import { TableFace } from "../interfaces/tableface";
import { useState } from "react";

/*
I think for this it should return a card and several subject components (which will need to be made for ease of adding classes).
It should have the buttons to add courses.
3 columns 5 rows default?
-NEEDS "ADD CLASS" BUTTON
*/
export function OurTable() : JSX.Element {
    //const defaultID = 1;
    //const [currentSemester, setSemester] = useState<number>(0);
    //const [currentYear, setYear] = useState<number>(0);
    const [currentID, setID] = useState<number>(0);
    //const [currentki, setki] = useState<number>(1);
    const semestersPerYear = 2; // In case we want to change the number of semesters per year
    //let newSemester: TableFace = 
    /*const semesters: TableFace[] = [
        {semester: 1}
    ];*/
    //setSemester(currentSemester); // This exists solely to appease the linter.
    //const [semesters, setSem] = useState<TableFace[]>([{semester: currentSemester}]);
    //const [semesters, setSem] = useState<TableFace[]>([{id: currentID, semester: currentSemester, year: currentYear}]);
    const [semesters, setSem] = useState<TableFace[]>([{id:currentID, semester: 1, year: 1}]);

    function addSemester() {
        const tempid = currentID+1;
        let tempsem = (1+tempid)%semestersPerYear;
        /*if (currentID===0) {
            tempsem = 2;
        }*/
        //let tempyear = currentYear;
        const tempyear = Math.trunc(tempid/semestersPerYear)+1;
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
        if (!sems[0]) {
            setID(-1);
            //setYear(0);
            //setSemester(0);
        }
        setSem(sems);
    }
    
    function deleteAllSems() {
        //setSemester(0);
        //setYear(0);
        setID(0);
        setSem([{id:0, semester: 1, year: 1}]);
        //addSemester();
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
                            <td><SubjectTable currentSem={sem.semester} currYear={sem.year} currID={sem.id} semList={semesters} setSemList={setSem} thisID={currentID} idSet={setID} semPer={semestersPerYear}></SubjectTable></td>
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


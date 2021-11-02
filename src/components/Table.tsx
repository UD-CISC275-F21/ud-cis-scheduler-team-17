import { Row, Button } from "react-bootstrap";
import React from "react";
//import { SubjectTable } from "./SubjectViewer";
import { TableFace } from "../interfaces/tableface";
import { useState } from "react";
import { YearViewer } from "./YearViewer";
import { Year } from "../interfaces/year";
import { fixYear } from "../functions/fixYear";

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
    //const initYear: Year = {thisYear: semesters};
    const [yearList, setYearList] = useState<Year[]>([{yearNum: 1, thisYear: [semesters[0]]}]);

    /*function fixYear() {
        let tempList: Year[] = yearList;
        let tempy: Year;
        tempy = tempList[0];
        let temps: TableFace;
        for (let i=0, j=0, t=1; semesters[i]; i++) {
            temps = semesters[i];
            //tempy = yearList[t];
            if (temps.year!=t) {
                tempList.push(tempy);
                t += 1;
                j = 0;
                tempy.thisYear = [];
            }
            tempy.thisYear[j] = temps;
        }
        setYearList(tempList);
    }*/
    
    function addSemester() {
        const tempid = currentID+1;
        let tempsem = (1+tempid)%semestersPerYear;
        const tempyear = Math.trunc(tempid/semestersPerYear)+1;
        if (tempsem===0) {
            tempsem+=semestersPerYear;
        }
        setID(tempid);
        const temp: TableFace = {id: tempid, semester: tempsem, year: tempyear};
        const sems: TableFace[] = [...semesters, temp];
        //sems.push(temp);
        /*const tempY: Year[] = fixYear(sems);
        setSem(sems);
        setYearList(tempY);*/
        updateSY(sems);
    }
    
    function deleteSemester() {
        setID(currentID-1);
        const sems: TableFace[] = semesters; 
        sems.pop();
        if (!sems[0]) {
            setID(-1);
        }
        //setSem(sems);
        updateSY(sems);
    }
    
    function deleteAllSems() {
        setID(0);
        //setSem([{id:0, semester: 1, year: 1}]);
        updateSY([{id:0, semester: 1, year: 1}]);
    }

    function updateSY(lists: TableFace[]) {
        setSem(lists);
        setYearList(fixYear(lists));
    }

    return (
        <>
            <Row><Button onClick={addSemester} className="m-3">Add Semester</Button></Row>
            <Row>
                <table>
                    { yearList.map((yr: Year) => {
                        return <tr key={yr.yearNum}>
                            <td><YearViewer semesterList={semesters} setSemesterFunc={updateSY} lastID={currentID} changeID={setID} perYear={semestersPerYear}></YearViewer></td>
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


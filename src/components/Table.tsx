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
    const [currentSemester, setSemester] = useState<number>(1);
    const [currentYear, setYear] = useState<number>(1);
    //let newSemester: TableFace = 
    /*const semesters: TableFace[] = [
        {semester: 1}
    ];*/

    //const [semesters, setSem] = useState<TableFace[]>([{semester: currentSemester}]);
    const [semesters, setSem] = useState<TableFace[]>([{semester: currentSemester, year: currentYear}]);

    function addSemester() {
        const tempsem = currentSemester+1;
        let tempyear = currentYear;
        if ((tempsem%2)===1) {
            tempyear += 1;
            setYear(tempyear);
        }

        setSemester(tempsem);
        const temp: TableFace = {semester: tempsem, year: tempyear};
        //temp.semester = currentSemester;
        const sems: TableFace[] = semesters;
        semesters.push(temp);
        setSem(sems);
    }
    function deleteSemester() {
        const sems: TableFace[] = semesters; 
        semesters.pop();
        setSem(sems);
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
                        return <tr key={sem.semester}>
                            <td><SubjectTable currentSem={sem.semester} currYear={sem.year}></SubjectTable></td>
                        </tr>;
                    })}
                </table>
            </Row>
            <Row><Button onClick={deleteSemester}>Delete Semester</Button></Row>
        </>
        //<SubjectTable currentSem={currentSemester}></SubjectTable>
    );
}


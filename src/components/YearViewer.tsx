import React from "react";
import { Row } from "react-bootstrap";
//import { useState } from "react";
import { TableFace } from "../interfaces/tableface";
import { SubjectTable } from "./SubjectViewer";
import { Year } from "../interfaces/year";
//import { Button, Form, Modal} from "react-bootstrap";
//import { Subject } from "../interfaces/subject";  // I renamed table interface to subject

export function YearViewer({semesterList, setSemesterFunc, lastID, changeID, perYear}: {
    semesterList: TableFace[]
    setSemesterFunc: (semList: TableFace[]) => void,
    lastID: number,
    changeID: (num: number) => void,
    perYear: number,
}) : JSX.Element {
    /*const [currentID, setID] = useState<number>(0);
    const semestersPerYear = 2; // In case we want to change the number of semesters per year
    const [semesters, setSem] = useState<TableFace[]>([{id:currentID, semester: 1, year: 1}]);*/
    //const [yearList, setYearList] = useState<Year[]>([]);
    /*let tempList: Year[] = listYear;
    let tempy: Year;
    tempy = tempList[0];
    let temps: TableFace;
    for (let i=0, j=0, t=1; semesterList[i]; i++) {
        temps = semesterList[i];
        //tempy = yearList[t];
        if (temps.year!=t) {
            tempList.push(tempy);
            t += 1;
            j = 0;
            tempy.thisYear = [];
        }
        tempy.thisYear[j] = temps;
    }
    setListYear(tempList);*/

    return (
        <Row>
            <table>
                { semesterList.map((sem: TableFace) => {
                    return <tr key={sem.id}>
                        <td><SubjectTable currentSem={sem.semester} currYear={sem.year} currID={sem.id} semList={semesterList} setSemList={setSemesterFunc} thisID={lastID} idSet={changeID} semPer={perYear}></SubjectTable></td>
                    </tr>;
                })}
            </table>
        </Row>
    );
}
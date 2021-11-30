import { Row, Button} from "react-bootstrap";
import React from "react";
import { ClassTable } from "./ClassTable";
import { Semester } from "../interfaces/semester";
import { useState } from "react";

export function SemesterTable() : JSX.Element {
    const [currentID, setID] = useState<number>(0);
    const semestersPerYear = 2; // In case we want to change the number of semesters per year
    const defaultClasses = [{courseID: "CISC", name: "Class Name", credits: 3, key: 1},{courseID: "CISC", name: "Class Name", credits: 3, key: 2},{courseID: "CISC", name: "Class Name", credits: 3, key: 3},{courseID: "CISC", name: "Class Name", credits: 3, key: 4},{courseID: "CISC", name: "Class Name", credits: 3, key: 5}];
    const [semesterCounter, setSemesterCounter] = useState<number>(0);
    const LOCAL_STORAGE_SEMESTERS = "schedule";
    const INITIAL_SEMESTERS: Semester[] = [
        {id:currentID, semesterNum: 1, year: 1, classes: defaultClasses}
    ];

    function getLocalStorageSemesters(): Semester[] {
        const rawSemesters: string|null = localStorage.getItem(LOCAL_STORAGE_SEMESTERS);
        if (rawSemesters === null) {
            return [...INITIAL_SEMESTERS];
        } else {
            return JSON.parse(rawSemesters);
        }
    }

    const [allSemesters, changeSemesters] = useState<Semester[]>(getLocalStorageSemesters);

    function addSemester() {
        const tempSemCounter = semesterCounter+1;
        const tempid = currentID+1;
        let tempsem = (1+tempSemCounter)%semestersPerYear;
        const tempyear = Math.trunc(tempSemCounter/semestersPerYear)+1;
        if (tempsem===0) {
            tempsem+=semestersPerYear;
        }

        setID(tempid);
        const temp: Semester = {id: tempid, semesterNum: tempsem, year: tempyear, classes: defaultClasses};
        const sems: Semester[] = [...allSemesters, temp];
        changeSemesters(sems);
        setSemesterCounter(tempSemCounter);
    }
    
    function deleteSemester() {
        setID(currentID-1);
        const sems: Semester[] = [...allSemesters]; 
        sems.pop();
        if (!sems[0]) {
            setID(-1);
        }
        changeSemesters(sems);
    }
    
    function deleteAllSems() {
        setID(-1);
        changeSemesters([]);
        setSemesterCounter(-1);
    }

    // Credit to https://stackoverflow.com/questions/66801478/write-to-a-text-or-json-file-react-node for the JSON saving function
    /*
    function saveToJSON() {
        const fileData = JSON.stringify(allSemesters);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "filename.json";
        link.href = url;
        link.click();
    }
    */

    function saveToLocal() {
        localStorage.setItem(LOCAL_STORAGE_SEMESTERS, JSON.stringify(allSemesters));
    }


    return (
        <>
            <Row><Button data-testid="add-semester-button" onClick={addSemester} className="btn btn-add m-3" style={{fontFamily: "Courier New"}}>Add Semester</Button></Row>
            <Row>
                <table>
                    { allSemesters.map((sem: Semester) => {
                        return <tr key={sem.id}>
                            <td><ClassTable currentSem={sem.semesterNum} currYear={sem.year} currID={sem.id} semList={allSemesters} setSemList={changeSemesters} lastID={currentID} idSet={setID} semPer={semestersPerYear} setSemCount={setSemesterCounter} classList={sem.classes}></ClassTable></td>
                        </tr>;
                    })}
                </table>
            </Row>
            <Button data-testid="delete-last-semester-button" onClick={deleteSemester} className="btn btn-delete m-3" style={{fontFamily: "Courier New"}}>Delete Last Semester</Button>
            <Button data-testid="clear-all-semesters-button" onClick={deleteAllSems} className="btn btn-delete m-3" style={{fontFamily: "Courier New"}}>Clear All Semesters</Button>
            <Button data-testid="save-to-local-button" onClick={saveToLocal} className="btn btn-save m-3">Save Layout</Button>
        </>
        //<Button data-testid="save-to-json-button" onClick={saveToJSON} className="m-3">Save</Button>
        //<Button data-testid="load-from-json-button" onClick={Upload} className="m-3">Load</Button>
    );
}


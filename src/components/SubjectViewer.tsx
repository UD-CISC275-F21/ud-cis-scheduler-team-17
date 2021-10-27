import React, { useState } from "react";
import {Subject} from "../interfaces/subject";
import { Card, Row, Button, Col } from "react-bootstrap";
import { TableFace } from "../interfaces/tableface";

export function SubjectTable({currID, currentSem, currYear, semList, setSemList, thisID, idSet, semPer}:{
    currID: number,
    currentSem: number,
    currYear: number,
    semList: TableFace[],
    setSemList: (semList: TableFace[]) => void,
    thisID: number,
    idSet: (num: number) => void,
    semPer: number
}) : JSX.Element {

    const [newSubject, setNewSubject] = useState<Subject>({id: "CISC", name: "ClassName", credits: 3});

    const subjectList: Subject[] = [newSubject, newSubject, newSubject, newSubject, newSubject];

    
    function deleteSem () {
        //idSet(thisID+1);
        const fixedList: TableFace[] = semList;
        //const idx = fixedList.indexOf({id: currID, semester: currentSem, year: currYear});
        //const idx = fixedList.indexOf(this);
        fixedList.splice(currID, 1);
        if (fixedList[0]) {
            let temp: TableFace; 
            for (let i=currID; fixedList[i]; i++) {
                temp = fixedList[i];
                temp.id = i;
                temp.semester -= 1;
                if (temp.semester==0) {
                    temp.year -= 1;
                    temp.semester = semPer;
                }
                fixedList[i] = temp;
            }
            idSet(thisID-1);
            setSemList(fixedList);
        } else {
            idSet(-1);
        }
    }

    //<Row>ID {currID}</Row>
    return (
        <Card>
            <Row><strong>Semester {currentSem} Year {currYear}</strong></Row>
            <table>
                <tr><th>Class ID</th><th>Class Name</th><th>Credits</th></tr>
                { subjectList.map((sbj: Subject) => {
                    return <tr key={sbj.name}>
                        <td><form>
                            <input type="text" value={sbj.id}/><input type="submit" value ="Submit ID"></input>
                        </form></td>
                        
                        <td><form>
                            <input type="text" value={sbj.name}/><input type="submit" value ="Submit Class Name"></input>
                        </form></td>

                        <td><form>
                            <input type="text" value={sbj.credits}/><input type="submit" value ="Submit Credits"></input>
                        </form></td>
                    </tr>;
                })}
            </table>
            <Row>
                <Col><Button >Add Course</Button></Col>
                <Col><Button >Delete Course</Button></Col>
                <Col><Button onClick={deleteSem}>Delete This Semester</Button></Col>
            </Row>
        </Card>
    );
    //Table setup credit to Dr. Bart
}
import React from "react";
import {Subject} from "../interfaces/subject";

export function SubjectTable() : JSX.Element {
    const subjectList: Subject[] = [
        {id: "CISC106", name: "General Computer Science for Engineers", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3},
        {id: "CISC", name: "ClassName", credits: 3}];
    
    return (
        <table>
            <tr><th>Class ID</th><th>Class Name</th><th>Credits</th></tr>
            { subjectList.map((sbj: Subject) => {
                return (<tr key={sbj.name}>
                    <td>{sbj.id}</td>
                    <td>{sbj.name}</td>
                    <td>{sbj.credits}</td>
                </tr>);
            })}
        </table>
    );
    //Table setup credit to Dr. Bart
}
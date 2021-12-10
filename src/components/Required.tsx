import React from "react";
import { Class } from "../interfaces/class";
import { Card } from "react-bootstrap";

export function Requirements({reqList}: {
    reqList: Class[]
}) : JSX.Element {
    
    return (
        <>
            <Card className="text-center">
                <u><strong>Required Courses:</strong></u>
                <table>
                    { reqList.map((course: Class) => {
                        return <tr key={course.courseID}>
                            <td>{course.courseID}</td>
                        </tr>;
                    })}
                </table>
            </Card>
        </>
    );
}
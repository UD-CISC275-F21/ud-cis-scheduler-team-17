//import { SubjectTable } from "../components/SubjectViewer";

import { Class } from "./class";

export interface Semester {
    //ki: number
    id: number
    semesterNum: number
    year: number
    classes: Class[]
    //innerTable: typeof SubjectTable
}
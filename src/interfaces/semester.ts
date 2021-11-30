import { Class } from "./class";

export interface Semester {
    id: number
    semesterNum: number
    year: number
    classes: Class[]
}
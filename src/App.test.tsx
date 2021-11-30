import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
//import { start } from "repl";

/*test("renders UD CIS Scheduler text", () => {
    render(<App />);
    const linkElement = screen.getByText(/UD CIS Scheduler/i);
    expect(linkElement).toBeInTheDocument();
});*/

/* COPY CODE BELOW FOR TEST TEMPLATE (NOTE, if it involves clicking buttons it should have: async () => {}):
    it("", () => {
        
    });
*/

describe("App", () => {
    beforeEach(() => {
        render(<App />);
    });

    /*it("has the Control Panel when the application loads", () => {
        const element = screen.getByText("Semester 1 Year 1");
        expect(element).toBeInTheDocument();
    });*/

    it("should have one semester on screen on load", () => {
        const listOfSemesters = screen.getAllByText(/Semester \d Year \d/);
        expect(listOfSemesters.length).toEqual(1);
    });

    it("adds a semester when Add Semester button is clicked", async () => {
        const addSemButton = screen.getByTestId("add-semester-button");
        const listOfSemesters = screen.getAllByText(/Semester \d Year \d/);
        addSemButton.click();
        const newListOfSemesters = await screen.queryAllByText(/Semester \d Year \d/);
        expect(listOfSemesters.length+1).toEqual(newListOfSemesters.length);
    });

    it("deletes a semester when Delete Last Semester button is clicked", async () => {
        const deleteLastSemButton = screen.getByTestId("delete-last-semester-button");
        const listOfSemesters = screen.getAllByText(/Semester \d Year \d/);
        deleteLastSemButton.click();
        const newListOfSemesters = await screen.queryAllByText(/Semester \d Year \d/);
        expect(listOfSemesters.length-1).toEqual(newListOfSemesters.length);
    });

    it("should clear and add one semester when Clear All Semesters button is clicked", async () => {
        const startOverButton = screen.getByTestId("clear-all-semesters-button");
        const addSemesterButton = screen.getByTestId("add-semester-button");
        addSemesterButton.click();
        const twoSemesterList = screen.getAllByText(/Semester \d Year \d/);
        startOverButton.click();
        const resetSemesterList = screen.queryAllByText(/Semester \d Year \d/);
        expect(resetSemesterList.length).toEqual(0);
        expect(resetSemesterList).not.toEqual(twoSemesterList);
    });

    it("adds a course when you click Add Course button", async () => {
        const addCourseButton = screen.getByTestId("add-course-button");
        const listOfCourses = screen.getAllByText(/CISC/);
        addCourseButton.click();
        const newListOfCourses = screen.getAllByText(/CISC/);
        expect(listOfCourses.length+1).toEqual(newListOfCourses.length);
    });

    it("deletes last course when you click Delete Course button", async () => {
        const deleteCourseButton = screen.getByTestId("delete-last-course-button");
        const listOfCourses = screen.getAllByText(/CISC/);
        deleteCourseButton.click();
        const newListOfCourses = screen.queryAllByText(/CISC/);
        expect(listOfCourses.length-1).toEqual(newListOfCourses.length);
    });

    it("deletes the semester when Delete This Semester button clicked", async () => {
        const deleteThisSemesterButton = screen.getByTestId("delete-this-semester-button");
        const initialSemesterList = screen.getAllByText(/Semester \d Year \d/);
        deleteThisSemesterButton.click();
        const deletedSemesterList = screen.queryAllByText(/Semester \d Year \d/);
        expect(deletedSemesterList.length).toEqual(initialSemesterList.length-1);
    });

    it("clears all courses in a semester when Clear Courses button is clicked", async () => {
        const clearCoursesButton = screen.getByTestId("clear-courses-button");
        clearCoursesButton.click();
        const newCourses = screen.queryAllByText(/CISC/);
        expect(newCourses.length).toEqual(0);
    });
    //TODO: Test edit buttons
    /*
    it("edits the information in courses when Edit button is pressed, information is passed, and Submit button is pressed", async() => {
        const editButton = screen.getByTestId("edit-button");
        const initialCourse = screen.getByText(/CISC/);

    });
    */
});
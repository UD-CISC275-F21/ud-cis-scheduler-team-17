import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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
        const listOfSemesters = screen.getAllByText(/Year \d Semester \d/);
        expect(listOfSemesters.length).toEqual(1);
    });

    it("adds a semester when Add Semester button is clicked", async () => {
        const addSemButton = screen.getByTestId("add-semester-button");
        const listOfSemesters = screen.getAllByText(/Year \d Semester \d/);
        addSemButton.click();
        const newListOfSemesters = await screen.queryAllByText(/Year \d Semester \d/);
        expect(listOfSemesters.length+1).toEqual(newListOfSemesters.length);
    });

    it("should clear and add one semester when Clear All Semesters button is clicked", async () => {
        const startOverButton = screen.getByTestId("clear-all-semesters-button");
        const addSemesterButton = screen.getByTestId("add-semester-button");
        addSemesterButton.click();
        const twoSemesterList = screen.getAllByText(/Year \d Semester \d/);
        startOverButton.click();
        const resetSemesterList = screen.queryAllByText(/Year \d Semester \d/);
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

    it("deletes the semester when Delete This Semester button clicked", async () => {
        const deleteThisSemesterButton = screen.getByTestId("delete-this-semester-button");
        const initialSemesterList = screen.getAllByText(/Year \d Semester \d/);
        deleteThisSemesterButton.click();
        const deletedSemesterList = screen.queryAllByText(/Year \d Semester \d/);
        expect(deletedSemesterList.length).toEqual(initialSemesterList.length-1);
    });

    it("clears all courses in a semester when Clear Courses button is clicked", async () => {
        const clearCoursesButton = screen.getByTestId("clear-courses-button");
        clearCoursesButton.click();
        const newCourses = screen.queryAllByText(/Class Name/);
        expect(newCourses.length).toEqual(1); // 2 Because of the ones in the header
    });
    /*
    it("edits the information in courses when Edit button is pressed, information is passed, and Submit button is pressed", async() => {
        const editButton = screen.getByTestId("edit-button");
        const initialCourse = screen.getByText(/CISC/);
        
    });
    */

    it("adds 10 semesters, to check if it still functions correctly", async () => {
        const addSemesterButton = screen.getByTestId("add-semester-button");
        for (let i = 0; i < 10; i++) {
            addSemesterButton.click();
        }
        const newSemesters = screen.queryAllByText(/Year \d Semester \d/);
        expect(newSemesters.length).toEqual(11); // 1 original semester, 10 more added on
    });

    it("still functions when clear all semesters is pressed when there are no semesters", async() => {
        const clearSemestersButton = screen.getByTestId("clear-all-semesters-button");
        clearSemestersButton.click();
        const clearedSemesters = screen.queryAllByText(/Year \d Semester \d/);
        expect(clearedSemesters.length).toEqual(0); // Clears first semester

        clearSemestersButton.click();
        const newSemesters = screen.queryAllByText(/Year \d Semester \d/);
        expect(newSemesters.length).toEqual(clearedSemesters.length); // Nothing should change on second clear
    });

    it("deletes every class of a semester, then deletes the semester with no errors", async() => {
        const deleteCourseButtons = screen.getAllByTestId("delete-course-button");
        for (let i = 0; i < deleteCourseButtons.length; i++) {
            deleteCourseButtons[i].click();
        }
        const noCourses = screen.queryAllByText(/Class Name/);
        expect(noCourses.length).toEqual(1); // Only instance of Class Name is header

        const deleteThisSemesterButton = screen.getByTestId("delete-this-semester-button");
        deleteThisSemesterButton.click();
        const noSemesters = screen.queryAllByText(/Class Name/);
        expect(noSemesters.length).toEqual(0); // Semester should clear and leave no header to be found
    });

    it("deletes the appropriate semester when delete semester is clicked", async() => {
        const addSemesterButton = screen.getByTestId("add-semester-button");
        for(let i = 0; i < 3; i++) {
            addSemesterButton.click();
        }
        const editCourseButtons = screen.getAllByTestId("edit-course-button");
        editCourseButtons[5].click(); // Click the first edit button on the second semester
        const editBoxes = screen.getAllByTestId("input-group");
        expect(editBoxes.length).toEqual(3); // 3 edit boxes should appear

        const deleteSemesterButtons = screen.getAllByTestId("delete-this-semester-button");
        deleteSemesterButtons[1].click();
        const newEditBoxes = screen.queryAllByTestId("input-group");
        expect(newEditBoxes.length).toBeLessThan(editBoxes.length); // There should be no more edit boxes, deleting semester 2 specifically
    });

    it("defaults to the previous text in the edit box when submitted with no changes", async() => {
        const defaultCourses = screen.getAllByText(/Class Name/);
        expect(defaultCourses.length).toEqual(6); // 5 courses + header
        
        const editCourseButtons = screen.getAllByTestId("edit-course-button");
        editCourseButtons[0].click();
        const submitButton = screen.getByTestId("submit-button");
        submitButton.click();
        const postSubmitCourses = screen.getAllByText(/Class Name/);
        expect(postSubmitCourses.length).toEqual(6); // Should still be 6 if nothing changed
    });

    it("edits the first course to say something different, and submits to update the semester", async() => {
        const editCourseButtons = screen.getAllByTestId("edit-course-button");
        editCourseButtons[0].click();
        const inputGroup = screen.getAllByTestId("input-group")[1]; // 1, so it edits the class name field
        fireEvent.change(inputGroup, {
            target: {value: "Cool New Class Name"},
        });
        const submitButton = screen.getByTestId("submit-button");
        submitButton.click();
        const editedCourses = screen.getAllByText("Cool New Class Name");
        expect(editedCourses.length).toEqual(1); // There should only be one cool class name
    });

    it("edits the correct row after adding a course", async() => {
        const addCourseButton = screen.getByTestId("add-course-button");
        addCourseButton.click();
        const editCourseButtons = screen.getAllByTestId("edit-course-button");
        editCourseButtons[2].click();
        const inputGroup = screen.getAllByTestId("input-group")[1];
        fireEvent.change(inputGroup, {
            target: {value: "Cool New Class Name"},
        });
        const submitButton = screen.getByTestId("submit-button");
        submitButton.click();
        const editedCourses = screen.getAllByText("Class Name", {exact: false});
        const specificCourse = editedCourses[3]; // 3 because of the header
        expect(specificCourse).toContainHTML("<td>Cool New Class Name</td>"); // The 3rd class should be the cool class name
    });

    it("edits the correct row after deleting a course", async() => {
        const deleteCourseButtons = screen.getAllByTestId("delete-course-button");
        deleteCourseButtons[3].click();
        const editCourseButtons = screen.getAllByTestId("edit-course-button");
        editCourseButtons[2].click();
        const inputGroup = screen.getAllByTestId("input-group")[1];
        fireEvent.change(inputGroup, {
            target: {value: "Cool New Class Name"},
        });
        const submitButton = screen.getByTestId("submit-button");
        submitButton.click();
        const editedCourses = screen.getAllByText("Class Name", {exact: false});
        const specificCourse = editedCourses[3]; // 3 because of the header
        expect(specificCourse).toContainHTML("<td>Cool New Class Name</td>"); // Check if the 3rd class has the expected edited result
    });

    it("edits one course, and that should have no effect on the default value of another edit", async() => {
        const editCourseButtons = screen.getAllByTestId("edit-course-button");
        editCourseButtons[0].click();
        const inputGroup = screen.getAllByTestId("input-group")[1];
        fireEvent.change(inputGroup, {
            target: {value: "Cool New Class Name"},
        });
        const submitButton = screen.getByTestId("submit-button");
        submitButton.click();
        const editedCourses = screen.getAllByText("Class Name", {exact: false});
        const specificCourse = editedCourses[1]; // 1 because of the header
        expect(specificCourse).toContainHTML("<td>Cool New Class Name</td>"); // Check to make sure the edit was successful

        editCourseButtons[2].click();
        const newSubmitButton = screen.getByTestId("submit-button");
        newSubmitButton.click();
        const coolNames = screen.getAllByText("Cool New Class Name");
        expect(coolNames.length).toEqual(1); // If the default was kept, and nothing was changed, there should only be one cool name
    });

    it("keeps the semesters separate, meaning, editing one semester does not affect another", async() => {
        const addSemesterButton = screen.getByTestId("add-semester-button");
        addSemesterButton.click();
        const editCourseButtons = screen.getAllByTestId("edit-course-button");
        editCourseButtons[0].click();
        const inputGroup = screen.getAllByTestId("input-group")[1];
        fireEvent.change(inputGroup, {
            target: {value: "Cool New Class Name"},
        });
        const submitButton = screen.getByTestId("submit-button");
        submitButton.click(); // Edit the first class in the first semester to be a cool name

        editCourseButtons[6].click(); // Edit the second class in the second semester
        const newSubmitButton = screen.getByTestId("submit-button");
        newSubmitButton.click(); // Submit with no changes
        const coolNames = screen.getAllByText("Cool New Class Name");
        expect(coolNames.length).toEqual(1); // If the semesters were separate entities, the cool name should not have been copied to Semester 2
    });

    it("edits all three fields and submits all three successfully", async() => {
        const editCourseButtons = screen.getAllByTestId("edit-course-button");
        editCourseButtons[0].click();
        const inputGroup = screen.getAllByTestId("input-group");
        fireEvent.change(inputGroup[0], {
            target: {value: "CISC100"},
        });
        fireEvent.change(inputGroup[1], {
            target: {value: "Cool New Class Name"},
        });
        fireEvent.change(inputGroup[2], {
            target: {value: "4"},
        });
        const submitButton = screen.getByTestId("submit-button");
        submitButton.click(); // Submits three changes in one edit

        const newClassIds = screen.getAllByText("CISC100");
        expect(newClassIds.length).toEqual(1);
        const coolNames = screen.getAllByText("Cool New Class Name");
        expect(coolNames.length).toEqual(1);
        const newCredits = screen.getAllByText("4");
        expect(newCredits.length).toEqual(1);
        // Makes sure that each info edit appears exactly once
    });

});
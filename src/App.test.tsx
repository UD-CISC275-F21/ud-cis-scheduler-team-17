import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

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
        const newListOfSemesters = await screen.getAllByText(/Semester \d Year \d/);
        expect(listOfSemesters.length-1).toEqual(newListOfSemesters.length);
    });
});
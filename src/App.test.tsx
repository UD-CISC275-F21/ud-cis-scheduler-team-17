import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

/*test("renders UD CIS Scheduler text", () => {
    render(<App />);
    const linkElement = screen.getByText(/UD CIS Scheduler/i);
    expect(linkElement).toBeInTheDocument();
});*/

describe("App", () => {
    beforeEach(() => {
        render(<App />);
    });

    it("has the Control Panel when the application loads", () => {
        const element = screen.getByText("Semester 1 Year 1");
        expect(element).toBeInTheDocument();
    });
});
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import DateDisplay from "./DateDisplay";

describe("DateDisplay Component", () => {
    let today = new Date();

    it.each`
    date          | output
    ${today} | ${"0 seconds ago"}
    ${new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1)} | ${"1 day ago"}}
    ${new Date(today.getFullYear(), today.getMonth() - 1)} | ${"1 month ago"}
    ${new Date(2020, 2)} | ${"March 2020"} 
    `
    ("Should say $output if the date is $date", async ({date, output}) => {
        render(<DateDisplay date={date} />)      

        expect(screen.getByTestId('date-display')).toHaveTextContent(output);
    });

})
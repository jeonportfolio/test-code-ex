import { render } from "@testing-library/react";
import { describe, expect } from "vitest";
import Greeting from "./Greeting";

describe('Greeting Component', () => {
    it('should render correctly', () => {
       const { getByText } = render(<Greeting name={"brown"}/>);
       expect(getByText("Hello, brown")).toBeInTheDocument();
    });
    it('should render', () => {
        const { asFragment } = render(<Greeting name={"brown"}/>);
        expect(asFragment()).toMatchSnapshot();
    }) 
});
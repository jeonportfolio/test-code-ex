import { describe } from "vitest";
import HelloWorld from "./HelloWorld";
import { render } from "@testing-library/react";


describe('Hello Component', () => {
    it('render', () => {
        const{ getByText } = render(<HelloWorld/>);
        expect(getByText('HelloWorld')).toBeInTheDocument();
    });
});
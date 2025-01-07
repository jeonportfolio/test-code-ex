import { queryByText, render, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, vi } from "vitest";
import Profile from "./Profile";

const mockUser = {
    name: 'Brown',
    email: 'brown@naver.com',
};

describe('Profile Component', () => {
    beforeEach(() => {
        global.fetch = vi.fn(() => 
            Promise.resolve({
            json: () => Promise.resolve(mockUser)
            })
        );
    });
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should render correctly', async() => {
        const { getByText, queryByText } = render(<Profile userId="1"/>)
        
        expect(getByText('loading...')).toBeInTheDocument();

        await waitFor(() => {
            expect(getByText("Brown")).toBeInTheDocument();
        });
        expect(queryByText("loading...")).not.toBeInTheDocument();
    });

    // geyByText는 요소가 필수적으로 있어야 하고 queryByText는 요소가 존재하지 않아야 하는 경우를 말함 
    
});
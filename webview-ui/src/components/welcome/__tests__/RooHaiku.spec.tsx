import { render, screen } from "@/utils/test-utils"

import RooHaiku from "../RooHaiku"

describe("RooHaiku Component", () => {
	test("renders the haiku text correctly", () => {
		render(<RooHaiku />)

		const haiku = screen.getByTestId("roo-haiku")
		expect(haiku).toBeInTheDocument()

		// Check that all three lines of the haiku are present
		expect(haiku).toHaveTextContent("Code flows like water")
		expect(haiku).toHaveTextContent("AI guides the developer's hand")
		expect(haiku).toHaveTextContent("Logic blooms anew")
	})

	test("applies correct styling classes", () => {
		render(<RooHaiku />)

		const haiku = screen.getByTestId("roo-haiku")
		expect(haiku).toHaveClass("text-center")
		expect(haiku).toHaveClass("text-vscode-descriptionForeground")
		expect(haiku).toHaveClass("italic")
		expect(haiku).toHaveClass("text-sm")
		expect(haiku).toHaveClass("mb-4")
		expect(haiku).toHaveClass("px-4")
	})
})

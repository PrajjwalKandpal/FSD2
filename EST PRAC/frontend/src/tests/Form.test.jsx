import { render, screen, fireEvent } from "@testing-library/react"
import Form from "../components/Form"

test("input works correctly", () => {
  render(<Form />)

  const input = screen.getByPlaceholderText("Enter name")
  fireEvent.change(input, { target: { value: "test" } })

  expect(input.value).toBe("test")
})
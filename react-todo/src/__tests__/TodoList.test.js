import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Learn Jest")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a todo");
  fireEvent.change(input, { target: { value: "Test Todo" } });
  fireEvent.submit(input.closest("form"));
  expect(screen.getByText("Test Todo")).toBeInTheDocument();
});

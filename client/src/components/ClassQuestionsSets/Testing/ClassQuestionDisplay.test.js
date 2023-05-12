import React from "react";
import { render } from "@testing-library/react";
import ClassComponent from "../ClassQuestionDisplay";

describe("ClassComponent", () => {
    const mockQuestions = [
        { id: 1, question: "Question 1", answer: "Answer 1", answers: [] },
        { id: 2, question: "Question 2", answer: "Answer 2", answers: [] },
        { id: 3, question: "Question 3", answer: "Answer 3", answers: [] },
    ];

  it("renders without crashing", () => {
    render(<ClassComponent setName="Test Set" questions={[]} />);
  });

  it("displays the set name correctly", () => {
    const { getByText } = render(<ClassComponent setName="Test Set" questions={[]} />);
    const setNameElement = getByText("Test Set");
    expect(setNameElement).toBeInTheDocument();
  });

  it("passes the correct props to QuestionAnswerIcon components", () => {
    const { container } = render(<ClassComponent setName="Test Set" questions={mockQuestions} />);
    const questionIcons = container.querySelectorAll(".question-icon");
    questionIcons.forEach((icon, index) => {
      expect(icon.getAttribute("data-question-id")).toBe(mockQuestions[index].id.toString());
    });
  });
});
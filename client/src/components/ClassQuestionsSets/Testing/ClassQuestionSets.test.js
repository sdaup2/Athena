import React from "react";
import { render, screen } from "@testing-library/react";
import ClassComponent from "../ClassQuestionSets";
import QuestionIcon from "../QuestionIcon";
//import { socket } from "../../socket";

describe("ClassComponent", () => {
  const mockQuestionSets = [
    {
      id: 1,
      title: "Question Set 1",
      questions: [
        { id: 1, title: "Question 1" },
        { id: 2, title: "Question 2" },
      ],
    },
  ];
  const mockQuestionSetsEdge = [
    {
      id: 1,
      title: "Question Set 1",
      questions: [
        { id: 1, title: "Question 1" },
        { id: 2, title: "Question 2" },
      ],
    },
    {
      id: 2,
      title: "Question Set 2",
      questions: [{ id: 3, title: "Question 3" }],
    },
  ];

  it("renders the class name and code correctly", () => {
    render(<ClassComponent className="Math" classCode="MATH101" questionSets={mockQuestionSets} />);
    expect(screen.getByText("Math")).toBeInTheDocument();
    expect(screen.getByText("MATH101")).toBeInTheDocument();
  });

  it("renders question sets correctly", () => {
    render(<ClassComponent className="Math" classCode="MATH101" questionSets={mockQuestionSets} />);
    const questionIcons = screen.getAllByTestId("question-set-container");
    expect(questionIcons.length).toBeDefined();
    expect(questionIcons.length).toBe(1);
  });

  it("renders question sets correctly when passed in multiple sets", () => {
    render(<ClassComponent className="Math" classCode="MATH101" questionSets={mockQuestionSetsEdge} />);
    const questionIcons = screen.getAllByTestId("question-set-container");
    expect(questionIcons.length).toBeDefined();
    expect(questionIcons.length).toBe(1);
  });

});

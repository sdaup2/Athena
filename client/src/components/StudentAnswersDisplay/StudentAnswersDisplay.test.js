import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import {StudentAnswersDisplay, checkAnswers } from './StudentAnswersDisplay';
import React from 'react';

describe('StudentAnswersDisplay', () => {
  const question = 'What is the capital of France?';
  const answerMap = {
    'Student A': 'Paris',
    'Student B': 'Madrid',
    'Student C': 'Berlin'
  };
  const correctTest = "Paris"

  // it renders correctly
  it('renders without crashing', () => {
    render(<StudentAnswersDisplay question={question} answerMap={answerMap} correctAnswer = {correctTest}/>);
  });

  // question is in component
  it('displays the correct question', () => {
    render(<StudentAnswersDisplay question={question} answerMap={answerMap} correctAnswer = {correctTest}/>);
    expect(screen.getByText(question)).toBeInTheDocument();
  });

  // edge case for an empty map
  it('renders correctly with an empty answerMap', () => {
    const emptyAnswerMap = {};
    const { getByText, queryByText } = render(
      <StudentAnswersDisplay
        question={question}
        answerMap={emptyAnswerMap}
        correctAnswer={correctTest}
      />
    );
    expect(getByText(question)).toBeInTheDocument();
    expect(queryByText('Student A')).toBeNull();
  });

  // edge case to make sure large map does not break component
  it('renders correctly with a large answerMap', () => {
    const largeAnswerMap = {
      "Jace": "A",
      "Brooke": "B",
      "Seth": "D",
      "Ealynn" : "E",
      "Jace2": "A",
      "Brooke2": "B",
      "Seth2": "D",
      "Ealynn2" : "E",
      "Jace3": "A",
      "Brooke3": "B",
      "Seth3": "D",
      "Ealyn3n" : "E",
      "Jac": "A",
      "Brook": "B",
      "Set3": "D",
      "Ealyn4n" : "E",
      "ace": "A",
      "rooke": "B",
      "eth": "D",
      "alynn" : "E",
      "ace2": "A",
      "rooke2": "B",
      "eth2": "D",
      "alynn2" : "E",
      "ace3": "A",
      "rooke3": "B",
      "eth3": "D",
      "alyn3n" : "E",
      "ac": "A",
      "rook": "B",
      "et3": "D",
      "alyn4n" : "E"
    };
    const { getByTestId } = render(
      <StudentAnswersDisplay
        question={question}
        answerMap={largeAnswerMap}
        correctAnswer={correctTest}
      />
    );
  
    expect(getByTestId('question-answer-container')).toBeInTheDocument();

    Object.keys(largeAnswerMap).forEach((student) => {
      const studentAnswer = getByTestId('question-answer-container').querySelectorAll('div');
      let found = false;
      for (let i = 0; i < studentAnswer.length; i++) {
        const strongElement = studentAnswer[i].querySelector('strong');
        if (strongElement && strongElement.textContent.includes(student)) {
          found = true;
          break;
        }
      }
      expect(found).toBeTruthy();
    });
  });

  // Ensures map is displayed correctly
  it('displays the correct answers for each student', () => {
    render(<StudentAnswersDisplay question={question} answerMap={answerMap} correctAnswer = {correctTest}/>);
    const answerContainers = screen.getAllByTestId('question-answer-container');
  
    answerContainers.forEach((container, index) => {
      const studentName = container.querySelector('strong');
      const answer = container.textContent.replace(studentName.textContent, '');
      expect(studentName.textContent).toEqual(Object.keys(answerMap)[index] + ': ');
    });
  });

  // ensures grading funtion works correctly
  it('returns the correct answer map as expected', () => {
    render(<StudentAnswersDisplay question={question} answerMap={answerMap} correctAnswer = {correctTest}/>);
    const expectedMap = {
      'Student A': true,
      'Student B': false,
      'Student C': false
    };
    const answerReults = checkAnswers(answerMap,correctTest)
    expect(answerReults).toEqual(expectedMap)
  });

  // ensures grading correctly 
  it('renders the component with correct background color for each answer', () => {
    const answerMap = {
      student1: 'A',
      student2: 'B',
      student3: 'C',
    };
    const correctAnswer = 'B';

    const { getAllByTestId } = render(
      <StudentAnswersDisplay
        question="What is the correct answer?"
        answerMap={answerMap}
        correctAnswer={correctAnswer}
      />
    );

    const answerContainers = getAllByTestId('question-answer-container');

    answerContainers.forEach((container, index) => {
      const answer = container.querySelector('div');
      const expectedClassName =
        answerMap[Object.keys(answerMap)[index]] === correctAnswer
          ? 'correct-answer'
          : 'incorrect-answer';

      expect(answer).toHaveClass(expectedClassName);
    });
  });

  // edge case for students having same name (don't know if we allow this but still interesting)
  it('renders the component with correct background color for multiple students with the same name', () => {
    const answerMap = {
      student1: 'A',
      student1: 'B',
      student3: 'B',
    };
    const correctAnswer = 'B';

    const { getAllByTestId } = render(
      <StudentAnswersDisplay
        question="What is the correct answer?"
        answerMap={answerMap}
        correctAnswer={correctAnswer}
      />
    );

    const answerContainers = getAllByTestId('question-answer-container');

    answerContainers.forEach((container, index) => {
      const answer = container.querySelector('div');
      const expectedClassName =
        answerMap[Object.keys(answerMap)[index]] === correctAnswer
          ? 'correct-answer'
          : 'incorrect-answer';

      expect(answer).toHaveClass(expectedClassName);
    });
  });

  // makes sure multiline doesn't break it
  it('renders the component with long and multiline question and answer text', () => {
    const answerMap = {
      student1: 'A',
      student2: 'B',
      student3: 'C',
    };
    const correctAnswer = 'B';

    const longQuestion = "This is a long question that spans multiple lines. It should wrap correctly and not overflow the container.";
    const longAnswer = "This is a long answer that spans multiple lines. It should wrap correctly and not overflow the container.";

    const { getByText } = render(
      <StudentAnswersDisplay
        question={longQuestion}
        answerMap={answerMap}
        correctAnswer={correctAnswer}
      />
    );

    const questionElement = getByText(longQuestion);
    const answerElements = Object.keys(answerMap).map((student) =>
      getByText(answerMap[student])
    );

    expect(questionElement).toBeInTheDocument();
    answerElements.forEach((answerElement) => {
      expect(answerElement).toBeInTheDocument();
    });
  });

  // edge case: special characters
  it('renders the component with special characters in question and answer', () => {
    const answerMap = {
      student1: 'A',
      student2: 'B',
      student3: 'C',
    };
    const correctAnswer = 'B';

    const questionWithSpecialChars = 'What is the meaning of ❤️?';
    const answerWithSpecialChars = 'The answer is ✔️';

    const { getByText } = render(
      <StudentAnswersDisplay
        question={questionWithSpecialChars}
        answerMap={answerMap}
        correctAnswer={correctAnswer}
      />
    );

    const questionElement = getByText(questionWithSpecialChars);
    const answerElements = Object.keys(answerMap).map((student) =>
      getByText(answerMap[student])
    );

    expect(questionElement).toBeInTheDocument();
    answerElements.forEach((answerElement) => {
      expect(answerElement).toBeInTheDocument();
    });
  });
});
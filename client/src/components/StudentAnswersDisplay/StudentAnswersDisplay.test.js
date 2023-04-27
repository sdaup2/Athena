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
  it('renders without crashing', () => {
    render(<StudentAnswersDisplay question={question} answerMap={answerMap} correctAnswer = {correctTest}/>);
  });

  it('displays the correct question', () => {
    render(<StudentAnswersDisplay question={question} answerMap={answerMap} correctAnswer = {correctTest}/>);
    expect(screen.getByText(question)).toBeInTheDocument();
  });

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

  it('displays the correct answers for each student', () => {
    render(<StudentAnswersDisplay question={question} answerMap={answerMap} correctAnswer = {correctTest}/>);
    const answerContainers = screen.getAllByTestId('question-answer-container');
  
    answerContainers.forEach((container, index) => {
      const studentName = container.querySelector('strong');
      const answer = container.textContent.replace(studentName.textContent, '');
      expect(studentName.textContent).toEqual(Object.keys(answerMap)[index] + ': ');
    });
  });

  it('returns the correct answer map as expected', () => {
    render(<StudentAnswersDisplay question={question} answerMap={answerMap} correctAnswer = {correctTest}/>);
    //const map = StudentAnswersDisplay.answerResults;
    const expectedMap = {
      'Student A': true,
      'Student B': false,
      'Student C': false
    };
    const answerReults = checkAnswers(answerMap,correctTest)
    expect(answerReults).toEqual(expectedMap)
  });
});
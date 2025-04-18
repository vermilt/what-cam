import { useReducer } from "react";
import questions from "../data/questions";
import './Questionnaire.scss';

// initialState to store scores

const initialState = {
    scores: {
        DSLR: 0,
        Mirrorless: 0,
        Compact: 0,
        Action: 0,
    },
    currentQuestion: 0,
    isCompleted: false
}

function scoreReducer(state, action) {
    switch (action.type) {
        case "ANSWER":
            const nextQuestion = state.currentQuestion + 1;
            return {
                ...state,
                scores: {
                    DSLR: state.scores.DSLR + (action.payload.scores.DSLR || 0),
                    Mirrorless: state.scores.Mirrorless + (action.payload.scores.Mirrorless || 0),
                    Compact: state.scores.Compact + (action.payload.scores.Compact || 0),
                    Action: state.scores.Action + (action.payload.scores.Action || 0),
                },
                currentQuestion: nextQuestion, 
                isCompleted: nextQuestion >= action.payload.totalQuestions // checks if all questions are answered
            };

        case "RESET":
            return initialState;

        default:
            return state;
    }
}

function Questionnaire() {
    const [state, dispatch] = useReducer(scoreReducer, initialState);
    const currentQuestionIndex = state.currentQuestion;
    const currentQuestion = questions[currentQuestionIndex];
    // const endOfQuestionnaire = state.isCompleted;

    let bestCamera = null;
    let highestScore = -Infinity;

    for (const [cameraType, score] of Object.entries(state.scores)) {
    if (score > highestScore) {
        highestScore = score;
        bestCamera = cameraType;
    }
    }
    

    return (
        <div className="questionnaire-container">
            <div className="questionnaire">
                {state.isCompleted ? (
                    <div>
                        <h3>Based on you answers, we'd recommend { /^[aeiou]/i.test(bestCamera) ? 'an' : 'a' }...</h3> 
                        <h3><strong>{bestCamera} Camera</strong></h3>
                        <div className="reset-button-container">
                        <button className="reset-button"
                            onClick={() => {
                                dispatch({type: 'RESET'})
                            }}
                        >
                            Reset Quiz
                        </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <h2>Question {currentQuestionIndex + 1}</h2>
                        <h3>{currentQuestion.question}</h3>
                        <div className="options">
                            {currentQuestion.options.map((option, index) => (
                                <button 
                                    key={index}
                                    onClick={(e) => {
                                        e.currentTarget.blur();

                                        dispatch({
                                            type: 'ANSWER',
                                            payload: {
                                                scores: option.scores,
                                                totalQuestions: questions.length
                                            }
                                        });
                                    }}
                                >
                                    {option.text}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Questionnaire;
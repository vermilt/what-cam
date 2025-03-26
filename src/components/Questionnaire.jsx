import { useReducer } from "react";
import questions from "../data/questions";

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
                isCompleted: nextQuestion >= action.payload.totalQuestions // Check if all questions are answered
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
        <>
            {state.isCompleted ? (
                <>
                    <h3>Based on you answers, we'd recommend { /^[aeiou]/i.test(bestCamera) ? 'an' : 'a' } {bestCamera} camera</h3>
                    <button
                        onClick={() => {
                            dispatch({type: 'RESET'})
                        }}
                    >
                        Reset Quiz
                    </button>
                </>
            ) : (
                <>
                    <h3>Question {currentQuestionIndex + 1}</h3>
                    <h3>{currentQuestion.question}</h3>
                    <div>
                        {currentQuestion.options.map((option, index) => (
                            <button 
                                key={index}
                                onClick={() => {
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
        </>
    )
}

export default Questionnaire;
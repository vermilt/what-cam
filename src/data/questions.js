const questions = [
    {
      id: "experience",
      question: "What is your experience level?",
      options: [
        { text: "Beginner", scores: { DSLR: 3, Mirrorless: 5, Compact: 9, Action: 8 } },
        { text: "Intermediate", scores: { DSLR: 7, Mirrorless: 9, Compact: 6, Action: 5 } },
        { text: "Professional", scores: { DSLR: 10, Mirrorless: 9, Compact: 3, Action: 2 } }
      ]
    },
    {
      id: "usage",
      question: "What will you use the camera for?",
      options: [
        { text: "Travel", scores: { DSLR: 3, Mirrorless: 5, Compact: 9, Action: 8 } },
        { text: "Sports / Adventure", scores: { DSLR: 7, Mirrorless: 9, Compact: 6, Action: 5 } },
        { text: "Portraits", scores: { DSLR: 10, Mirrorless: 9, Compact: 5, Action: 3 } },
        { text: "Vlogging", scores: { DSLR: 7, Mirrorless: 10, Compact: 6, Action: 9 } }
      ]
    },
    {
      id: "compact",
      question: "Do you prefer a compact camera?",
      options: [
        { text: "Yes", scores: { DSLR: 3, Mirrorless: 8, Compact: 10, Action: 9 } },
        { text: "No", scores: { DSLR: 10, Mirrorless: 9, Compact: 3, Action: 5 } }
      ]
    },
    {
        id: "vesitality",
        question: "Do you like to play around with the settings?",
        options: [
          { text: "Yes", scores: { DSLR: 10, Mirrorless: 10, Compact: 5, Action: 1 } },
          { text: "No", scores: { DSLR: 1, Mirrorless: 2, Compact: 10, Action: 10 } }
        ]
      },
    {
      id: "modular",
      question: "Would you like to be able to change lenses?",
      options: [
        { text: "Yes", scores: { DSLR: 10, Mirrorless: 10, Compact: 2, Action: 1 } },
        { text: "No", scores: { DSLR: 1, Mirrorless: 2, Compact: 10, Action: 10 } }
      ]
    },
    {
      id: "video",
      question: "How important is video quality to you?",
      options: [
        { text: "Very important", scores: { DSLR: 8, Mirrorless: 10, Compact: 6, Action: 9 } },
        { text: "Somewhat important", scores: { DSLR: 7, Mirrorless: 8, Compact: 7, Action: 8 } },
        { text: "Not important", scores: { DSLR: 4, Mirrorless: 4, Compact: 9, Action: 5 } }
      ]
    },
    {
      id: "lowlight",
      question: "Do you plan to shoot in low light often?",
      options: [
        { text: "Yes", scores: { DSLR: 10, Mirrorless: 9, Compact: 5, Action: 4 } },
        { text: "No", scores: { DSLR: 5, Mirrorless: 6, Compact: 8, Action: 8 } }
      ]
    },
    {
      id: "autofocus",
      question: "Will you need fast autofocus (e.g, for moving subjects)?",
      options: [
        { text: "Yes", scores: { DSLR: 9, Mirrorless: 10, Compact: 6, Action: 8 } },
        { text: "No", scores: { DSLR: 5, Mirrorless: 6, Compact: 9, Action: 6 } }
      ]
    },
    {
      id: "traveling",
      question: "Will you be traveling or hiking with this camera?",
      options: [
        { text: "Yes", scores: { DSLR: 3, Mirrorless: 8, Compact: 10, Action: 9 } },
        { text: "No", scores: { DSLR: 10, Mirrorless: 9, Compact: 5, Action: 4 } }
      ]
    }
  ];
  

export default questions;
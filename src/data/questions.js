const questions = [
    {
        id: "budget",
        question: "What is your budget?",
        options: [
        { text: "High", scores: { DSLR: 8, Mirrorless: 10, PointShoot: 4, ActionCam: 3 } },
        { text: "Medium", scores: { DSLR: 7, Mirrorless: 9, PointShoot: 6, ActionCam: 5 } },
        { text: "Low", scores: { DSLR: 3, Mirrorless: 4, PointShoot: 9, ActionCam: 10 } }
        ]
    },
    {
        id: "experience",
        question: "What is your experience level?",
        options: [
          { text: "Beginner", scores: { DSLR: 3, Mirrorless: 5, PointShoot: 9, ActionCam: 8 } },
          { text: "Intermediate", scores: { DSLR: 7, Mirrorless: 9, PointShoot: 6, ActionCam: 5 } },
          { text: "Professional", scores: { DSLR: 10, Mirrorless: 9, PointShoot: 3, ActionCam: 2 } }
        ]
    },
    {
        id: "usage",
        question: "What will you use the camera for?",
        options: [
          { text: "Travel", scores: { DSLR: 3, Mirrorless: 5, PointShoot: 9, ActionCam: 8 } },
          { text: "Sports / Adventure", scores: { DSLR: 7, Mirrorless: 9, PointShoot: 6, ActionCam: 5 } },
          { text: "Portraits", scores: { DSLR: 10, Mirrorless: 9, PointShoot: 5, ActionCam: 3 } },
          { text: "Vlogging", scores: { DSLR: 7, Mirrorless: 10, PointShoot: 6, ActionCam: 9 } }
        ]
    },
    {
        id: "compact",
        question: "Do you prefer a compact camera?",
        options: [
          { text: "Yes", scores: { DSLR: 3, Mirrorless: 8, PointShoot: 10, ActionCam: 9 } },
          { text: "No", scores: { DSLR: 10, Mirrorless: 9, PointShoot: 3, ActionCam: 5 } }
        ]
      },
    {
        id: "modular",
        question: "Would you like to be able to change lenses?",
        options: [
          { text: "Yes", scores: { DSLR: 10, Mirrorless: 10, PointShoot: 2, ActionCam: 1 } },
          { text: "No", scores: { DSLR: 1, Mirrorless: 2, PointShoot: 10, ActionCam: 10 } }
        ]
    }
]

export default questions;
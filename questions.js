// questions.js
const questionBank = [
    {
        std: "A-REI.3",
        difficulty: "Medium",
        type: "msq",
        text: "Solve for $$x$$: $$3x - 5 = 10$$",
        options: ["$$x = 5$$", "$$x = 15$$", "$$x = 3$$", "$$x = -5$$"],
        correctIndices: [0],
        hint: "Add 5 to both sides first, then divide by 3.",
        desmosHint: "Graph $$y = 3x - 5$$ and $$y = 10$$. Look for the x-coordinate where the lines intersect.",
        explanation: "Adding 5 gives $$3x = 15$$. Dividing by 3 gives $$x = 5$$."
    },
    {
        std: "F-IF.2",
        difficulty: "Easy",
        type: "text",
        text: "Evaluate $$f(3)$$ when $$f(x) = 2x + 1$$.",
        correctText: "7",
        hint: "Plug the number 3 in wherever you see an $$x$$.",
        desmosHint: "Type $$f(x) = 2x + 1$$ into line 1. Type $$f(3)$$ into line 2 to get the answer.",
        explanation: "$$f(3) = 2(3) + 1$$. $$2(3)$$ is $$6$$, and $$6 + 1 = 7$$."
    },
    {
        std: "A-APR.1",
        difficulty: "Hard",
        type: "sata",
        text: "Which of the following expressions are equivalent to $$x^2 - 9$$?",
        options: ["$$(x - 3)(x + 3)$$", "$$(x - 3)^2$$", "$$x^2 + 0x - 9$$", "$$x(x) - 9$$"],
        correctIndices: [0, 2, 3],
        hint: "Think about the difference of squares, and standard quadratic form.",
        desmosHint: "Graph the original expression in line 1. Graph the answer choices in the following lines. Which ones perfectly overlap the original?",
        explanation: "$$(x-3)(x+3)$$ is the factored form. $$x^2 + 0x - 9$$ is standard form. $$x(x) - 9$$ simplifies to $$x^2 - 9$$."
    }
];

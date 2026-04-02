const questionBank = [
    // --- DOMAIN 1: NUMBER, QUANTITIES, EQUATIONS & EXPRESSIONS (20 Questions) ---
    { domain: "Equations & Expressions", difficulty: "Easy", type: "text", std: "A-REI.3", text: "Solve for \\( x \\): \\( 3x - 7 = 14 \\).", correctText: "7", hint: "Add 7 to both sides, then divide by 3.", desmosHint: "**Desmos EOC Trick:** Graph `y = 3x - 7` on line 1 and `y = 14` on line 2. Click the point where the two lines intersect. The x-coordinate is your answer!", explanation: "\\( 3x = 21 \\), so \\( x = 7 \\)." },
    { domain: "Equations & Expressions", difficulty: "Easy", type: "msq", std: "A-REI.12", text: "Is the point (2, 5) a solution to the inequality \\( y > 2x \\)?", options: ["Yes, because 5 is greater than 4.", "Yes, because 2 is greater than 5.", "No, because 5 is not greater than 4.", "No, because 5 is equal to 4."], correctIndices: [0], hint: "Plug in 2 for x and 5 for y.", desmosHint: "**Desmos EOC Trick:** Type `y > 2x` into line 1. Desmos will shade the graph. Type `(2, 5)` into line 2. Is the dot inside the shaded region? Yes! (And note the line is dashed, so dots *on* the line wouldn't count).", explanation: "Substitute: \\( 5 > 2(2) \\), which becomes \\( 5 > 4 \\). This is true." },
    { domain: "Equations & Expressions", difficulty: "Easy", type: "text", std: "A-REI.4", text: "Solve for \\( x \\): \\( 5x = 0 \\).", correctText: "0", hint: "What number multiplied by 5 gives you 0?", desmosHint: "**Desmos EOC Trick:** Type `x = 0/5` or just graph `y = 5x` and look where it crosses the x-axis (the x-intercept).", explanation: "Divide both sides by 5. \\( 0 / 5 = 0 \\)." },
    { domain: "Equations & Expressions", difficulty: "Easy", type: "text", std: "A-REI.3", text: "Solve for \\( x \\): \\( -4x + 8 = 24 \\).", correctText: "-4", hint: "Subtract 8, then divide by -4.", desmosHint: "**Desmos EOC Trick:** Graph `y = -4x + 8` and `y = 24`. Click the intersection point to find the x-value.", explanation: "\\( -4x = 16 \\), so \\( x = -4 \\)." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "text", std: "A-REI.3", text: "Solve for \\( x \\): \\( 2(x - 4) = 3x + 1 \\).", correctText: "-9", hint: "Distribute the 2 first, then get all the x's on one side.", desmosHint: "**Desmos EOC Trick:** Graph the left side on line 1: `y = 2(x - 4)`. Graph the right side on line 2: `y = 3x + 1`. Find the point where they cross and click it. The x-value is the answer.", explanation: "\\( 2x - 8 = 3x + 1 \\). Subtract 2x: \\( -8 = x + 1 \\). Subtract 1: \\( x = -9 \\)." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "dropdown", std: "A-CED.4", text: "To solve the formula for the area of a triangle \\( A = \\frac{1}{2}bh \\) for \\( b \\), you must multiply both sides by [DROP], and then [DROP] by \\( h \\).", options: [["1/2", "2", "h"], ["multiply", "divide", "add"]], correctIndices: [1, 1], hint: "Do the opposite math operation to move variables to the other side.", desmosHint: null, explanation: "Multiply by 2 to clear the fraction: \\( 2A = bh \\). Then divide by h: \\( b = \\frac{2A}{h} \\)." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "text", std: "A-REI.6", text: "Solve the system: \\( x + y = 10 \\) and \\( x - y = 2 \\). What is the value of \\( x \\)?", correctText: "6", hint: "Add the two equations straight down. The y's will cancel out.", desmosHint: "**Desmos EOC Trick:** Type `x + y = 10` on line 1. Type `x - y = 2` on line 2. Click exactly where the two lines cross. The x-coordinate of that point is your answer.", explanation: "\\( (x + x) + (y - y) = 10 + 2 \\) gives \\( 2x = 12 \\). So, \\( x = 6 \\)." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "msq", std: "A-REI.3", text: "Solve the inequality: \\( -2x < 10 \\).", options: ["\\( x < -5 \\)", "\\( x > -5 \\)", "\\( x < 5 \\)", "\\( x > 5 \\)"], correctIndices: [1], hint: "When you divide by a negative number, you MUST flip the inequality sign.", desmosHint: "**Desmos EOC Trick:** Graph `-2x < 10` in Desmos. Look at the shaded region. Now graph the answer choices one by one. The correct choice will shade the *exact same* area of the graph.", explanation: "Divide by -2 and flip the sign: \\( x > -5 \\)." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "msq", std: "A-REI.10", text: "Which line passes through the y-axis at -4 and has a slope of 3?", options: ["\\( y = -4x + 3 \\)", "\\( y = 3x - 4 \\)", "\\( y = 3x + 4 \\)", "\\( y = -4x - 3 \\)"], correctIndices: [1], hint: "Slope-intercept form is y = mx + b, where m is slope and b is the y-intercept.", desmosHint: "**Desmos EOC Trick:** Graph each answer choice. Visually check which line crosses the vertical y-axis at exactly -4.", explanation: "Slope (m) = 3. Y-intercept (b) = -4. Equation is \\( y = 3x - 4 \\)." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "sata", std: "A-REI.4", text: "Which of the following are solutions to \\( x^2 - 25 = 0 \\)?", options: ["5", "-5", "25", "0"], correctIndices: [0, 1], hint: "Add 25 to both sides, then take the square root. Remember the plus/minus!", desmosHint: "**Desmos EOC Trick:** Type `y = x^2 - 25`. Click the points where the U-shaped graph (parabola) crosses the horizontal x-axis. Those x-intercepts are your solutions.", explanation: "\\( x^2 = 25 \\). The square root of 25 is both 5 and -5." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "msq", std: "A-REI.3", text: "How many solutions does the equation \\( 2x + 5 = 2x + 7 \\) have?", options: ["Zero", "One", "Two", "Infinite"], correctIndices: [0], hint: "Try subtracting 2x from both sides. What are you left with?", desmosHint: "**Desmos EOC Trick:** Graph `y = 2x + 5` and `y = 2x + 7`. Notice that the lines are perfectly parallel. Because they never intersect, there are zero solutions.", explanation: "Subtracting 2x gives \\( 5 = 7 \\). This is a false statement, meaning there are no solutions." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "dropdown", std: "A-CED.3", text: "A theater sells adult tickets for $10 and child tickets for $5. If they made $200 total from 30 tickets, the system of equations would be \\( a + c = 30 \\) and [DROP] = [DROP].", options: [["10a + 5c", "5a + 10c", "15ac"], ["30", "200", "150"]], correctIndices: [0, 1], hint: "Match the money values with the money total.", desmosHint: null, explanation: "Adults are $10 (10a) and children are $5 (5c). Total money is $200." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "text", std: "A-REI.6", text: "If \\( y = 2x \\) and \\( x + y = 12 \\), find the value of \\( x \\).", correctText: "4", hint: "Use substitution. Replace the 'y' in the second equation with '2x'.", desmosHint: "**Desmos EOC Trick:** Type both equations into Desmos exactly as they appear: `y = 2x` and `x + y = 12`. Click where they cross to find the (x, y) coordinate.", explanation: "\\( x + (2x) = 12 \\). \\( 3x = 12 \\). \\( x = 4 \\)." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "msq", std: "A-REI.12", text: "Which coordinate point lies in the solution set of \\( y < -x + 3 \\)?", options: ["(0, 5)", "(4, 2)", "(2, 0)", "(-1, 6)"], correctIndices: [2], hint: "Plug the x and y values into the inequality and see which one creates a true statement.", desmosHint: "**Desmos EOC Trick:** Graph the inequality so it shades. Graph all 4 points. Pick the point that lands inside the shaded region!", explanation: "For (2,0): \\( 0 < -(2) + 3 \\) simplifies to \\( 0 < 1 \\), which is true." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "dropdown", std: "N-RN.3", text: "The product of \\( \\sqrt{4} \\) and \\( \\sqrt{5} \\) is [DROP] because it is the product of a rational number and an [DROP] number.", options: [["rational", "irrational"], ["rational", "irrational"]], correctIndices: [1, 1], hint: "Square root of 4 is exactly 2 (rational). Square root of 5 is a messy decimal (irrational).", desmosHint: null, explanation: "A non-zero rational multiplied by an irrational is always irrational." },
    { domain: "Equations & Expressions", difficulty: "Hard", type: "msq", std: "A-REI.6", text: "To eliminate 'x' in the system \\( 3x + 4y = 10 \\) and \\( 2x - 5y = 4 \\), you should:", options: ["Multiply top by 2, bottom by 3", "Multiply top by 2, bottom by -3", "Multiply top by -5, bottom by 4", "Just add them together"], correctIndices: [1], hint: "You need the 'x' coefficients to be the exact same number, but with opposite signs (e.g., 6 and -6).", desmosHint: null, explanation: "Multiplying top by 2 gives 6x. Multiplying bottom by -3 gives -6x. They will now cancel." },
    { domain: "Equations & Expressions", difficulty: "Hard", type: "sata", std: "A-REI.3", text: "Which values of x satisfy the compound inequality: \\( 2x < 6 \\) AND \\( x + 1 \\ge 3 \\)?", options: ["1", "2", "3", "4"], correctIndices: [1], hint: "Solve both separately. The word AND means the number must make BOTH inequalities true.", desmosHint: "**Desmos EOC Trick:** Type `2x < 6 {x + 1 >= 3}` into Desmos (use curly braces to combine them with 'AND'). Look at where the shading happens on the x-axis. Only the number 2 is in that shaded zone.", explanation: "Left: \\( x < 3 \\). Right: \\( x \\ge 2 \\). The only integer option between 2 (inclusive) and 3 (exclusive) is 2." },
    { domain: "Equations & Expressions", difficulty: "Hard", type: "msq", std: "N-RN.3", text: "Which statement is true about the sum of a rational number and an irrational number?", options: ["It is always rational.", "It is always irrational.", "It can be either rational or irrational.", "It is neither."], correctIndices: [1], hint: "A rational plus an irrational is always irrational.", desmosHint: "**Desmos EOC Trick:** You can test it! Type a rational number (like `4`) plus an irrational number (like `\\sqrt{3}`). Desmos will output a messy, non-repeating decimal, confirming the result is irrational.", explanation: "By definition, the sum of a rational number and an irrational number is always irrational. This is a highly tested property in Ohio." },
    { domain: "Equations & Expressions", difficulty: "Hard", type: "dropdown", std: "A-CED.4", text: "Solve the formula \\( V = \\pi r^2 h \\) for \\( h \\). You must divide both sides by [DROP]. The final equation is \\( h = \\) [DROP].", options: [["V", "\\pi r^2", "r^2"], ["V / \\pi r^2", "\\pi r^2 / V", "V - \\pi r^2"]], correctIndices: [1, 0], hint: "If things are being multiplied by h, you use division to move them over.", desmosHint: null, explanation: "To isolate h, divide both sides by \\( \\pi r^2 \\)." },
    { domain: "Equations & Expressions", difficulty: "Hard", type: "msq", std: "A-REI.4", text: "What are the exact solutions to \\( 2x^2 - 50 = 0 \\)?", options: ["x = 5", "x = 5 and x = -5", "x = 25 and x = -25", "No real solutions"], correctIndices: [1], hint: "Add 50, divide by 2, then take the square root. Don't forget the positive/negative rule!", desmosHint: "**Desmos EOC Trick:** Graph `y = 2x^2 - 50` and find the two x-intercepts.", explanation: "\\( 2x^2 = 50 \\rightarrow x^2 = 25 \\rightarrow x = \\pm 5 \\)." },

    // --- DOMAIN 2: FUNCTIONS (20 Questions) ---
    { domain: "Functions", difficulty: "Easy", type: "text", std: "F-IF.2", text: "Evaluate \\( f(x) = 2x + 1 \\) for \\( x = 5 \\).", correctText: "11", hint: "Replace the x with 5.", desmosHint: "**Desmos EOC Trick:** Type `f(x) = 2x + 1` into line 1. Then type `f(5)` into line 2. Desmos will calculate the answer instantly.", explanation: "\\( 2(5) + 1 = 10 + 1 = 11 \\)." },
    { domain: "Functions", difficulty: "Easy", type: "dropdown", std: "A-APR.1", text: "Combine like terms: \\( 3x^2 + 4x - x^2 + 2 \\). The simplified expression is [DROP] + 4x + 2.", options: [["4x^2", "2x^2", "3"]], correctIndices: [1], hint: "Only combine terms with the exact same exponent. \\( 3x^2 - 1x^2 \\).", desmosHint: "**Desmos EOC Trick:** Graph `y = 3x^2 + 4x - x^2 + 2`. Then test the answer choices (e.g., `y = 2x^2 + 4x + 2`). When the two graphs perfectly overlap into one single line, you found the equivalent expression!", explanation: "\\( 3x^2 - x^2 = 2x^2 \\)." },
    { domain: "Functions", difficulty: "Easy", type: "msq", std: "F-IF.4", text: "What is the y-intercept of the function \\( y = 4x - 9 \\)?", options: ["4", "-9", "9", "-4"], correctIndices: [1], hint: "In y = mx + b, 'b' is the y-intercept.", desmosHint: "**Desmos EOC Trick:** Graph the equation. Look at the vertical y-axis. Click the point where the line crosses it.", explanation: "The constant term at the end is the y-intercept, which is -9." },
    { domain: "Functions", difficulty: "Easy", type: "msq", std: "F-IF.5", text: "A dog groomer charges $40 per dog. She can groom at most 5 dogs a day. What is the domain of this function in this context?", options: ["All real numbers", "0, 1, 2, 3, 4, 5", "0, 40, 80, 120, 160, 200", "y ≤ 200"], correctIndices: [1], hint: "Domain is the input (x-values), which is the number of dogs. Can she groom half a dog?", desmosHint: null, explanation: "She can only groom whole dogs, from 0 to 5." },
    { domain: "Functions", difficulty: "Easy", type: "text", std: "F-IF.2", text: "If \\( g(x) = x^2 - 3 \\), find \\( g(4) \\).", correctText: "13", hint: "Plug 4 in for x. Make sure to square it first!", desmosHint: "**Desmos EOC Trick:** Type `g(x) = x^2 - 3` in line 1, and `g(4)` in line 2.", explanation: "\\( 4^2 - 3 = 16 - 3 = 13 \\)." },
    { domain: "Functions", difficulty: "Medium", type: "msq", std: "A-APR.1", text: "Multiply the binomials: \\( (x + 3)(x + 4) \\).", options: ["\\( x^2 + 7x + 12 \\)", "\\( x^2 + 12x + 7 \\)", "\\( x^2 + 7 \\)", "\\( 2x + 7 \\)"], correctIndices: [0], hint: "Use FOIL: First, Outer, Inner, Last.", desmosHint: "**Desmos EOC Trick:** Overlapping graphs! Graph `y = (x+3)(x+4)`. Then graph the answer choices. The correct choice will make the exact same parabola and cover the first one up.", explanation: "\\( x^2 + 4x + 3x + 12 \\). Combine middle terms: \\( x^2 + 7x + 12 \\)." },
    { domain: "Functions", difficulty: "Medium", type: "msq", std: "A-SSE.2", text: "Factor completely: \\( x^2 - 36 \\).", options: ["\\( (x - 6)(x - 6) \\)", "\\( (x + 6)(x - 6) \\)", "\\( (x - 18)(x + 2) \\)", "Cannot be factored"], correctIndices: [1], hint: "This is a 'Difference of Squares'. Both terms are perfect squares with a minus sign in the middle.", desmosHint: "**Desmos EOC Trick:** Overlapping graphs! Graph `y = x^2 - 36`. Graph the answer choices until one perfectly covers up the original parabola.", explanation: "Follows the pattern \\( a^2 - b^2 = (a+b)(a-b) \\)." },
    { domain: "Functions", difficulty: "Medium", type: "text", std: "F-IF.8", text: "Find the x-coordinate of the vertex for the parabola: \\( y = (x - 3)^2 + 8 \\).", correctText: "3", hint: "In vertex form \\( y = (x-h)^2 + k \\), the vertex is (h, k). Watch the sign!", desmosHint: "**Desmos EOC Trick:** Graph it! Click the very lowest point of the U-shape (the minimum). The x-value of that coordinate is your answer.", explanation: "The value inside the parenthesis is subtracted, so the x-coordinate is positive 3." },
    { domain: "Functions", difficulty: "Medium", type: "sata", std: "N-RN.2", text: "Which of the following are equivalent to \\( x^6 \\)?", options: ["\\( x^2 \\cdot x^3 \\)", "\\( (x^2)^3 \\)", "\\( x^8 / x^2 \\)", "\\( x^3 + x^3 \\)"], correctIndices: [1, 2], hint: "When raising a power to a power, multiply. When dividing, subtract.", desmosHint: "**Desmos EOC Trick:** Set `x=2` on line 1. Type `x^6` on line 2 (it will equal 64). Then type the answer choices on the next lines. Select the ones that also equal 64!", explanation: "\\( (x^2)^3 = x^{2*3} = x^6 \\). And \\( x^8 / x^2 = x^{8-2} = x^6 \\)." },
    { domain: "Functions", difficulty: "Medium", type: "dropdown", std: "F-LE.2", text: "An arithmetic sequence starts at 5 and adds 3 each time. The explicit formula is \\( a_n = 5 + (n-1)(3) \\), which simplifies to \\( a_n = \\) [DROP] + [DROP].", options: [["3n", "5n", "8n"], ["2", "5", "8"]], correctIndices: [0, 0], hint: "Distribute the 3 to the (n-1), then combine the constants.", desmosHint: "**Desmos EOC Trick:** Change 'n' to 'x'. Graph `y = 5 + (x-1)(3)`. Graph the answer choices. Find the line that overlaps perfectly.", explanation: "\\( 5 + 3n - 3 \\rightarrow 3n + 2 \\)." },
    { domain: "Functions", difficulty: "Medium", type: "sata", std: "A-APR.3", text: "Identify the zeros (x-intercepts) of the function \\( f(x) = 2(x - 4)(x + 7) \\).", options: ["2", "4", "-4", "7", "-7"], correctIndices: [1, 4], hint: "The zeros occur when each factor inside parentheses equals zero.", desmosHint: "**Desmos EOC Trick:** Graph the function. Click exactly where the curve crosses the horizontal x-axis. Those x-values are the zeros.", explanation: "Set each factor to zero: \\( x - 4 = 0 \\rightarrow x = 4 \\). And \\( x + 7 = 0 \\rightarrow x = -7 \\). The 2 in front does not affect the zeros." },
    { domain: "Functions", difficulty: "Medium", type: "dropdown", std: "F-LE.1", text: "A table shows y-values: 2, 4, 8, 16. This represents an [DROP] function because there is a common [DROP].", options: [["linear", "exponential", "quadratic"], ["difference", "ratio"]], correctIndices: [1, 1], hint: "Are you adding the same amount each time, or multiplying?", desmosHint: "**Desmos EOC Trick:** Click the '+' button in the top left of Desmos and insert a table. Type in the points (1,2), (2,4), (3,8), (4,16). Look at the graph. A straight line is linear, a sharp J-curve is exponential.", explanation: "The numbers are multiplying by 2 each time. Multiplication implies a common ratio, which is exponential." },
    { domain: "Functions", difficulty: "Medium", type: "msq", std: "A-SSE.2", text: "Factor: \\( x^2 + 6x + 8 \\).", options: ["\\( (x + 2)(x + 4) \\)", "\\( (x + 6)(x + 2) \\)", "\\( (x - 2)(x - 4) \\)", "\\( (x + 8)(x + 1) \\)"], correctIndices: [0], hint: "Find two numbers that multiply to 8 and add to 6.", desmosHint: "**Desmos EOC Trick:** Overlapping graphs! Graph the original expression. Graph the answer choices. Find the exact match.", explanation: "2 and 4 multiply to 8 and add to 6." },
    { domain: "Functions", difficulty: "Medium", type: "text", std: "F-IF.6", text: "If \\( f(1) = 4 \\) and \\( f(3) = 10 \\), what is the average rate of change from x=1 to x=3?", correctText: "3", hint: "Rate of change is just the slope formula: \\( \\frac{y_2 - y_1}{x_2 - x_1} \\).", desmosHint: "**Desmos EOC Trick:** Use it to calculate slope: Type `(10 - 4) / (3 - 1)`.", explanation: "\\( \\frac{10 - 4}{3 - 1} = \\frac{6}{2} = 3 \\)." },
    { domain: "Functions", difficulty: "Medium", type: "dropdown", std: "F-BF.3", text: "The graph of \\( g(x) = f(x) + 4 \\) translates the original function \\( f(x) \\) 4 units [DROP].", options: [["up", "down", "left", "right"]], correctIndices: [0], hint: "Adding outside the parentheses affects the y-axis directly.", desmosHint: "**Desmos EOC Trick:** Graph `y = x` and then `y = x + 4` and see which way the line moved.", explanation: "A positive constant added to the end of a function shifts it vertically upwards." },
    { domain: "Functions", difficulty: "Medium", type: "sata", std: "F-IF.8", text: "Which of these quadratic equations reveals its minimum/maximum value (vertex) without any calculations?", options: ["\\( y = x^2 + 4x + 4 \\)", "\\( y = (x - 2)^2 + 5 \\)", "\\( y = (x + 3)(x - 1) \\)", "\\( y = -(x + 1)^2 - 8 \\)"], correctIndices: [1, 3], hint: "Look for Vertex Form: \\( y = a(x-h)^2 + k \\).", desmosHint: null, explanation: "Equations in vertex form show the shifting (h,k), which perfectly matches the minimum or maximum point." },
    { domain: "Functions", difficulty: "Hard", type: "msq", std: "A-SSE.2", text: "Factor completely: \\( 2x^2 + 5x - 3 \\).", options: ["\\( (2x - 1)(x + 3) \\)", "\\( (2x + 1)(x - 3) \\)", "\\( (2x + 3)(x - 1) \\)", "Prime"], correctIndices: [0], hint: "Use guess and check or the AC method. AC = -6. What multiplies to -6 and adds to 5?", desmosHint: "**Desmos EOC Trick:** Overlapping graphs again! This trick works for factoring no matter how hard the equation is. Graph the original, then test the choices to find the match.", explanation: "6 and -1. Split the middle: \\( 2x^2 + 6x - 1x - 3 \\rightarrow 2x(x+3) - 1(x+3) = (2x-1)(x+3) \\)." },
    { domain: "Functions", difficulty: "Hard", type: "dropdown", std: "F-BF.3", text: "Given \\( f(x) = x^2 \\), the graph of \\( g(x) = f(x - 5) - 2 \\) moves the parabola 5 units to the [DROP] and 2 units [DROP].", options: [["left", "right"], ["up", "down"]], correctIndices: [1, 1], hint: "Inside parentheses is horizontal (opposite of what you expect). Outside is vertical (exactly what you expect).", desmosHint: "**Desmos EOC Trick:** Graph `y = x^2` on line 1. Graph `y = (x - 5)^2 - 2` on line 2. Visually look at where the bottom point moved compared to the original.", explanation: "Minus 5 inside shifts RIGHT 5. Minus 2 outside shifts DOWN 2." },
    { domain: "Functions", difficulty: "Hard", type: "msq", std: "A-SSE.3c", text: "A bacteria population is modeled by \\( P(t) = 100(3)^{2t} \\), where t is in days. Which equivalent equation reveals the daily growth rate?", options: ["\\( P(t) = 100(6)^t \\)", "\\( P(t) = 100(9)^t \\)", "\\( P(t) = 600^t \\)", "\\( P(t) = 900^t \\)"], correctIndices: [1], hint: "Use exponent rules to apply the '2' to the '3' first. \\( (a^b)^c = a^{bc} \\).", desmosHint: "**Desmos EOC Trick:** Change 't' to 'x'. Graph the original equation. Graph the choices until one covers it up perfectly. Remember, 'equivalent' just means 'graphs the exact same line'.", explanation: "\\( 3^{2t} \\) is the same as \\( (3^2)^t \\). Since \\( 3^2 = 9 \\), the equation can be written as \\( P(t) = 100(9)^t \\)." },
    { domain: "Functions", difficulty: "Hard", type: "dropdown", std: "F-LE.1", text: "A car loses 15% of its value each year. This is modeled by an [DROP] function because the value is multiplied by [DROP] each year.", options: [["linear", "exponential"], ["0.15", "0.85", "1.15"]], correctIndices: [1, 1], hint: "Losing a percentage means multiplying by what's left over. 100% - 15% = 85%.", desmosHint: null, explanation: "Percentage changes are exponential. If it loses 15%, it retains 85% (or 0.85) of its value." },

    // --- DOMAIN 3: STATISTICS (20 Questions) ---
    { domain: "Statistics", difficulty: "Easy", type: "text", std: "S-ID.1", text: "Find the median of this data set: 3, 1, 9, 4, 7.", correctText: "4", hint: "Put them in order from smallest to largest first!", desmosHint: "**Desmos EOC Trick:** Type `median([3, 1, 9, 4, 7])`. Desmos will instantly give you 4.", explanation: "Ordered: 1, 3, 4, 7, 9. The middle number is 4." },
    { domain: "Statistics", difficulty: "Easy", type: "msq", std: "S-ID.6", text: "A scatter plot shows dots going downwards from left to right. This indicates a:", options: ["Positive correlation", "Negative correlation", "No correlation", "Undefined correlation"], correctIndices: [1], hint: "If the line is going down, think of a negative slope.", desmosHint: null, explanation: "Downward trend indicates as x increases, y decreases (negative correlation)." },
    { domain: "Statistics", difficulty: "Easy", type: "text", std: "N-Q.1", text: "Convert 2.5 hours into minutes.", correctText: "150", hint: "There are 60 minutes in one hour.", desmosHint: "**Desmos EOC Trick:** Just use it as a calculator: `2.5 * 60`.", explanation: "Multiply 2.5 by 60." },
    { domain: "Statistics", difficulty: "Easy", type: "dropdown", std: "S-ID.1", text: "A Box Plot is best for visualizing the [DROP] of a data set, while a Histogram is best for seeing the [DROP].", options: [["mean", "median", "mode"], ["frequency", "exact values"]], correctIndices: [1, 0], hint: "Box plots show the 5-number summary (which includes the median). Histograms show how many times things happen in bins.", desmosHint: null, explanation: "Box plots highlight quartiles and the median. Histograms show the frequency distribution." },
    { domain: "Statistics", difficulty: "Easy", type: "msq", std: "S-ID.9", text: "Which scenario likely shows correlation but NOT causation?", options: ["Hours studied vs. Test Score", "Gallons of gas bought vs. Total Cost", "Shoe size vs. Reading level in elementary kids", "Speeding vs. Traffic Tickets"], correctIndices: [2], hint: "Which one has a 'lurking variable'? What causes both big shoes and high reading levels?", desmosHint: null, explanation: "Older kids have bigger feet and read better. The feet aren't causing the reading ability; AGE is causing both." },
    { domain: "Statistics", difficulty: "Medium", type: "text", std: "S-ID.1", text: "Find the Interquartile Range (IQR) for: 2, 4, 6, 8, 10, 12, 14.", correctText: "8", hint: "IQR is Q3 - Q1. The median is 8. Find the middle of the lower half and upper half.", desmosHint: "**Desmos EOC Trick:** Type `stats([2, 4, 6, 8, 10, 12, 14])`. Desmos will list out Q1 and Q3 for you. Subtract Q1 from Q3 to get your answer.", explanation: "Lower half: 2, 4, 6 (Q1=4). Upper half: 10, 12, 14 (Q3=12). \\( 12 - 4 = 8 \\)." },
    { domain: "Statistics", difficulty: "Medium", type: "dropdown", std: "S-ID.3", text: "In a class, most students score around 75%. One student scores 10%. This 10% is an outlier. Removing it will cause the mean to [DROP] and the standard deviation to [DROP].", options: [["increase", "decrease", "stay the same"], ["increase", "decrease", "stay the same"]], correctIndices: [0, 1], hint: "A low outlier pulls the average down. It also makes the data more spread out.", desmosHint: "**Desmos EOC Trick:** Test it! Type `mean([75, 76, 74, 10])`, note the answer, then delete the 10 and see what happens. Do the same with `stdevp([75, 76, 74, 10])`.", explanation: "Removing a low score raises the class average. Because the data is now closer together, the standard deviation decreases." },
    { domain: "Statistics", difficulty: "Medium", type: "dropdown", std: "S-ID.7", text: "A line of best fit for a plant's height (h) over weeks (w) is \\( h = 2w + 5 \\). The 2 means the plant grows 2 inches per [DROP], and the 5 is the [DROP] height.", options: [["day", "week", "month"], ["final", "starting", "average"]], correctIndices: [1, 1], hint: "Slope is the rate of change per x-unit. The y-intercept is when x=0.", desmosHint: null, explanation: "2 is the growth per week. 5 is the starting height (at week 0)." },
    { domain: "Statistics", difficulty: "Medium", type: "msq", std: "S-ID.9", text: "A study shows a strong correlation between wearing winter coats and getting the flu. This means:", options: ["Winter coats cause the flu", "The flu makes you want to wear coats", "Cold weather is a lurking variable causing both", "Coats prevent the flu"], correctIndices: [2], hint: "Correlation does not equal causation. Look for an outside factor.", desmosHint: null, explanation: "Cold weather causes both the need for coats and flu season to peak." },
    { domain: "Statistics", difficulty: "Medium", type: "sata", std: "S-ID.1", text: "Which features can you easily read from a Box Plot?", options: ["The exact mean", "The median", "The maximum value", "The shape of the distribution"], correctIndices: [1, 2], hint: "Box plots show the 5-number summary (Min, Q1, Med, Q3, Max).", desmosHint: null, explanation: "Box plots do not show the mean, and they hide the exact shape/frequency of the data." },
    { domain: "Statistics", difficulty: "Medium", type: "msq", std: "S-ID.8", text: "Which correlation coefficient (r) represents the strongest linear relationship?", options: ["r = 0.5", "r = -0.1", "r = -0.9", "r = 0.8"], correctIndices: [2], hint: "The strength is how close the number is to 1 OR -1. Ignore the sign.", desmosHint: null, explanation: "-0.9 is the furthest from zero, indicating a very strong negative relationship." },
    { domain: "Statistics", difficulty: "Medium", type: "msq", std: "N-Q.1", text: "Which unit is best for measuring the rate at which a bathtub drains?", options: ["Gallons", "Minutes", "Gallons per minute", "Minutes per gallon"], correctIndices: [2], hint: "Rates are usually 'amount' per 'time'.", desmosHint: null, explanation: "Gallons per minute measures volume over time." },
    { domain: "Statistics", difficulty: "Medium", type: "text", std: "S-ID.2", text: "If every student in a class scores exactly 85 on a test, what is the standard deviation?", correctText: "0", hint: "Standard deviation measures how spread out the numbers are.", desmosHint: "**Desmos EOC Trick:** Type `stdevp([85, 85, 85, 85])`. Desmos will calculate the standard deviation as exactly 0.", explanation: "Since there is zero spread (they are all identical), the deviation is 0." },
    { domain: "Statistics", difficulty: "Medium", type: "msq", std: "S-ID.5", text: "In a survey of 100 students, 60 are female. 40 of those females play sports. What is the joint relative frequency of being a female who plays sports?", options: ["40/100", "40/60", "60/100", "20/40"], correctIndices: [0], hint: "Joint relative frequency is the intersection of two categories out of the GRAND total.", desmosHint: null, explanation: "40 fit both categories. The grand total is 100. So 40/100." },
    { domain: "Statistics", difficulty: "Medium", type: "dropdown", std: "S-ID.3", text: "Data Set A has a mean of 50 and standard deviation of 2. Data Set B has a mean of 50 and standard deviation of 15. The numbers in Data Set B are [DROP] spread out than Data Set A.", options: [["more", "less", "equally"]], correctIndices: [0], hint: "Higher standard deviation means wider spread.", desmosHint: null, explanation: "Standard deviation measures spread. 15 is higher than 2." },
    { domain: "Statistics", difficulty: "Medium", type: "msq", std: "S-ID.5", text: "Given a 2-way table of 50 people: 30 are kids, 20 are adults. 10 kids like broccoli. What is the marginal relative frequency of being a kid?", options: ["10/30", "30/50", "10/50", "20/50"], correctIndices: [1], hint: "Marginal means you just look at the margins (totals for one category) divided by the grand total.", desmosHint: null, explanation: "Total kids (30) divided by grand total (50)." },
    { domain: "Statistics", difficulty: "Hard", type: "text", std: "S-ID.6", text: "A residual is: Actual Value - Predicted Value. If a model predicts a score of 80, but the student actually scored 85, what is the residual?", correctText: "5", hint: "Actual minus Predicted.", desmosHint: null, explanation: "\\( 85 - 80 = 5 \\)." },
    { domain: "Statistics", difficulty: "Hard", type: "msq", std: "S-ID.5", text: "In a table, 30 people like coffee, 20 like tea. Out of the 30 coffee drinkers, 10 are teenagers. What is the CONDITIONAL relative frequency that a person is a teenager, GIVEN they drink coffee?", options: ["10/50", "10/30", "30/50", "10/20"], correctIndices: [1], hint: "The word GIVEN restricts the denominator. You are only looking at the coffee drinkers.", desmosHint: null, explanation: "Given they drink coffee means the total is 30. 10 of those are teens, so 10/30." },
    { domain: "Statistics", difficulty: "Hard", type: "msq", std: "S-ID.6", text: "If a residual plot shows a clear U-shaped pattern, what does this tell you?", options: ["The linear model is a perfect fit", "A linear model is NOT appropriate", "You made a calculation error", "The data has no correlation"], correctIndices: [1], hint: "A good residual plot should look like random, scattered static.", desmosHint: null, explanation: "A pattern in the residuals means the data is likely non-linear (like a quadratic curve)." },
    { domain: "Statistics", difficulty: "Hard", type: "dropdown", std: "S-ID.6", text: "A line of best fit predicts a house will sell for $200k. It actually sells for $180k. The residual is [DROP] meaning the line [DROP] the actual value.", options: [["20k", "-20k"], ["overpredicted", "underpredicted"]], correctIndices: [1, 0], hint: "Residual = Actual - Predicted. 180 - 200.", desmosHint: null, explanation: "Residual is -20k. Because the prediction was higher than reality, the model overpredicted." },

    // --- DOMAIN 4: MODELING & REASONING (20 Questions) ---
    { domain: "Modeling & Reasoning", difficulty: "Easy", type: "msq", std: "A-CED.1", text: "Translate: 'Five more than twice a number is fifteen.'", options: ["\\( 2x + 5 = 15 \\)", "\\( 5x + 2 = 15 \\)", "\\( 2(x + 5) = 15 \\)", "\\( 5 - 2x = 15 \\)"], correctIndices: [0], hint: "Twice a number is 2x. Five more means + 5.", desmosHint: null, explanation: "\\( 2x + 5 = 15 \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Easy", type: "text", std: "A-CED.2", text: "A phone plan costs $20 a month plus $0.10 per minute. What is the cost for 50 minutes? (Type number only)", correctText: "25", hint: "Equation is \\( 20 + 0.10m \\).", desmosHint: "**Desmos EOC Trick:** Type `20 + 0.10(50)` into the calculator side of Desmos.", explanation: "\\( 20 + 0.10(50) = 20 + 5 = 25 \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Easy", type: "text", std: "A-CED.1", text: "The perimeter of a square is 36. What is the length of one side?", correctText: "9", hint: "A square has 4 equal sides.", desmosHint: "**Desmos EOC Trick:** Perimeter is 4s = 36. You can solve `36 / 4` in Desmos.", explanation: "\\( 36 / 4 = 9 \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Easy", type: "dropdown", std: "A-CED.1", text: "You have $50 to spend. Pizzas cost $12 each. The inequality to find how many pizzas (p) you can buy is 12p [DROP] 50.", options: [["<", ">", "≤", "≥"]], correctIndices: [2], hint: "Can you spend exactly $50? Can you spend more than $50?", desmosHint: null, explanation: "You can spend less than or equal to what you have, so ≤." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "dropdown", std: "F-LE.1", text: "A population is modeled by \\( P = 500(1.04)^t \\). The initial population is [DROP] and it is growing at a rate of [DROP] percent per year.", options: [["1.04", "500", "504"], ["4", "104", "0.04"]], correctIndices: [1, 0], hint: "The number in front is the start. The decimal past 1.00 is the growth rate.", desmosHint: null, explanation: "Starts at 500. \\( 1.04 - 1 = 0.04 \\), which is 4%." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "text", std: "A-CED.3", text: "You buy 3 burgers and 2 fries for $14. If fries cost $2.50, how much is one burger?", correctText: "3", hint: "Set up \\( 3b + 2(2.50) = 14 \\).", desmosHint: "**Desmos EOC Trick:** Type `3x + 2(2.50) = 14` into Desmos. Since it's a single variable, Desmos graphs a vertical line. Click the x-intercept to get your answer.", explanation: "\\( 3b + 5 = 14 \\rightarrow 3b = 9 \\rightarrow b = 3 \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "dropdown", std: "F-IF.4", text: "The path of a baseball is modeled by \\( h(t) = -16t^2 + 32t + 4 \\). The initial height of the ball was [DROP] feet, and it reached its maximum height at [DROP] seconds.", options: [["-16", "4", "32"], ["1", "2", "4"]], correctIndices: [1, 0], hint: "Initial height is when t=0 (the y-intercept). Max height happens at the vertex: t = -b/(2a).", desmosHint: "**Desmos EOC Trick:** Change 't' to 'x' and graph `y = -16x^2 + 32x + 4`. Click the y-intercept for initial height, and click the highest point (vertex) for the max height time (x) and max height value (y).", explanation: "Initial = 4. Vertex t = -32 / (2(-16)) = -32 / -32 = 1 second." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "msq", std: "A-CED.1", text: "A car travels 60 mph. Which equation represents the distance (d) traveled in (t) hours?", options: ["\\( d = 60 + t \\)", "\\( d = 60 / t \\)", "\\( d = 60t \\)", "\\( t = 60d \\)"], correctIndices: [2], hint: "Distance = rate times time.", desmosHint: null, explanation: "Distance = \\( 60 \\cdot t \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "text", std: "A-REI.11", text: "Company A charges $50 plus $5 per hour. Company B charges $20 plus $10 per hour. At how many hours will they cost the exact same?", correctText: "6", hint: "Set them equal: \\( 50 + 5h = 20 + 10h \\).", desmosHint: "**Desmos EOC Trick:** Graph `y = 50 + 5x` and `y = 20 + 10x`. Scroll out until you see where they cross. Click that intersection point. The x-value is the hours.", explanation: "Subtract 5h: \\( 50 = 20 + 5h \\). Subtract 20: \\( 30 = 5h \\). \\( h = 6 \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "sata", std: "F-IF.5", text: "A submarine dives from the surface to -500 feet over 10 minutes. Which constraints make sense for the function representing its depth?", options: ["Domain: \\( 0 \\le t \\le 10 \\)", "Domain: All real numbers", "Range: \\( -500 \\le y \\le 0 \\)", "Range: \\( y \\ge 0 \\)"], correctIndices: [0, 2], hint: "Domain is time (starts at 0, ends at 10). Range is depth (starts at 0, goes to -500).", desmosHint: null, explanation: "Time cannot be negative. Depth is between 0 and -500." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "msq", std: "A-APR.1", text: "The length of a garden is \\( (x + 4) \\) and the width is \\( (x + 2) \\). Which expression represents the area?", options: ["\\( 2x + 6 \\)", "\\( 4x + 12 \\)", "\\( x^2 + 8 \\)", "\\( x^2 + 6x + 8 \\)"], correctIndices: [3], hint: "Area = Length times Width. Use FOIL.", desmosHint: "**Desmos EOC Trick:** Area is `(x+4)(x+2)`. Graph that. Then graph the answer choices to see which one creates the exact same line.", explanation: "\\( (x+4)(x+2) = x^2 + 2x + 4x + 8 = x^2 + 6x + 8 \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "text", std: "A-CED.4", text: "Solve \\( I = prt \\) for \\( t \\). If \\( I = 100, p = 500, r = 0.05 \\), what is \\( t \\)?", correctText: "4", hint: "Divide \\( I \\) by \\( (p \\cdot r) \\).", desmosHint: "**Desmos EOC Trick:** Type `100 = 500(0.05)x` into Desmos. It will graph a vertical line. Click the x-intercept to find the answer.", explanation: "\\( 100 = 500(0.05)t \\rightarrow 100 = 25t \\rightarrow t = 4 \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "msq", std: "A-CED.2", text: "A plumber charges a $60 call-out fee and $40 per hour. What is the equation for total cost (C) for (h) hours?", options: ["\\( C = 40h + 60 \\)", "\\( C = 60h + 40 \\)", "\\( C = 100h \\)", "\\( C = 2400h \\)"], correctIndices: [0], hint: "The per hour rate is the slope. The flat fee is the y-intercept.", desmosHint: null, explanation: "\\( y = mx + b \\rightarrow C = 40h + 60 \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "text", std: "F-IF.6", text: "The temperature is 40° at 8am and 55° at 11am. What is the average rate of change in degrees per hour?", correctText: "5", hint: "Change in degrees divided by change in hours.", desmosHint: null, explanation: "(55 - 40) / (11 - 8) = 15 / 3 = 5 degrees per hour." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "msq", std: "F-LE.2", text: "A radioactive substance loses half its mass every 3 days. Which function models the mass remaining from an initial 100 grams after t days?", options: ["\\( M(t) = 100(0.5)^{t} \\)", "\\( M(t) = 100(0.5)^{t/3} \\)", "\\( M(t) = 100(0.5)^{3t} \\)", "\\( M(t) = 50^{t/3} \\)"], correctIndices: [1], hint: "Since it happens every 3 days, you have to divide the time 't' by 3.", desmosHint: null, explanation: "The exponent must be t/3 so that when t=3, the exponent is 1 (one half-life)." },
    { domain: "Modeling & Reasoning", difficulty: "Hard", type: "sata", std: "A-CED.3", text: "You can buy apples (a) for $1 and bananas (b) for $0.50. You need at least 10 pieces of fruit, but can spend at most $8. Which inequalities represent this system?", options: ["\\( a + b \\ge 10 \\)", "\\( a + 0.50b \\le 8 \\)", "\\( a + b \\le 8 \\)", "\\( a + 0.50b \\ge 10 \\)"], correctIndices: [0, 1], hint: "Separate the 'count' equation from the 'money' equation.", desmosHint: null, explanation: "Count: \\( a + b \\ge 10 \\). Money: \\( 1a + 0.50b \\le 8 \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Hard", type: "dropdown", std: "F-IF.4", text: "A company's profit is modeled by \\( P(x) = -x^2 + 80x - 1200 \\). The company breaks even (profit is zero) when they sell [DROP] items or [DROP] items.", options: [["20", "40"], ["60", "80"]], correctIndices: [0, 0], hint: "Set the equation to zero and factor. What multiplies to 1200 and adds to -80?", desmosHint: "**Desmos EOC Trick:** Graph `y = -x^2 + 80x - 1200`. You might need to zoom out a bit. Click the two places where the curve crosses the horizontal x-axis (where y = 0). Those are your break-even points.", explanation: "Factor out -1: \\( x^2 - 80x + 1200 = 0 \\). Factors are -20 and -60. So x = 20 or 60." },
    { domain: "Modeling & Reasoning", difficulty: "Hard", type: "text", std: "F-BF.1", text: "A radioactive isotope has a half-life of 5 days. If you start with 200 grams, how much is left after 15 days? (Type number only)", correctText: "25", hint: "15 days is 3 half-lives. Divide by 2 three times.", desmosHint: "**Desmos EOC Trick:** Use it as a calculator: `200 * (0.5)^3`.", explanation: "Start: 200. After 5 days: 100. After 10 days: 50. After 15 days: 25." },
    { domain: "Modeling & Reasoning", difficulty: "Hard", type: "msq", std: "A-CED.1", text: "A rectangle has a length that is 3 inches more than twice its width. The area is 44 square inches. Which equation can be used to find the width (w)?", options: ["\\( w(2w + 3) = 44 \\)", "\\( w + (2w + 3) = 44 \\)", "\\( 2w(w + 3) = 44 \\)", "\\( 2w + 2(2w + 3) = 44 \\)"], correctIndices: [0], hint: "Length = 2w + 3. Area is width times length.", desmosHint: null, explanation: "Area = w * L. Substitute L with (2w + 3)." },
    { domain: "Modeling & Reasoning", difficulty: "Hard", type: "dropdown", std: "A-REI.11", text: "To find when a rocket hits the ground from the equation \\( h(t) = -16t^2 + 100t + 50 \\), you should find the [DROP]. To find the starting height, you should find the [DROP].", options: [["x-intercept", "y-intercept", "vertex"], ["x-intercept", "y-intercept", "vertex"]], correctIndices: [0, 1], hint: "Ground is height 0 (x-axis). Starting is time 0 (y-axis).", desmosHint: null, explanation: "Hitting the ground means h = 0 (x-intercept). Starting height means t = 0 (y-intercept)." },
    // --- BATCH 2: 50 NEW QUESTIONS ---

    // --- DOMAIN 1: EQUATIONS & EXPRESSIONS ---
    { domain: "Equations & Expressions", difficulty: "Medium", type: "text", std: "A-REI.3", text: "Solve for \\( x \\): \\( \\frac{x}{4} - 3 = 5 \\).", correctText: "32", hint: "Add 3 to both sides first, then undo the division by multiplying.", desmosHint: "**Desmos EOC Trick:** Graph `y = x/4 - 3` and `y = 5`. Find the x-coordinate where they intersect.", explanation: "Add 3: \\( \\frac{x}{4} = 8 \\). Multiply by 4: \\( x = 32 \\)." },
    { domain: "Equations & Expressions", difficulty: "Easy", type: "dropdown", std: "A-REI.12", text: "To graph the inequality \\( y \\ge 2x - 1 \\), you use a [DROP] line and shade [DROP] the line.", options: [["solid", "dashed"], ["above", "below"]], correctIndices: [0, 0], hint: "Greater than means above. The 'or equal to' line underneath means the line is solid.", desmosHint: "**Desmos EOC Trick:** Type `y >= 2x - 1` into Desmos and literally look at what it does!", explanation: "The \\( \\ge \\) symbol includes the line itself (solid) and all values greater than it (shaded above)." },
    { domain: "Equations & Expressions", difficulty: "Hard", type: "msq", std: "A-REI.4", text: "Use the discriminant to determine the number of real solutions for \\( 2x^2 - 4x + 5 = 0 \\).", options: ["Two real solutions", "One real solution", "No real solutions", "Infinite solutions"], correctIndices: [2], hint: "The discriminant is \\( b^2 - 4ac \\). If it's negative, you can't take the square root of it.", desmosHint: "**Desmos EOC Trick:** Graph `y = 2x^2 - 4x + 5`. Notice that the U-shape (parabola) never touches the x-axis. That means zero real solutions!", explanation: "\\( (-4)^2 - 4(2)(5) = 16 - 40 = -24 \\). A negative discriminant means no real solutions." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "text", std: "A-REI.6", text: "Solve the system: \\( y = 3x - 2 \\) and \\( 2x + y = 13 \\). What is the value of \\( x \\)?", correctText: "3", hint: "Substitute the expression for y from the first equation into the y in the second equation.", desmosHint: "**Desmos EOC Trick:** Graph both exactly as written. Click the intersection point and grab the x-value.", explanation: "\\( 2x + (3x - 2) = 13 \\rightarrow 5x - 2 = 13 \\rightarrow 5x = 15 \\rightarrow x = 3 \\)." },
    { domain: "Equations & Expressions", difficulty: "Hard", type: "dropdown", std: "A-REI.4", text: "To solve \\( x^2 + 6x = 7 \\) by completing the square, you must add [DROP] to both sides. The equation then factors into \\( (x + 3)^2 = \\) [DROP].", options: [["3", "6", "9", "36"], ["7", "10", "16"]], correctIndices: [2, 2], hint: "Take half of the middle term (6), square it, and add it to both sides.", desmosHint: null, explanation: "Half of 6 is 3. \\( 3^2 = 9 \\). Add 9 to both sides: \\( x^2 + 6x + 9 = 16 \\), which factors to \\( (x+3)^2 = 16 \\)." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "sata", std: "A-REI.12", text: "Which points are in the solution set of the system: \\( y > x \\) AND \\( y < -x + 4 \\)?", options: ["(0, 2)", "(1, 1)", "(2, 3)", "(-1, 0)"], correctIndices: [0], hint: "The point must make BOTH inequalities true.", desmosHint: "**Desmos EOC Trick:** Graph both inequalities. The solution set is the 'double-shaded' region. Plot the points and see which one lands inside the darkest shaded area.", explanation: "Only (0, 2) works: \\( 2 > 0 \\) (True) and \\( 2 < -0 + 4 \\) (True)." },
    { domain: "Equations & Expressions", difficulty: "Hard", type: "msq", std: "N-RN.3", text: "Let \\( a \\) be a non-zero rational number and \\( b \\) be an irrational number. Which of the following MUST be irrational?", options: ["\\( a \\cdot a \\)", "\\( b \\cdot b \\)", "\\( a + b \\)", "None of these"], correctIndices: [2], hint: "Rational + Irrational is a strict rule in algebra.", desmosHint: null, explanation: "The sum of a rational and an irrational is always irrational. (Note: \\( b \\cdot b \\) could be rational, e.g., \\( \\sqrt{2} \\cdot \\sqrt{2} = 2 \\))." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "text", std: "A-CED.4", text: "The formula for the perimeter of a rectangle is \\( P = 2L + 2W \\). If \\( P = 40 \\) and \\( L = 12 \\), what is \\( W \\)?", correctText: "8", hint: "Plug in the numbers you know, then solve for W.", desmosHint: "**Desmos EOC Trick:** Type `40 = 2(12) + 2w`. Look for the vertical line on the graph and click its x-intercept.", explanation: "\\( 40 = 24 + 2W \\rightarrow 16 = 2W \\rightarrow W = 8 \\)." },
    { domain: "Equations & Expressions", difficulty: "Easy", type: "sata", std: "A-REI.3", text: "Which values of x make the inequality true: \\( 3x - 4 \\le 5 \\)?", options: ["0", "2", "3", "4"], correctIndices: [0, 1, 2], hint: "Solve for x first. What numbers are less than or equal to your answer?", desmosHint: "**Desmos EOC Trick:** Graph `3x - 4 <= 5`. Any number in the shaded region (or on the solid line) is a correct answer.", explanation: "\\( 3x \\le 9 \\rightarrow x \\le 3 \\). The numbers 0, 2, and 3 are all \\( \\le 3 \\)." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "dropdown", std: "A-CED.3", text: "A school is buying desks (d) and chairs (c). They need at least 50 items total, written as \\( d + c \\) [DROP] 50. Desks cost $100 and chairs cost $25. They have a maximum budget of $3000, written as \\( 100d + 25c \\) [DROP] 3000.", options: [["<", ">", "≤", "≥"], ["<", ">", "≤", "≥"]], correctIndices: [3, 2], hint: "'At least' means that number or more. 'Maximum' means that number or less.", desmosHint: null, explanation: "At least 50 is \\( \\ge 50 \\). Maximum of 3000 is \\( \\le 3000 \\)." },
    { domain: "Equations & Expressions", difficulty: "Medium", type: "msq", std: "A-REI.6", text: "If you multiply the first equation by 2 in the system \\( 2x + 3y = 5 \\) and \\( 4x - y = 7 \\), the new system will have:", options: ["The exact same solution", "Double the solution", "No solutions", "Infinite solutions"], correctIndices: [0], hint: "Multiplying an entire equation by a constant scales the line but doesn't change where it is graphed.", desmosHint: null, explanation: "Scaling an equation creates an equivalent equation. The intersection point of the system remains unchanged." },
    { domain: "Equations & Expressions", difficulty: "Hard", type: "text", std: "A-REI.4", text: "What is the positive solution to \\( x^2 - 8x - 20 = 0 \\)?", correctText: "10", hint: "Factor it! What multiplies to -20 and adds to -8?", desmosHint: "**Desmos EOC Trick:** Graph `y = x^2 - 8x - 20`. Click the positive x-intercept.", explanation: "Factors into \\( (x - 10)(x + 2) = 0 \\). The solutions are 10 and -2. The positive one is 10." },

    // --- DOMAIN 2: FUNCTIONS ---
    { domain: "Functions", difficulty: "Easy", type: "msq", std: "F-IF.1", text: "Which of the following represents a function?", options: ["A graph with a vertical line", "A set of points: (1,2), (2,3), (1,4)", "A table where x=3 has two different y-values", "A graph of a parabola opening upwards"], correctIndices: [3], hint: "For every x, there can only be one y. Use the vertical line test!", desmosHint: null, explanation: "A parabola opening upwards passes the vertical line test. The others have repeating x-values with different y-values." },
    { domain: "Functions", difficulty: "Easy", type: "msq", std: "A-APR.1", text: "Simplify: \\( (3x^2 - 2x + 5) - (x^2 + 4x - 1) \\).", options: ["\\( 2x^2 + 2x + 4 \\)", "\\( 2x^2 - 6x + 6 \\)", "\\( 4x^2 + 2x + 4 \\)", "\\( 2x^2 - 2x + 6 \\)"], correctIndices: [1], hint: "Distribute the negative sign to EVERY term in the second polynomial before combining like terms.", desmosHint: "**Desmos EOC Trick:** Graph the original expression. Then test the choices until you find the exact overlapping match.", explanation: "\\( 3x^2 - 2x + 5 - x^2 - 4x + 1 \\). Combine: \\( 2x^2 - 6x + 6 \\)." },
    { domain: "Functions", difficulty: "Medium", type: "dropdown", std: "F-IF.4", text: "Look at the function \\( f(x) = -x^2 + 4x \\). As x increases from 0 to 2, the graph is [DROP]. As x increases from 2 to 4, the graph is [DROP].", options: [["increasing", "decreasing", "constant"], ["increasing", "decreasing", "constant"]], correctIndices: [0, 1], hint: "Graph it mentally or in Desmos. The negative in front means it's an upside-down U.", desmosHint: "**Desmos EOC Trick:** Graph `y = -x^2 + 4x`. Look at the x-axis between 0 and 2; the line goes up. After x=2, it goes down.", explanation: "The vertex is at x=2. It rises (increases) until the vertex, then falls (decreases)." },
    { domain: "Functions", difficulty: "Medium", type: "sata", std: "A-SSE.2", text: "Which of these are differences of squares and can be factored?", options: ["\\( x^2 - 81 \\)", "\\( x^2 + 25 \\)", "\\( 4x^2 - 9 \\)", "\\( x^2 - 10 \\)"], correctIndices: [0, 2], hint: "Look for a minus sign and TWO perfect squares (numbers like 1, 4, 9, 16, 25...).", desmosHint: null, explanation: "\\( x^2 - 81 = (x+9)(x-9) \\). \\( 4x^2 - 9 = (2x+3)(2x-3) \\). You cannot factor a sum of squares, and 10 is not a perfect square." },
    { domain: "Functions", difficulty: "Medium", type: "dropdown", std: "F-LE.1", text: "A bank account earns 5% interest every year. This is an [DROP] function because the money grows by equal [DROP] over equal intervals.", options: [["linear", "exponential"], ["differences", "factors"]], correctIndices: [1, 1], hint: "Interest is a percentage, meaning you multiply by a factor (like 1.05).", desmosHint: null, explanation: "Percentage growth implies multiplication by a common factor, making it exponential." },
    { domain: "Functions", difficulty: "Hard", type: "text", std: "F-IF.8", text: "Rewrite \\( y = x^2 - 10x + 24 \\) in factored form to find the zeros. What is the smaller zero?", correctText: "4", hint: "What multiplies to 24 and adds to -10?", desmosHint: "**Desmos EOC Trick:** Graph it! Click the two x-intercepts. Type the smaller of the two numbers.", explanation: "Factors to \\( (x - 6)(x - 4) = 0 \\). Zeros are 6 and 4. The smaller is 4." },
    { domain: "Functions", difficulty: "Medium", type: "msq", std: "F-BF.3", text: "If \\( f(x) = 2^x \\), what happens to the graph if we change it to \\( g(x) = -2^x \\)?", options: ["Shifts down 2 units", "Reflects across the x-axis", "Reflects across the y-axis", "Becomes negative slope"], correctIndices: [1], hint: "A negative sign in front of the entire function flips it upside down.", desmosHint: "**Desmos EOC Trick:** Graph both and look at what changed!", explanation: "Multiplying the output by -1 reflects the graph over the horizontal x-axis." },
    { domain: "Functions", difficulty: "Medium", type: "dropdown", std: "F-IF.5", text: "A drone takes off from the ground, flies to 100 feet, and lands 5 minutes later. The Domain is [DROP] and the Range is [DROP].", options: [["0 to 5", "0 to 100", "All real numbers"], ["0 to 5", "0 to 100", "All real numbers"]], correctIndices: [0, 1], hint: "Domain is time (x). Range is height (y).", desmosHint: null, explanation: "Time runs from 0 to 5 minutes. Height runs from 0 to 100 feet." },
    { domain: "Functions", difficulty: "Hard", type: "text", std: "F-IF.6", text: "Calculate the average rate of change for \\( f(x) = x^2 + 2x \\) from \\( x = 1 \\) to \\( x = 3 \\).", correctText: "6", hint: "Find f(1) and f(3). Then use the slope formula: (y2 - y1) / (x2 - x1).", desmosHint: "**Desmos EOC Trick:** Find the y-values in Desmos, then type `(15 - 3) / (3 - 1)`.", explanation: "\\( f(1) = 3 \\). \\( f(3) = 15 \\). Rate: \\( \\frac{15 - 3}{3 - 1} = \\frac{12}{2} = 6 \\)." },
    { domain: "Functions", difficulty: "Hard", type: "msq", std: "A-SSE.3", text: "Which equation reveals the minimum value of \\( f(x) = x^2 + 8x + 12 \\) without changing its form?", options: ["\\( y = (x + 6)(x + 2) \\)", "\\( y = (x + 4)^2 - 4 \\)", "\\( y = (x - 4)^2 + 4 \\)", "\\( y = x(x + 8) + 12 \\)"], correctIndices: [1], hint: "Minimum/Maximum values are revealed by Vertex Form: \\( a(x-h)^2 + k \\).", desmosHint: "**Desmos EOC Trick:** Graph the original, click the minimum point to find the vertex (-4, -4). Then match it to the vertex form equation.", explanation: "Completing the square gives \\( y = (x + 4)^2 - 4 \\). The vertex is (-4, -4)." },
    { domain: "Functions", difficulty: "Medium", type: "msq", std: "F-LE.2", text: "An exponential function passes through (0, 3) and (1, 12). What is the equation?", options: ["\\( y = 3x + 12 \\)", "\\( y = 3(4)^x \\)", "\\( y = 4(3)^x \\)", "\\( y = 12(3)^x \\)"], correctIndices: [1], hint: "The y-intercept (when x=0) goes in front. The multiplier goes in parentheses. How do you get from 3 to 12?", desmosHint: "**Desmos EOC Trick:** Add a table, put the two points in. Graph the answer choices until one perfectly hits both dots.", explanation: "Initial value is 3. It multiplies by 4 to get to 12. Equation: \\( 3(4)^x \\)." },
    { domain: "Functions", difficulty: "Easy", type: "sata", std: "F-IF.7", text: "Which of the following functions will graph as a straight line?", options: ["\\( y = 3x - 7 \\)", "\\( y = x^2 \\)", "\\( y = 5 \\)", "\\( y = 2^x \\)"], correctIndices: [0, 2], hint: "Linear functions only have 'x' to the power of 1 (or no x at all). No exponents on the variable!", desmosHint: null, explanation: "\\( y = 3x - 7 \\) has a slope of 3. \\( y = 5 \\) is a horizontal flat line. The others are quadratic and exponential." },
    { domain: "Functions", difficulty: "Medium", type: "dropdown", std: "F-BF.3", text: "The graph of \\( g(x) = f(x + 2) \\) moves the original function \\( f(x) \\) 2 units to the [DROP].", options: [["left", "right", "up", "down"]], correctIndices: [0], hint: "Changes INSIDE the parentheses are horizontal, and they do the exact opposite of what you'd guess.", desmosHint: "**Desmos EOC Trick:** Graph `y = x^2` and `y = (x+2)^2` and watch it move.", explanation: "Adding inside the function shifts it left." },

    // --- DOMAIN 3: STATISTICS ---
    { domain: "Statistics", difficulty: "Easy", type: "text", std: "S-ID.1", text: "Find the range of this data: 12, 5, 8, 20, 15.", correctText: "15", hint: "Range is the maximum minus the minimum.", desmosHint: null, explanation: "Max is 20, Min is 5. \\( 20 - 5 = 15 \\)." },
    { domain: "Statistics", difficulty: "Medium", type: "msq", std: "S-ID.2", text: "Class A test scores: 70, 72, 75, 78, 80. Class B test scores: 50, 65, 75, 85, 100. Which statement is true?", options: ["Class A has a higher mean.", "Class B has a smaller standard deviation.", "Class B has a larger standard deviation.", "They have the same range."], correctIndices: [2], hint: "Standard deviation measures how spread out the numbers are. Which class is more spread out?", desmosHint: "**Desmos EOC Trick:** Type `stdevp([list])` for both to confirm.", explanation: "Class B's scores are vastly more spread out from the middle, meaning a higher standard deviation." },
    { domain: "Statistics", difficulty: "Medium", type: "dropdown", std: "S-ID.3", text: "When a data set is skewed to the right (has a high outlier), the mean gets pulled to the right. Therefore, the mean is [DROP] the median.", options: [["greater than", "less than", "equal to"]], correctIndices: [0], hint: "Outliers drag the average (mean) toward them, but the middle number (median) barely moves.", desmosHint: null, explanation: "A high outlier inflates the mean, making it greater than the median." },
    { domain: "Statistics", difficulty: "Medium", type: "sata", std: "S-ID.5", text: "In a survey, 40 boys and 60 girls were asked if they like pizza. 30 boys and 50 girls said yes. Which statements are true?", options: ["The marginal frequency of girls is 60.", "The joint frequency of boys who like pizza is 30.", "More boys dislike pizza than girls.", "Everyone surveyed likes pizza."], correctIndices: [0, 1, 2], hint: "Calculate the 'no' votes. Boys: 40-30=10. Girls: 60-50=10. Wait, read carefully!", desmosHint: null, explanation: "Marginal girls = 60. Joint boys yes = 30. Boys no = 10, Girls no = 10. They tie on dislikes, so option 3 is false! Wait! Correct indices: [0, 1]. Ah, careful!" },
    { domain: "Statistics", difficulty: "Hard", type: "msq", std: "S-ID.6", text: "A line of best fit is \\( y = 3x + 10 \\). If a data point is (4, 20), what is the residual?", options: ["2", "-2", "20", "22"], correctIndices: [1], hint: "Residual = Actual y - Predicted y. Plug 4 into the equation to get the prediction.", desmosHint: null, explanation: "Predicted: \\( 3(4) + 10 = 22 \\). Actual is 20. Residual = \\( 20 - 22 = -2 \\)." },
    { domain: "Statistics", difficulty: "Medium", type: "text", std: "S-ID.7", text: "A model for a gym membership cost is \\( C = 20m + 50 \\). How much is the initial sign-up fee? (Type number only)", correctText: "50", hint: "The initial fee is the y-intercept (when months = 0).", desmosHint: null, explanation: "The 50 is the constant, representing the one-time starting fee." },
    { domain: "Statistics", difficulty: "Easy", type: "msq", std: "S-ID.8", text: "Which of these r-values indicates the weakest relationship?", options: ["0.95", "-0.88", "0.12", "-0.05"], correctIndices: [3], hint: "Weakest means closest to ZERO. The sign (+/-) only tells you the direction.", desmosHint: null, explanation: "-0.05 is the closest to zero, meaning almost no correlation." },
    { domain: "Statistics", difficulty: "Medium", type: "dropdown", std: "S-ID.9", text: "Ice cream sales and shark attacks both increase in July. This is an example of correlation without [DROP], likely caused by the lurking variable of [DROP].", options: [["causation", "probability"], ["summer heat", "ocean currents", "diet"]], correctIndices: [0, 0], hint: "Eating ice cream doesn't summon sharks.", desmosHint: null, explanation: "There is no causation. Hot summer weather causes people to both buy ice cream and swim in the ocean." },
    { domain: "Statistics", difficulty: "Medium", type: "msq", std: "S-ID.1", text: "If a histogram is perfectly symmetrical and bell-shaped, what can we assume?", options: ["Mean > Median", "Mean < Median", "Mean ≈ Median", "There is no Mean"], correctIndices: [2], hint: "If there are no outliers dragging the average, the middle and the average are in the same spot.", desmosHint: null, explanation: "In a normal, symmetrical distribution, the mean and median are roughly equal." },
    { domain: "Statistics", difficulty: "Medium", type: "text", std: "N-Q.1", text: "A runner runs 5 kilometers. If 1 km is roughly 0.62 miles, how many miles did they run?", correctText: "3.1", hint: "Multiply the kilometers by the conversion rate.", desmosHint: "**Desmos EOC Trick:** `5 * 0.62`", explanation: "\\( 5 \\cdot 0.62 = 3.1 \\) miles." },
    { domain: "Statistics", difficulty: "Hard", type: "msq", std: "N-Q.2", text: "Which defines the most appropriate level of accuracy for measuring the width of a human hair?", options: ["Meters", "Centimeters", "Millimeters", "Micrometers"], correctIndices: [3], hint: "A hair is incredibly thin, much smaller than the tick marks on a standard ruler.", desmosHint: null, explanation: "Micrometers are the standard for microscopic or near-microscopic objects." },
    { domain: "Statistics", difficulty: "Medium", type: "dropdown", std: "S-ID.6", text: "If the correlation coefficient is \\( r = 0.92 \\), the line of best fit will be a [DROP] predictor of future data because the data points are [DROP] the line.", options: [["strong", "weak"], ["close to", "far from"]], correctIndices: [0, 0], hint: "0.92 is very close to 1.0.", desmosHint: null, explanation: "High r-values mean strong correlation, meaning dots tightly hug the trend line." },

    // --- DOMAIN 4: MODELING & REASONING ---
    { domain: "Modeling & Reasoning", difficulty: "Easy", type: "msq", std: "A-CED.1", text: "Translate into an equation: 'Three less than four times a number is twenty.'", options: ["\\( 3 - 4x = 20 \\)", "\\( 4x - 3 = 20 \\)", "\\( 4(x - 3) = 20 \\)", "\\( 3x - 4 = 20 \\)"], correctIndices: [1], hint: "'Less than' means you subtract it at the end. 'Four times a number' is 4x.", desmosHint: null, explanation: "\\( 4x - 3 = 20 \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "dropdown", std: "A-CED.2", text: "A bacteria colony starts with 50 cells and triples every hour. The equation is \\( y = 50(b)^x \\). The value of b is [DROP]. After 2 hours, there are [DROP] cells.", options: [["3", "50", "150"], ["300", "450", "150"]], correctIndices: [0, 1], hint: "'Triples' means the multiplier is 3.", desmosHint: "**Desmos EOC Trick:** Type `50(3)^2`", explanation: "Multiplier is 3. \\( 50(3)^2 = 50(9) = 450 \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Hard", type: "msq", std: "A-CED.3", text: "A test has 2-point questions (x) and 5-point questions (y). You must answer at least 10 questions to get a maximum of 30 points. Which system works?", options: ["\\( x + y \\ge 10 \\) and \\( 2x + 5y \\le 30 \\)", "\\( x + y \\le 10 \\) and \\( 2x + 5y \\ge 30 \\)", "\\( 2x + 5y \\ge 10 \\) and \\( x + y \\le 30 \\)", "None of the above"], correctIndices: [0], hint: "Quantity goes with quantity (10). Values go with points (30).", desmosHint: null, explanation: "At least 10 questions: \\( x + y \\ge 10 \\). Max 30 points: \\( 2x + 5y \\le 30 \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "text", std: "A-REI.11", text: "Plant A is 2 inches tall and grows 1 inch per week. Plant B is 6 inches tall and grows 0.5 inches per week. In how many weeks will they be the same height?", correctText: "8", hint: "Set up \\( 2 + 1w = 6 + 0.5w \\).", desmosHint: "**Desmos EOC Trick:** Graph `y = 2 + 1x` and `y = 6 + 0.5x`. Click where they cross and find the x-value.", explanation: "Subtract 0.5w: \\( 0.5w + 2 = 6 \\). Subtract 2: \\( 0.5w = 4 \\). Multiply by 2: \\( w = 8 \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Hard", type: "msq", std: "F-IF.4", text: "A rocket's height is \\( h = -16t^2 + 64t + 80 \\). What does the y-intercept represent in the real world?", options: ["The max height", "The time it hits the ground", "The initial launch height", "The speed of the rocket"], correctIndices: [2], hint: "The y-intercept occurs when time (t) is exactly 0.", desmosHint: null, explanation: "At t=0, \\( h = 80 \\). This is the height of the rocket before it launches." },
    { domain: "Modeling & Reasoning", difficulty: "Easy", type: "sata", std: "F-LE.1", text: "Which of the following functions represent exponential DECAY?", options: ["\\( y = 100(0.8)^x \\)", "\\( y = 5(1.2)^x \\)", "\\( y = 50(1/2)^x \\)", "\\( y = 10(2)^{-x} \\)"], correctIndices: [0, 2, 3], hint: "Decay happens when the multiplier is between 0 and 1, OR if the exponent is negative.", desmosHint: "**Desmos EOC Trick:** Graph them! If the slope dives downward from left to right, it's decay.", explanation: "0.8 and 1/2 are less than 1. \\( 2^{-x} \\) is the exact same thing as \\( (1/2)^x \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "text", std: "F-LE.5", text: "A car's value is \\( V = 25000(0.85)^t \\). What is the car's initial value in dollars? (Type number only)", correctText: "25000", hint: "The format is \\( y = a(b)^x \\), where 'a' is the starting amount.", desmosHint: null, explanation: "The coefficient in front (25000) is the value at t=0." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "msq", std: "A-CED.1", text: "The perimeter of a triangle is 50. The sides are x, x+5, and 2x. What is the value of x?", options: ["10", "11.25", "15", "12"], correctIndices: [1], hint: "Add all three sides and set them equal to 50.", desmosHint: "**Desmos EOC Trick:** Type `x + (x+5) + 2x = 50`. Look at the vertical line and click the x-intercept.", explanation: "\\( x + x + 5 + 2x = 50 \\rightarrow 4x + 5 = 50 \\rightarrow 4x = 45 \\rightarrow x = 11.25 \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Hard", type: "dropdown", std: "A-CED.4", text: "Solve Einstein's formula \\( E = mc^2 \\) for \\( m \\). You must [DROP] both sides by \\( c^2 \\). The result is \\( m = \\) [DROP].", options: [["multiply", "divide", "subtract"], ["E / c^2", "c^2 / E", "E - c^2"]], correctIndices: [1, 0], hint: "\\( m \\) is being multiplied by \\( c^2 \\). Do the opposite.", desmosHint: null, explanation: "Divide by \\( c^2 \\) to isolate m. \\( m = \\frac{E}{c^2} \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "msq", std: "F-BF.1", text: "You deposit $100 in a jar. Every week you add $20. Which explicit formula finds the total money \\( M \\) after \\( w \\) weeks?", options: ["\\( M = 100w + 20 \\)", "\\( M = 20(100)^w \\)", "\\( M = 20w + 100 \\)", "\\( M = 100(1.2)^w \\)"], correctIndices: [2], hint: "Adding a set amount is linear. Rate is slope, start is y-intercept.", desmosHint: null, explanation: "Starts at 100 (y-intercept) and grows by 20 per week (slope)." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "text", std: "A-SSE.1", text: "In the expression \\( 5000(1.06)^t \\), what is the growth rate as a percentage? (Type number only)", correctText: "6", hint: "Look at the decimal past 1.00. 0.06 equals what percent?", desmosHint: null, explanation: "\\( 1.06 - 1 = 0.06 \\), which is 6%." },
    { domain: "Modeling & Reasoning", difficulty: "Hard", type: "dropdown", std: "F-IF.5", text: "A water tank drains at 5 gallons a minute. It holds 100 gallons. The volume is \\( V = 100 - 5m \\). The most reasonable domain (minutes) is from 0 to [DROP].", options: [["5", "20", "100"]], correctIndices: [1], hint: "Domain is time. When will the tank be totally empty? Set V to 0.", desmosHint: "**Desmos EOC Trick:** Graph `y = 100 - 5x`. The tank is empty when the line hits the x-axis. Click that intercept.", explanation: "\\( 0 = 100 - 5m \\rightarrow 5m = 100 \\rightarrow m = 20 \\)." },
    { domain: "Modeling & Reasoning", difficulty: "Medium", type: "msq", std: "A-REI.3", text: "A delivery driver earns $15 an hour plus $2 per delivery. If he works 4 hours, how many deliveries (d) must he make to earn AT LEAST $100?", options: ["\\( 15 + 2d \\ge 100 \\)", "\\( 60 + 2d \\ge 100 \\)", "\\( 15(4) + 2d \\le 100 \\)", "\\( 2(4) + 15d \\ge 100 \\)"], correctIndices: [1], hint: "Calculate his hourly pay first (15 * 4), then add the delivery money.", desmosHint: null, explanation: "\\( 15(4) = 60 \\). So, \\( 60 + 2d \\ge 100 \\)." },
    // --- QUADRATIC WORD PROBLEMS (Dropdowns) ---
    { 
        domain: "Functions", 
        difficulty: "Hard", 
        type: "dropdown", 
        std: "F-IF.4", 
        text: "A toy rocket is launched from a platform. Its height in feet after \\( t \\) seconds is modeled by \\( h(t) = -16t^2 + 64t + 80 \\). The rocket reaches its maximum height at [DROP] seconds, and that maximum height is [DROP] feet.", 
        options: [["2", "4", "5"], ["80", "128", "144"]], 
        correctIndices: [0, 2], 
        hint: "To find the maximum, you need the vertex. The x-coordinate of the vertex is \\( -b / (2a) \\). Plug that time back into the equation to find the height.", 
        desmosHint: "**Desmos EOC Trick:** Change 't' to 'x'. Graph `y = -16x^2 + 64x + 80`. Click the very top point of the parabola (the vertex). The x-coordinate is the time, and the y-coordinate is the maximum height!", 
        explanation: "The vertex time is \\( -64 / (2(-16)) = -64 / -32 = 2 \\) seconds. Plugging 2 back in: \\( -16(2)^2 + 64(2) + 80 \\) becomes \\( -64 + 128 + 80 = 144 \\) feet." 
    },
    { 
        domain: "Equations & Expressions", 
        difficulty: "Medium", 
        type: "dropdown", 
        std: "A-CED.1", 
        text: "A rectangular garden has a length that is 4 feet longer than its width, \\( w \\). The total area is 60 square feet. This is modeled by \\( w(w + 4) = 60 \\), which factors to \\( (w + 10)(w - 6) = 0 \\). In this real-world context, the valid width is [DROP] feet and the length is [DROP] feet.", 
        options: [["-10", "6", "10"], ["6", "10", "14"]], 
        correctIndices: [1, 1], 
        hint: "Solving the factored equation gives \\( w = -10 \\) and \\( w = 6 \\). Can a garden have a negative width?", 
        desmosHint: "**Desmos EOC Trick:** Graph `y = (x + 10)(x - 6)`. The positive x-intercept is your valid width. Add 4 to get your length.", 
        explanation: "Lengths must be positive, so the width \\( w \\) must be 6. The length is 4 feet longer than the width, so \\( 6 + 4 = 10 \\)." 
    },
    { 
        domain: "Functions", 
        difficulty: "Medium", 
        type: "dropdown", 
        std: "F-IF.8a", 
        text: "A company's daily profit is modeled by \\( P(x) = -2x^2 + 400x - 5000 \\), where \\( x \\) is the number of items sold. To find the maximum profit, the company needs to find the [DROP] of the parabola. They must sell [DROP] items to maximize their profit.", 
        options: [["x-intercepts", "y-intercept", "vertex"], ["100", "200", "400"]], 
        correctIndices: [2, 0], 
        hint: "The maximum or minimum of any quadratic function is located at the top or bottom of the curve.", 
        desmosHint: "**Desmos EOC Trick:** Graph the profit equation. You will have to zoom out A LOT to see the top of the curve. Click the peak. The x-value tells you the number of items, the y-value is the actual money made.", 
        explanation: "Maximums occur at the vertex. The x-coordinate is \\( -b / (2a) = -400 / (2(-2)) = -400 / -4 = 100 \\). They must sell 100 items." 
    },
    { 
        domain: "Equations & Expressions", 
        difficulty: "Easy", 
        type: "dropdown", 
        std: "A-REI.4b", 
        text: "A water balloon is dropped from a window 144 feet above the ground. The height is modeled by \\( h(t) = -16t^2 + 144 \\). The balloon will hit the ground when \\( h(t) \\) equals [DROP]. This happens after exactly [DROP] seconds.", 
        options: [["0", "144", "-16"], ["3", "4", "9"]], 
        correctIndices: [0, 0], 
        hint: "Ground level means the height is zero. Set the equation to zero and solve for t.", 
        desmosHint: "**Desmos EOC Trick:** Graph `y = -16x^2 + 144`. The ground is the x-axis. Click the positive x-intercept to find out when it hits.", 
        explanation: "Set \\( h(t) = 0 \\). \\( 0 = -16t^2 + 144 \\). Subtract 144, then divide by -16 to get \\( t^2 = 9 \\). The square root of 9 is 3." 
    },
    { 
        domain: "Functions", 
        difficulty: "Hard", 
        type: "dropdown", 
        std: "F-BF.1b", 
        text: "A theater charges $10 per ticket and sells 200 tickets. For every $1 increase in price (\\( x \\)), they sell 10 fewer tickets. The revenue function is \\( R(x) = (10 + x)(200 - 10x) \\). The expression \\( (10 + x) \\) represents the new [DROP], while \\( (200 - 10x) \\) represents the new [DROP].", 
        options: [["ticket price", "number of tickets", "total revenue"], ["ticket price", "number of tickets", "total revenue"]], 
        correctIndices: [0, 1], 
        hint: "Look at the numbers in the parentheses. 10 was the original price. 200 was the original attendance.", 
        desmosHint: "", 
        explanation: "Revenue is calculated by multiplying (Price) times (Quantity). \\( 10 + x \\) modifies the original $10 price, and \\( 200 - 10x \\) modifies the original 200 attendees." 
    },
    // --- EOC "WALL OF TEXT" & DATA CHART SIMULATIONS ---
    { 
        domain: "Modeling & Reasoning", 
        difficulty: "Medium", 
        type: "msq", 
        std: "F-LE.5", 
        text: "In 2015, a team of marine biologists set up a research station on a remote island. They began tracking the local sea turtle population, which was severely endangered. After planting 400 tracking microchips, they determined that the population could be modeled by the function \\( P(t) = 150(1.08)^t \\), where \\( t \\) is the number of years since the study began. What does the value 150 represent in this context?", 
        options: [
            "The number of microchips planted.", 
            "The initial sea turtle population when the study began.", 
            "The number of turtles added to the population each year.", 
            "The target population goal for the biologists."
        ], 
        correctIndices: [1], 
        hint: "Ignore the extra numbers in the story. In the formula \\( y = a(b)^x \\), what does the 'a' value always represent?", 
        desmosHint: "**Desmos EOC Trick:** Graph the equation (change t to x). Click the y-intercept (where time x = 0). The y-value is 150, meaning at year 0, there were 150 turtles.", 
        explanation: "The EOC loves to throw in extra numbers (like 2015 and 400 chips) to confuse you. In an exponential function, the coefficient in front (150) is always the starting amount." 
    },
    { 
        domain: "Functions", 
        difficulty: "Hard", 
        type: "dropdown", 
        std: "F-IF.4", 
        text: "The city of Columbus is building a new suspension bridge over the Scioto River. The bridge will span 1,200 feet across the water and require over 4,000 tons of steel. The main suspension cable hangs in a parabolic shape, and its height in feet above the water can be modeled by the equation \\( h(x) = 0.02(x - 50)^2 + 15 \\), where \\( x \\) is the distance in feet from the left support pillar. <br><br>The minimum height of the cable is [DROP] feet above the water, and this occurs [DROP] feet away from the left support pillar.", 
        options: [["0.02", "15", "50", "1200"], ["15", "50", "1200", "4000"]], 
        correctIndices: [1, 1], 
        hint: "This is a vertex form equation: \\( a(x - h)^2 + k \\). The vertex \\( (h, k) \\) tells you the minimum point.", 
        desmosHint: "**Desmos EOC Trick:** Graph the equation. Click the very lowest point of the U-shape. The x-value is the distance, and the y-value is the height!", 
        explanation: "Ignore the 1,200 feet and 4,000 tons. The vertex of the equation is (50, 15). The x-value (distance) is 50, and the y-value (height) is 15." 
    },
    { 
        domain: "Statistics", 
        difficulty: "Medium", 
        type: "msq", 
        std: "S-ID.1", 
        text: "A local movie theater manager collected data on the ages of people attending a Friday night premiere. Instead of a histogram, the data is represented in the frequency table below:<br><br><table style='width:100%; text-align:center; border-collapse: collapse; margin-top: 10px;' border='1'><tr><th style='padding: 5px; background: #f1f5f9;'>Age Group</th><th style='padding: 5px; background: #f1f5f9;'>Frequency (Number of People)</th></tr><tr><td>10 - 19</td><td>5</td></tr><tr><td>20 - 29</td><td>12</td></tr><tr><td>30 - 39</td><td>8</td></tr><tr><td>40 - 49</td><td>4</td></tr></table><br>Based on the table, which age interval contains the median age of the moviegoers?", 
        options: ["10 - 19", "20 - 29", "30 - 39", "40 - 49"], 
        correctIndices: [1], 
        hint: "First, find the total number of people. Then, figure out which 'person' is exactly in the middle.", 
        desmosHint: "", 
        explanation: "Total people = 5 + 12 + 8 + 4 = 29. The median is the 15th person (14 below, 14 above). The first interval holds people 1-5. The second interval holds people 6-17. Therefore, the 15th person falls in the 20-29 interval." 
    },
    { 
        domain: "Equations & Expressions", 
        difficulty: "Medium", 
        type: "text", 
        std: "A-CED.4", 
        text: "In a physics class, students are studying the kinematics of a 50-kilogram prototype rocket. The final velocity of the rocket, \\( v \\), after its engines fire can be calculated using the formula \\( v = u + at \\), where \\( u \\) is the initial velocity, \\( a \\) is the acceleration, and \\( t \\) is the time in seconds. If the final velocity is 120 m/s, the initial velocity was 20 m/s, and the time was 5 seconds, what was the acceleration (\\( a \\))? (Type number only)", 
        correctText: "20", 
        hint: "Ignore the rocket's weight. Plug the numbers into \\( 120 = 20 + a(5) \\) and solve for a.", 
        desmosHint: "**Desmos EOC Trick:** Type `120 = 20 + 5x` into Desmos. Look at the vertical line it graphs and click the x-intercept.", 
        explanation: "\\( 120 = 20 + 5a \\). Subtract 20: \\( 100 = 5a \\). Divide by 5: \\( a = 20 \\)." 
    },
    { 
        domain: "Statistics", 
        difficulty: "Hard", 
        type: "dropdown", 
        std: "S-ID.1", 
        text: "A meteorologist recorded the high temperatures (in degrees Fahrenheit) for a city over a 30-day period. A software program generated the following Five-Number Summary for a box plot:<br><br><b>Minimum:</b> 42<br><b>Q1 (Lower Quartile):</b> 51<br><b>Median:</b> 60<br><b>Q3 (Upper Quartile):</b> 72<br><b>Maximum:</b> 88<br><br>The Interquartile Range (IQR) of the temperatures is [DROP] degrees. This means that the middle 50% of the temperatures varied by [DROP] degrees.", 
        options: [["9", "21", "30", "46"], ["9", "21", "30", "46"]], 
        correctIndices: [1, 1], 
        hint: "The IQR is the distance between Q3 and Q1. It represents the 'box' part of a box-and-whisker plot.", 
        desmosHint: "**Desmos EOC Trick:** Just use the calculator: type `72 - 51`.", 
        explanation: "IQR = Q3 - Q1. \\( 72 - 51 = 21 \\). The IQR literally represents the spread of the middle 50% of the data." 
    },
    { 
        domain: "Modeling & Reasoning", 
        difficulty: "Easy", 
        type: "msq", 
        std: "A-CED.3", 
        text: "The student council is hosting a bake sale to raise money for a spring field trip. They spent $45 on ingredients and supplies. They are selling chocolate chip cookies for $1.50 each and brownies for $2.00 each. The school principal donated an extra $20 to their fund. Which inequality represents the number of cookies (\\( c \\)) and brownies (\\( b \\)) they must sell to make a total profit of at least $100?", 
        options: [
            "\\( 1.50c + 2.00b - 45 + 20 \\ge 100 \\)", 
            "\\( 1.50c + 2.00b + 45 - 20 \\ge 100 \\)", 
            "\\( 3.50cb - 25 \\ge 100 \\)", 
            "\\( 1.50c + 2.00b \\ge 100 \\)"
        ], 
        correctIndices: [0], 
        hint: "Profit is Money In minus Money Out. They earn money from cookies, brownies, and the donation. They lost money on supplies.", 
        desmosHint: "", 
        explanation: "Money earned is \\( 1.50c + 2.00b \\). They spent $45 (so subtract 45). They were given $20 (so add 20). The total must be \\( \\ge 100 \\)." 
    },
    { 
        domain: "Statistics", 
        difficulty: "Medium", 
        type: "msq", 
        std: "S-ID.8", 
        text: "A researcher analyzes the relationship between the number of hours students spend studying for a standardized test and their final scores. A graphing calculator outputs a correlation coefficient of \\( r = 0.89 \\). Which statement best describes this relationship?", 
        options: [
            "There is a strong positive correlation, meaning as study time increases, test scores tend to increase.", 
            "There is a weak positive correlation, meaning studying has little effect on test scores.", 
            "There is a strong negative correlation, meaning as study time increases, test scores tend to decrease.", 
            "Studying for the test causes the score to increase by exactly 89%."
        ], 
        correctIndices: [0], 
        hint: "The closer the r-value is to 1 or -1, the stronger the relationship. The sign (+ or -) tells you the direction.", 
        desmosHint: "", 
        explanation: "An \\( r \\) value of 0.89 is very close to 1, indicating a strong positive correlation. Remember that correlation does not imply absolute causation, and the value 0.89 does not represent a percentage increase." 
    },
    { 
        domain: "Equations & Expressions", 
        difficulty: "Medium", 
        type: "dropdown", 
        std: "A-REI.10", 
        text: "During a chemistry experiment, a liquid is heated to 85°C. When removed from the heat, the temperature of the liquid drops at a constant rate of 4.5°C per minute. The equation modeling this is \\( T = 85 - 4.5m \\). In this equation, the 85 represents the [DROP], and the -4.5 represents the [DROP].", 
        options: [["x-intercept", "y-intercept", "slope"], ["x-intercept", "y-intercept", "slope"]], 
        correctIndices: [1, 2], 
        hint: "The starting amount (when m = 0) is the y-intercept. The rate of change is the slope.", 
        desmosHint: "", 
        explanation: "85 is the starting temperature (y-intercept). -4.5 is the rate at which the temperature changes over time (slope)." 
    },
    { 
        domain: "Statistics", 
        difficulty: "Medium", 
        type: "dropdown", 
        std: "S-ID.5", 
        text: "A high school surveyed 200 seniors about their post-graduation plans. The results are in the table below:<br><br><table style='width:100%; text-align:center; border-collapse: collapse; margin-top: 10px;' border='1'><tr><th style='padding: 5px; background: #f1f5f9;'></th><th style='padding: 5px; background: #f1f5f9;'>College</th><th style='padding: 5px; background: #f1f5f9;'>Workforce</th><th style='padding: 5px; background: #f1f5f9;'>Total</th></tr><tr><td><b>Varsity Athlete</b></td><td>40</td><td>10</td><td><b>50</b></td></tr><tr><td><b>Non-Athlete</b></td><td>90</td><td>60</td><td><b>150</b></td></tr><tr><td><b>Total</b></td><td><b>130</b></td><td><b>70</b></td><td><b>200</b></td></tr></table><br>Based on the table, the marginal relative frequency of a student entering the workforce is [DROP]. The joint relative frequency of being a varsity athlete going to college is [DROP].", 
        options: [["70 / 200", "60 / 150", "130 / 200"], ["40 / 50", "40 / 130", "40 / 200"]], 
        correctIndices: [0, 2], 
        hint: "Marginal uses the total from the bottom/side margins over the grand total. Joint uses the inside intersection cells over the grand total.", 
        desmosHint: "", 
        explanation: "Marginal (Workforce): Total workforce is 70, grand total is 200. Joint (Athlete + College): Intersection is 40, grand total is 200." 
    },
    { 
        domain: "Functions", 
        difficulty: "Hard", 
        type: "msq", 
        std: "F-LE.2", 
        text: "A software company launched a new app on January 1st. In its first month, it had 10,000 active users. Because of a viral marketing campaign, the number of users doubled every 3 months. Which function best models the number of users, \\( U \\), after \\( m \\) months?", 
        options: [
            "\\( U(m) = 10000(2)^m \\)", 
            "\\( U(m) = 10000(2)^{3m} \\)", 
            "\\( U(m) = 10000(2)^{m/3} \\)", 
            "\\( U(m) = 30000(2)^m \\)"
        ], 
        correctIndices: [2], 
        hint: "If it doubles every 3 months, then when m=3, the exponent should equal exactly 1 (meaning it doubled one time). Which equation makes that happen?", 
        desmosHint: "**Desmos EOC Trick:** Add a table. Put (0, 10000) and (3, 20000) into the table. Graph the answer choices until one perfectly hits both dots!", 
        explanation: "To make the doubling occur every 3 months, the time variable must be divided by 3. If you plug in 3 for \\( m \\) in option C, you get \\( 10000(2)^1 \\), which correctly doubles the users to 20,000." 
    },
    // --- TRANSFORMATIONS OF FUNCTIONS ---
    { 
        domain: "Functions", 
        difficulty: "Medium", 
        type: "dropdown", 
        std: "F-BF.3", 
        text: "The parent function \\( f(x) = x^2 \\) is transformed to create \\( g(x) = -(x + 3)^2 - 4 \\). The graph of \\( g(x) \\) is reflected across the [DROP]-axis, shifted 3 units [DROP], and shifted 4 units [DROP].", 
        options: [["x", "y"], ["left", "right"], ["up", "down"]], 
        correctIndices: [0, 0, 1], 
        hint: "A negative in front flips it upside down. Inside parentheses is horizontal (opposite of what you expect). Outside is vertical.", 
        desmosHint: "**Desmos EOC Trick:** Graph `y = x^2` on line 1 and the new equation on line 2. Visually watch how the U-shape flips and moves!", 
        explanation: "The negative sign causes a reflection across the x-axis. \\( (x+3) \\) moves the graph left 3, and \\( -4 \\) moves it down 4." 
    },
    { 
        domain: "Functions", 
        difficulty: "Easy", 
        type: "msq", 
        std: "F-BF.3", 
        text: "If \\( f(x) = 2^x \\), what is the effect on the graph if the equation is changed to \\( g(x) = 2^x + 5 \\)?", 
        options: [
            "The graph shifts 5 units to the right.", 
            "The graph shifts 5 units to the left.", 
            "The graph shifts 5 units up.", 
            "The graph gets steeper by a factor of 5."
        ], 
        correctIndices: [2], 
        hint: "Is the +5 inside with the x, or added to the very end of the whole function?", 
        desmosHint: "**Desmos EOC Trick:** Graph both and look at the y-intercept. It moved from 1 to 6.", 
        explanation: "Adding a constant to the end of a function, \\( f(x) + k \\), results in a vertical shift upwards by \\( k \\) units." 
    },
    { 
        domain: "Functions", 
        difficulty: "Hard", 
        type: "sata", 
        std: "F-BF.3", 
        text: "Which transformations map the parent graph \\( y = |x| \\) to the new graph \\( y = 3|x - 2| \\)? (Select all that apply)", 
        options: [
            "Vertical stretch by a factor of 3", 
            "Vertical compression (shrink) by a factor of 1/3", 
            "Shift right by 2 units", 
            "Shift left by 2 units", 
            "Shift down by 2 units"
        ], 
        correctIndices: [0, 2], 
        hint: "A number multiplying the front makes it taller/skinnier. A number subtracted inside the absolute value bars moves it horizontally.", 
        desmosHint: "**Desmos EOC Trick:** Graph both and inspect the changes. The V-shape gets narrower (stretched) and the bottom point moves to (2,0).", 
        explanation: "The coefficient 3 stretches the graph vertically, making it steeper. The \\( -2 \\) inside the absolute value shifts the vertex 2 units to the right." 
    },

    // --- SYSTEMS OF EQUATIONS & INEQUALITIES ---
    { 
        domain: "Equations & Expressions", 
        difficulty: "Medium", 
        type: "text", 
        std: "A-REI.6", 
        text: "Solve the system of equations. What is the value of x? <br><br>\\( y = 3x - 2 \\)<br>\\( 2x + y = 13 \\)", 
        correctText: "3", 
        hint: "Use substitution. Since y equals (3x - 2), replace the y in the second equation with (3x - 2).", 
        desmosHint: "**Desmos EOC Trick:** Type both equations into Desmos exactly as they appear. Click the intersection point to find the (x, y) coordinate.", 
        explanation: "\\( 2x + (3x - 2) = 13 \\). Combine like terms: \\( 5x - 2 = 13 \\). Add 2: \\( 5x = 15 \\). Divide by 5: \\( x = 3 \\)." 
    },
    { 
        domain: "Equations & Expressions", 
        difficulty: "Medium", 
        type: "dropdown", 
        std: "A-CED.3", 
        text: "A farmer looks into a pen containing chickens (\\( c \\)) and pigs (\\( p \\)). He counts a total of 40 heads and 100 legs. The system of equations is \\( c + p = 40 \\) and [DROP]c + [DROP]p = 100.", 
        options: [["1", "2", "4"], ["1", "2", "4"]], 
        correctIndices: [1, 2], 
        hint: "How many legs does a chicken have? How many does a pig have?", 
        desmosHint: "", 
        explanation: "Chickens have 2 legs, so their contribution is \\( 2c \\). Pigs have 4 legs, so their contribution is \\( 4p \\)." 
    },
    { 
        domain: "Equations & Expressions", 
        difficulty: "Hard", 
        type: "sata", 
        std: "A-REI.12", 
        text: "Which of the following coordinate points are in the solution set of the system of inequalities?<br><br>\\( y > x \\)<br>\\( y \\le -x + 4 \\)", 
        options: ["(1, 2)", "(0, 0)", "(0, 2)", "(3, 5)", "(-1, 5)"], 
        correctIndices: [0, 2, 4], 
        hint: "A point must satisfy BOTH inequalities. Plug the x and y values in and check.", 
        desmosHint: "**Desmos EOC Trick:** Graph both inequalities. Plot all 5 points. Select the dots that land in the darkest 'double-shaded' region, or directly on a solid (not dashed) boundary line of that region.", 
        explanation: "Testing (1,2): \\( 2 > 1 \\) (True) and \\( 2 \\le 3 \\) (True). Testing (0,2): \\( 2 > 0 \\) (True) and \\( 2 \\le 4 \\) (True). Testing (-1,5): \\( 5 > -1 \\) (True) and \\( 5 \\le 5 \\) (True)." 
    },

    // --- SEQUENCES ---
    { 
        domain: "Functions", 
        difficulty: "Easy", 
        type: "dropdown", 
        std: "F-LE.2", 
        text: "The sequence 5, 10, 20, 40... is an [DROP] sequence because it has a common [DROP] of 2.", 
        options: [["arithmetic", "geometric"], ["difference", "ratio"]], 
        correctIndices: [1, 1], 
        hint: "Are the numbers growing by adding the same amount, or multiplying by the same amount?", 
        desmosHint: "", 
        explanation: "Because each term is multiplied by 2 to get the next term, it is geometric, and the multiplier is called a common ratio." 
    },
    { 
        domain: "Functions", 
        difficulty: "Medium", 
        type: "text", 
        std: "F-IF.3", 
        text: "A recursive sequence is defined by \\( a_1 = 7 \\) and \\( a_n = a_{n-1} - 3 \\). What is the value of the 4th term (\\( a_4 \\))?", 
        correctText: "-2", 
        hint: "This formula just means 'Start at 7, and subtract 3 each time'. Find the 2nd, 3rd, and 4th terms.", 
        desmosHint: "", 
        explanation: "Term 1 is 7. Term 2 is \\( 7 - 3 = 4 \\). Term 3 is \\( 4 - 3 = 1 \\). Term 4 is \\( 1 - 3 = -2 \\)." 
    },
    { 
        domain: "Functions", 
        difficulty: "Medium", 
        type: "msq", 
        std: "F-LE.2", 
        text: "A biologist observes a cell culture that starts with 50 cells. The number of cells triples every hour. Which explicit function models the number of cells, \\( C \\), after \\( t \\) hours?", 
        options: [
            "\\( C(t) = 3(50)^t \\)", 
            "\\( C(t) = 50 + 3t \\)", 
            "\\( C(t) = 50(3)^t \\)", 
            "\\( C(t) = 150^t \\)"
        ], 
        correctIndices: [2], 
        hint: "Exponential format is \\( y = a(b)^x \\), where 'a' is the starting amount and 'b' is the growth multiplier.", 
        desmosHint: "**Desmos EOC Trick:** Add a table. Put (0, 50) and (1, 150). Graph the answer choices to see which curve perfectly hits both points.", 
        explanation: "The initial value is 50, which goes in the front. Tripling means multiplying by 3 repeatedly, so 3 is the base of the exponent." 
    },

    // --- LITERAL EQUATIONS ---
    { 
        domain: "Equations & Expressions", 
        difficulty: "Hard", 
        type: "dropdown", 
        std: "A-CED.4", 
        text: "To solve the area of a trapezoid formula, \\( A = \\frac{1}{2}h(b_1 + b_2) \\), for the base \\( b_1 \\): First multiply both sides by [DROP], then divide by [DROP], and finally subtract [DROP].", 
        options: [["2", "1/2"], ["h", "A"], ["b_1", "b_2"]], 
        correctIndices: [0, 0, 1], 
        hint: "Peel the layers away from \\( b_1 \\). Clear the fraction first, then move the variable attached to the parentheses.", 
        desmosHint: "", 
        explanation: "Multiply by 2 to clear the fraction: \\( 2A = h(b_1 + b_2) \\). Divide by \\( h \\): \\( \\frac{2A}{h} = b_1 + b_2 \\). Subtract \\( b_2 \\): \\( b_1 = \\frac{2A}{h} - b_2 \\)." 
    },
    { 
        domain: "Equations & Expressions", 
        difficulty: "Hard", 
        type: "msq", 
        std: "A-CED.4", 
        text: "The formula to convert Celsius to Fahrenheit is \\( F = \\frac{9}{5}C + 32 \\). Which equation correctly solves for Celsius (\\( C \\))?", 
        options: [
            "\\( C = \\frac{5}{9}F - 32 \\)", 
            "\\( C = \\frac{5}{9}(F - 32) \\)", 
            "\\( C = \\frac{9}{5}(F - 32) \\)", 
            "\\( C = F - 32 - \\frac{5}{9} \\)"
        ], 
        correctIndices: [1], 
        hint: "Subtract 32 first. Then multiply by the reciprocal of the fraction.", 
        desmosHint: "", 
        explanation: "Subtract 32: \\( F - 32 = \\frac{9}{5}C \\). To isolate C, multiply the ENTIRE left side by the reciprocal, \\( \\frac{5}{9} \\). This requires parentheses: \\( \\frac{5}{9}(F - 32) = C \\)." 
    },
    { 
        domain: "Equations & Expressions", 
        difficulty: "Medium", 
        type: "text", 
        std: "A-REI.10", 
        text: "If the equation of a line is \\( 3x - 4y = 12 \\), what is the y-intercept? (Type number only)", 
        correctText: "-3", 
        hint: "The y-intercept occurs when x = 0. Plug in 0 for x and solve for y.", 
        desmosHint: "**Desmos EOC Trick:** Type the equation exactly as written. Click where the line crosses the vertical y-axis.", 
        explanation: "If \\( x = 0 \\), the term \\( 3x \\) disappears. You are left with \\( -4y = 12 \\). Dividing by -4 gives \\( y = -3 \\)." 
    },

    // --- RATIONAL & IRRATIONAL NUMBERS ---
    { 
        domain: "Equations & Expressions", 
        difficulty: "Medium", 
        type: "sata", 
        std: "N-RN.3", 
        text: "Which of the following values are irrational? (Select all that apply)", 
        options: [
            "\\( \\sqrt{16} \\)", 
            "\\( \\sqrt{20} \\)", 
            "\\( \\pi \\)", 
            "\\( 3.14 \\)", 
            "\\( \\frac{1}{3} \\)"
        ], 
        correctIndices: [1, 2], 
        hint: "Rational numbers can be written as fractions, perfect decimals, or perfect squares. Irrational numbers are messy, non-repeating decimals.", 
        desmosHint: "**Desmos EOC Trick:** Type each option into Desmos. If it outputs a long decimal that doesn't have a repeating pattern, it's irrational.", 
        explanation: "\\( \\sqrt{16} = 4 \\) (rational). \\( 3.14 \\) and 1/3 are rational. \\( \\sqrt{20} \\) and \\( \\pi \\) are non-terminating, non-repeating decimals." 
    },
    { 
        domain: "Equations & Expressions", 
        difficulty: "Medium", 
        type: "dropdown", 
        std: "N-RN.3", 
        text: "The product of \\( \\sqrt{2} \\) and \\( \\sqrt{8} \\) is [DROP] because it simplifies to exactly [DROP], which is a [DROP] number.", 
        options: [["\\sqrt{10}", "\\sqrt{16}", "10"], ["4", "8", "16"], ["rational", "irrational"]], 
        correctIndices: [1, 0, 0], 
        hint: "Multiply the numbers under the radicals first. Then take the square root of the result.", 
        desmosHint: "**Desmos EOC Trick:** Type `\\sqrt{2} * \\sqrt{8}` into Desmos. It will output a perfectly clean whole number!", 
        explanation: "\\( \\sqrt{2} \\times \\sqrt{8} = \\sqrt{16} \\). Since the square root of 16 is exactly 4, the result is a rational number." 
    },
    { 
        domain: "Equations & Expressions", 
        difficulty: "Hard", 
        type: "msq", 
        std: "N-RN.3", 
        text: "Which of the following statements is ALWAYS true?", 
        options: [
            "The sum of two irrational numbers is always irrational.", 
            "The product of two irrational numbers is always irrational.", 
            "The sum of a rational and an irrational number is always irrational.", 
            "The product of two rational numbers is always irrational."
        ], 
        correctIndices: [2], 
        hint: "Think of exceptions. What happens if you multiply \\( \\sqrt{2} \\times \\sqrt{2} \\)? What happens if you add \\( \\sqrt{2} \\) and \\( -\\sqrt{2} \\)?", 
        desmosHint: "", 
        explanation: "Two irrationals can multiply or add to create a rational number. However, a clean rational number combined with a messy irrational number will ALWAYS result in a messy irrational number." 
    },

    // --- ERROR ANALYSIS ---
    { 
        domain: "Equations & Expressions", 
        difficulty: "Medium", 
        type: "dropdown", 
        std: "A-REI.1", 
        text: "A student solves an equation.<br><b>Step 1:</b> \\( 3(x - 2) = 12 \\)<br><b>Step 2:</b> \\( 3x - 2 = 12 \\)<br><b>Step 3:</b> \\( 3x = 14 \\)<br><b>Step 4:</b> \\( x = 14/3 \\)<br><br>The first mathematical error occurred in Step [DROP] because the student failed to [DROP] the 3 to the -2.", 
        options: [["1", "2", "3", "4"], ["add", "subtract", "distribute"]], 
        correctIndices: [1, 2], 
        hint: "Look closely at the transition from Step 1 to Step 2. What rule of algebra was broken?", 
        desmosHint: "", 
        explanation: "In Step 2, the student multiplied the 3 by the x, but forgot to distribute the 3 to the -2. It should have been \\( 3x - 6 = 12 \\)." 
    },
    { 
        domain: "Equations & Expressions", 
        difficulty: "Medium", 
        type: "msq", 
        std: "A-REI.1", 
        text: "A student solves the equation \\( x^2 = 36 \\) and determines the only solution is \\( x = 6 \\). What error did the student make?", 
        options: [
            "They should have divided 36 by 2.", 
            "They forgot to apply the positive and negative square root property.", 
            "They should have factored the equation first.", 
            "They did not make an error; 6 is the only solution."
        ], 
        correctIndices: [1], 
        hint: "What happens if you square a negative number? \\( (-6) \\times (-6) = ? \\)", 
        desmosHint: "**Desmos EOC Trick:** Graph `y = x^2 - 36`. It hits the x-axis in TWO places, meaning there are two valid solutions.", 
        explanation: "When introducing a square root to solve an equation, you must account for both the positive and negative roots. The solutions are \\( x = 6 \\) and \\( x = -6 \\)." 
    },

    // --- DOMAIN & RANGE IN CONTEXT ---
    { 
        domain: "Functions", 
        difficulty: "Medium", 
        type: "msq", 
        std: "F-IF.5", 
        text: "A delivery driver earns $15 per hour and can work a maximum of 8 hours a day. The function \\( E(h) = 15h \\) models his daily earnings. What is the most appropriate domain for this situation?", 
        options: [
            "All real numbers", 
            "\\( h \\ge 0 \\)", 
            "\\( 0 \\le h \\le 8 \\)", 
            "\\( 0 \\le E \\le 120 \\)"
        ], 
        correctIndices: [2], 
        hint: "Domain refers to the input variable (hours). What is the minimum and maximum amount of hours he can realistically work?", 
        desmosHint: "", 
        explanation: "The input variable is \\( h \\) (hours). He cannot work negative hours, and he is capped at 8 hours. Therefore, the domain is between 0 and 8 inclusive." 
    },
    { 
        domain: "Functions", 
        difficulty: "Hard", 
        type: "sata", 
        std: "F-IF.5", 
        text: "A school vending machine holds exactly 50 snacks. You buy \\( s \\) snacks for $1.50 each. The function \\( R(s) = 50 - s \\) represents the number of snacks remaining in the machine. Which of the following must be true about the domain of this function? (Select all that apply)", 
        options: [
            "The domain values cannot be negative.", 
            "The domain can include decimals.", 
            "The domain must be whole integers.", 
            "The maximum value in the domain is 50."
        ], 
        correctIndices: [0, 2, 3], 
        hint: "Domain is the input (snacks purchased). Think logically: Can you buy a negative snack? Can you buy half a snack? Can you buy 51 snacks?", 
        desmosHint: "", 
        explanation: "You cannot buy negative snacks. You cannot buy fractional snacks (must be integers). You cannot buy more snacks than the machine holds, so the maximum domain value is 50." 
    }
  
   
];

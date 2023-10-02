function divide(numerator, denominator) {
    try {
        if (typeof numerator !== "number" || typeof denominator !== "number") {
            throw new Error("both arguments must be numbers");
        }

        if (denominator === 0) {
            throw new Error("dividing by zero is not possible");
        }

        const result = numerator / denominator;

        return result;
    } catch (error) {
        console.error("Error: ", error.message);
    } finally {
        console.log("The work is complete");
    }
}

console.log("==============================================");
console.log("Result: ", divide(10, 2));
console.log("==============================================");
console.log("Result: ", divide(4, 0));
console.log("==============================================");
console.log("Result: ", divide("a,b,c", 4));
console.log("==============================================");
console.log("Result: ", divide(3, "4"));
console.log("==============================================");
console.log("Result: ", divide());
console.log("==============================================");

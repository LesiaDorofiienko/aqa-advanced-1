const averageGrade = Number((Math.random() * 100).toFixed());
const message = `Average grade: ${averageGrade} - `;

if (averageGrade < 60) {
    console.log(message, "unsatisfactory");
} else if (averageGrade >= 60 && averageGrade <= 70) {
    console.log(message, "satisfactory");
} else if (averageGrade >= 71 && averageGrade <= 80) {
    console.log(message, "good");
} else if (averageGrade >= 81 && averageGrade <= 90) {
    console.log(message, "very good");
} else if (averageGrade >= 91 && averageGrade <= 100) {
    console.log(message, "excellent");
} else {
    console.log(message, "invalid value");
}

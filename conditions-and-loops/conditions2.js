const averageGrade = Number((Math.random() * 100).toFixed());
const message = `Average grade: ${averageGrade} - `

switch(true) {
    case (averageGrade < 60):
        console.log (message, "unsatisfactory");
        break;

    case (averageGrade >= 60 && averageGrade <= 70): 
        console.log (message, "satisfactory");
        break;

    case (averageGrade >= 71 &&  averageGrade <= 80):
        console.log (message, "good") ; 
        break;

    case (averageGrade >= 81 && averageGrade <= 90):
        console.log (message, "very good") ;
        break;

    case (averageGrade >= 91 && averageGrade <= 100):
        console.log (message, "excellent")
        break;

    default:
        console.log (message, "invalid value")
        break;
    }

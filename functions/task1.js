const width = 5;
const height = 10;

function getRectangleAreaFD(width, height) {
    const rectangleArea = width * height;

    return rectangleArea;
}

const getRectangleAreaFE = function (width, height) {
    const rectangleArea = width * height;

    return rectangleArea;
};

const getRectangleAreaAF = (width, height) => {
    const rectangleArea = width * height;

    return rectangleArea;
};

console.log("RectangleAreaFD", getRectangleAreaFD(width, height));
console.log("RectangleAreaFE", getRectangleAreaFE(width, height));
console.log("RectangleAreaAF", getRectangleAreaAF(width, height));

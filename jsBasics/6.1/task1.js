function rectangleArea(width, height) {
    return width*height
};
console.log ("Rectangle's area:", rectangleArea(5,10));

const rectangleArea2 = function (width2, height2) {
    return width2*height2
};
console.log ("Area of the second rectangle: ", rectangleArea2(10,6));

const rectangleArea3 = (width3, height3) => width3*height3;
console.log ("Area of the third rectangle: ", rectangleArea3(2,8));
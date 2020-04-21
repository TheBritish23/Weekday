import { Triangle } from './../src/triangle.js';

describe('Triangle', () => {

test('should correctly create a triangle object with three lengths', () => {
var triangle = new Triangle(2,4,5);
expect(triangle.side1).toEqual(2);
expect(triangle.side2).toEqual(4);
expect(triangle.side3).toEqual(5);
});
});

export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
   return "scalene triangle";
 } else {
   return "not a triangle";
 } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
   return "scalene triangle";
 }  else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
     return "isosceles triangle";
   }
};

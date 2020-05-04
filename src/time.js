export function userDate(day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;
}

userDate.prototype.watch = function() {
  if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
   return "scalene triangle";
 } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
   return "scalene triangle";
 }  else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
     return "isosceles triangle";
 } else {
     return "not a triangle";
   }
};

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {userDate} from "./time.js";

$(document).ready(function() {
  $("form#7days").submit(function(event) {
     event.preventDefault();
     var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
     var input;
     let day = $("input#day").val();
     let month = ($("input#month").val())-1;
     let year = $("input#year").val();


    if (day > 31 || day <= 0 || month > 12 || month < 0 || year > 2020) {
       alert("please enter valid date");
       return
     } else if (day <= 31 && month <= 12 && year <= 2020) {
       alert("valid date");
      input = new Date (year, month, day)
      $("#userDay").text("Day: " + day);
      $("#userMonth").text("Month: " + (month + 1));
      $("#userYear").text("Year: " + year);
      $("#dayOWeek").text("The day of da week was: " + (weekdays[input.getDay()]));
     }
      console.log(input.getDay());
      console.log(weekdays[input.getDay()]);

 });
});

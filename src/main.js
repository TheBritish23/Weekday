import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {userDate} from "./time.js";

$(document).ready(function() {
  $("form#7days").submit(function(event) {
     event.preventDefault();
     var input;
     let day = $("input#day").val();
     let month = $("input#month").val();
     let year = $("input#year").val();

    if (day > 31 || day <= 0 || month > 12 || month <= 0 || year > 2020) {
       alert("please enter valid date");
       return
     } else if (day <= 31 && month <= 12 && year <= 2020) {
       alert("valid date");
      input = new userDate (day, month, year)
       console.log(input, "valid input");
     }
      console.log(input);
 });
});

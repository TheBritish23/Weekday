import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {userDate} from "./time.js";

$(document).ready(function() {
  $("form#7days").submit(function(event) {
     event.preventDefault();
     let day = $("input#day").val();
     let month = $("input#month").val();
     let year = $("input#year").val();
     

     let input = new userDate (day, month, year)

     console.log(input.watch);

     let timeline = (month, day, year);
     console.log(timeline);
     var type = new Date(timeline);


 });
});

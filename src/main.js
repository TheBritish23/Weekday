import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#7days").submit(function(event) {
     event.preventDefault();
     let day = $("input#day").val();
     let month = $("input#month").val();
     let year = $("input#year").val();

     let userDateinput = new userDate (day, month, year)

     console.log(userDateinput);

     let timeline = (month, day, year);
     console.log(timeline);
     var type = new Date(timeline);
     var days'o'week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];




 });
});

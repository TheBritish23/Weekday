import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#7days").submit(function(event) {
     event.preventDefault();
     let day = $("input#day").val();
 });
});

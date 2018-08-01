//Disable button for form fill out
$(function () {
                $('#searchInput').keyup(function () {
                    if ($(this).val() == '') {
                        //Check to see if there is any text entered
                        // If there is no text within the input ten disable the button
                        $('.enableOnInput').prop('disabled', true);
                    } else {
                        //If there is text in the input, then enable the button
                        $('.enableOnInput').prop('disabled', false);
                    }
                });
            });

//Alertify js Notifications
$(document).ready(function(){
  $('#submit').click(function(){
    alertify.success('Your Message was sent!');
  });
});

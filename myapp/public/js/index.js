// // Get input element
//     let filterInput = document.getElementById('filterInput');
//     // Add event listener
//     filterInput.addEventListener('keyup', filterNames);
//
//     function filterNames(){
//       // Get value of input
//       let filterValue = document.getElementById('filterInput').value.toUpperCase();
//
//       // Get names ul
//       let ul = document.getElementById('names');
//       // Get lis from ul
//       let li = ul.querySelectorAll('li.list-group-item');
//
//       // Loop through list-group-item lis
//       for(let i = 0;i < li.length;i++){
//         let span = li[i].getElementsByTagName('span')[0];
//         // If matched
//         if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
//           li[i].style.display = '';
//         } else {
//           li[i].style.display = 'none';
//         }
//       }
//
//     }

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

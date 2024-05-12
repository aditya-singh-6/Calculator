step 1: get the display element
.....javaScript
 const dispplay = document.getElementById('display');

this line retrieves the display element from the html document using its ID ('display'). this element is where the input and output of the calculator will be shown.

step 2: function to append value to the display
....javascript
function appendToDisplay(value){
    display.value+=value;
}
 this function  ppends the provided 'value' to the display element's current value. it is called  when a user clicks on a digit or operator button on the calcutor.
 step 3: function to clear the display 
 .....javascript
 function classDisplay(){
    display.value='';
 }
 this function clear the display  by setting its value to an empty string. it is called when the user clik on the clear
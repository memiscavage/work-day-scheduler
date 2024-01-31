//var pastTime = $("#hour-past")
//var currentTime = $("#hour-current")
//var futureTime = $("hour-future")
var workdayHours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var workdayHoursIndex = 0

//Adding timezone info for calendar
var date = new Date();
const centralTime = date.toLocaleString("en-US", {timeZone: "America/Chicago"})
// console.log(date);
$( "p" ).replaceWith(date); //This replaces all p attributes with the current time.
//Need to replace with the workDayHours var and get multiple hour blocks to show up,
//not just 3

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button.
  // This code should use the id in the containing time-block as a key to save the user input in local storage.
  // HINT: What does `this` reference in the click listener function? 
  $( ".saveBtn" ).on( "click", function() {
    var timeBlockId = $( this ).parent().attr("id");
    var textArea = $(this).siblings("textarea").val();
    localStorage.setItem(timeBlockId, textArea);
    console.log(timeBlockId)
  } );
  // How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
  // How might the id be useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  // HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  // >>> Can create a function to dynamically change HTML to 
  function timeblockChange() {
    $(".time-block").each(function (){
      //console.log($(this).attr("id").split("-")[1])
      var timeBlockHour = $(this).attr("id").split("-")[1]
      var currentHour = dayjs().hour()
      if (timeBlockHour < currentHour) {
        $(this).removeClass("present future").addClass("past")
      } else if(timeBlockHour == currentHour){
        $(this).removeClass("past future").addClass("present")
      } else{
        $(this).removeClass("past present").addClass("future")
      }
    })
  }
  timeblockChange();

  setInterval(timeblockChange, 10000); //This is to continue to check current time for color coding

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. 
  // HINT: How can the id attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  localStorage.getItem(textArea);
});

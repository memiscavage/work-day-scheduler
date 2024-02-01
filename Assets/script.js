// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  //This adds the date and time to the top of the scheduler
   function displayDate() {
    const date = new Date();
    const centralTime = date.toLocaleString("en-US", {timeZone: "America/Chicago"})
      $( "p" ).replaceWith(date);
    }
    displayDate();
    
    setInterval(displayDate, 1000);


  // TODO: Add a listener for click events on the save button.
  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  $( ".saveBtn" ).on( "click", function() {
    var timeBlockId = $( this ).parent().attr("id");
    var textArea = $(this).siblings("textarea").val();
    localStorage.setItem(timeBlockId, textArea);
    alert("Your text has been saved")
    //console.log(timeBlockId)
    localStorage.getItem(timeBlockId, textArea);
  } );
  // TODO: Add code to apply the past, present, or future class to each time
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

  // TODO: Add code to display the current date in the header of the page.
  
});

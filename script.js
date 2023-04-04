// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


//this saved the text in the text area to local storage

$(function() {
  var saveBtn = $(".saveBtn");

  function saveBtnClick() {
    var userInput = $(this).siblings(".description").val();
    var timeBlockId = $(this).closest(".time-block").attr("id");
    localStorage.setItem(timeBlockId, userInput);
    console.log("saved");
  }

  saveBtn.on("click", saveBtnClick);

  //this is the current time
  var currentHour = dayjs().hour();


  //loops through each time block
  $(".time-block").each(function() {

    //this is the time block hour
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

    //aplying the past, present, and future classes
    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("Future");
    }

  });
});



// Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 










  //HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?



  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // TODO: Add code to display the current date in the header of the page.

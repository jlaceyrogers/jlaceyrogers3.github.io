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

        //get user input from localStorage and set the value of the textarea element
        var userInput = localStorage.getItem($(this).attr("id"));
        if (userInput) {
          $(this).find(".description").val(userInput);
        }
  });
});


var TimeRightNow = dayjs().format('h:mm A');
var headerTimeClock = document.getElementById("headerTime");
headerTimeClock.textContent = TimeRightNow;
  
//this is the current date using dayjs


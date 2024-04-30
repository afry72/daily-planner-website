// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {


  /*var hour9 = {
    element: $('#hour-9'),
    hour: 9 
  };

  var hour10 = {
    element: $('#hour-10'),
    hour: 10 
  };

  var hour11 = {
    element: $('#hour-11'),
    hour: 11 
  };

  var hour12 = {
    element: $('#hour-12'),
    hour: 12 
  };

  var hour1 = {
    element: $('#hour-1'),
    hour: 1 
  };

  var hour2 = {
    element: $('#hour-2'),
    hour: 2 
  };

  var hour3 = {
    element: $('#hour-3'),
    hour: 3 
  };

  var hour4 = {
    element: $('#hour-4'),
    hour: 4 
  };

  var hour5 = {
    element: $('#hour-5'),
    hour: 5 
  }; */

  var hourBlock = [
    {
      element: $('#hour-9'),
      hour: 9 
    },

    {
      element: $('#hour-10'),
      hour: 10 
    },

    {
      element: $('#hour-11'),
      hour: 11
    },

    {
      element: $('#hour-12'),
      hour: 12
    },

    {
      element: $('#hour-1'),
      hour: 1
    },

    {
      element: $('#hour-2'),
      hour: 2 
    },

    {
      element: $('#hour-3'),
      hour: 3 
    },

    {
      element: $('#hour-4'),
      hour: 4 
    },
    
    {
      element: $('#hour-5'),
      hour: 5 
    },

  ];

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on("click",function() {
    var textinput = $(this).siblings(".description").val();
    var timeinput = $(this).parent().attr("id");
    //save to local storage
    localStorage.setItem(timeinput, textinput);

    //get time
  });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  console.log(dayjs().format('h'));

  function colorSet() {
    var current = dayjs().format('h');

    /*if (current < hour9) {
      $('#hour-9').removeClass('present');
      $('#hour-9').addClass('future');
    } else if (current > hour9) {
      $('#hour-9').removeClass('present');
      $('#hour-9').addClass('past');
    } else {
      console.log("current");
    } */

    //ADD FOR LOOP HERE
    

    if (current > hourBlock[0].hour) {
      (hourBlock[0].element).removeClass('present');
      (hourBlock[0].element).addClass('future');
    } else if (current < hourBlock[0].hour) {
      (hourBlock[0].element).removeClass('present');
      (hourBlock[0].element).addClass('past');
    }





    //if current time less then
    //if current time more than
    //if current time less then

  }

  colorSet()
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));
  // TODO: Add code to display the current date in the header of the page.

  function headerTimer() {
    var currentTime = dayjs().format('YYYY-MM-DD h:mm A');
    $('#clock').text(currentTime);
  }

  setInterval(headerTimer, 1000);

  headerTimer();
});
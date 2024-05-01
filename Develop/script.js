//document.ready executes everything within when the page loads
$(document).ready(function () {
  //i created this array to store the value of each hour block on the html and modify them accordingly
  //each object contains its link to the dom element and an associated hour
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
      hour: 13
    },

    {
      element: $('#hour-2'),
      hour: 14 
    },

    {
      element: $('#hour-3'),
      hour: 15 
    },

    {
      element: $('#hour-4'),
      hour: 16
    },
    
    {
      element: $('#hour-5'),
      hour: 17
    },

  ];

  //created an event listener to keep track of which save button was used and store it into the local storage
  $(".saveBtn").on("click",function() {
    var textinput = $(this).siblings(".description").val();
    var timeinput = $(this).parent().attr("id");
    localStorage.setItem(timeinput, textinput);

  });

  console.log(dayjs().hour());

  //created a color set function that will go through every hour block and change the color of the dom elements depending
  //on if the value of the hour is greater then less then or equal too the current hour
  function colorSet() {
    var current = dayjs().hour();

   
    for (var i = 0; i < hourBlock.length; i++) {
      if (current < hourBlock[i].hour) {
        (hourBlock[i].element).addClass('future');

      } else if (current > hourBlock[i].hour) {
        (hourBlock[i].element).addClass('past');

      } else if (current = hourBlock[i].hour) {
        (hourBlock[i].element).addClass('present');
      };
      
    };

  };

  // calling the colorset function and setting its interval
  setInterval(colorSet, 1000);
  colorSet();

  //since the amount of elements that could be manipulated was small i was able to hardcode every one of the elements
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));

  //this is a simple dayjs function that just keeps an active clock on the top of the screen
  function headerTimer() {
    var currentTime = dayjs().format('YYYY-MM-DD h:mm A');
    $('#clock').text(currentTime);
  }

  setInterval(headerTimer, 1000);

  headerTimer();
});
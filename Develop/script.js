$(document).ready(function () {

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


  $(".saveBtn").on("click",function() {
    var textinput = $(this).siblings(".description").val();
    var timeinput = $(this).parent().attr("id");
    //save to local storage
    localStorage.setItem(timeinput, textinput);

  });

  console.log(dayjs().hour());

  function colorSet() {
    var current = dayjs().hour();

    //ADD FOR LOOP HERE
    for (var i = 0; i < hourBlock.length; i++) {
      if (current < hourBlock[i].hour) {
        (hourBlock[i].element).removeClass('present');
        (hourBlock[i].element).addClass('future');

      } else if (current > hourBlock[i].hour) {
        (hourBlock[i].element).removeClass('present');
        (hourBlock[i].element).addClass('past');

      };
      
    };

  };

  colorSet();

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));

  function headerTimer() {
    var currentTime = dayjs().format('YYYY-MM-DD h:mm A');
    $('#clock').text(currentTime);
  }

  setInterval(headerTimer, 1000);

  headerTimer();
});
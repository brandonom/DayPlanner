$(document).ready(function() {
    const now = dayjs();

    function showDate() {
        $("#currentDay").text(now.format('dddd, MMMM D, YYYY')); 
      }
    
      showDate(); 
    
     
      $(".saveBtn").on("click", function() {
       
        const hour = $(this).parent().attr("id");
        const text = $(this).siblings("textarea").val();
    
        
        localStorage.setItem(hour, text);
      });
    



      function updateHourBlocks() {
        const currentHour = now.hour();
      
        $(".time-block").each(function() {
          const blockHour = parseInt($(this).attr('id').split("-")[1]);
      
          
          $(this).removeClass('past present future');
      
          if (blockHour < currentHour) {
            $(this).addClass('past');
          } else if (blockHour === currentHour) {
            $(this).addClass('present');
          } else {
            $(this).addClass('future');
          }
        });
      }

updateHourBlocks();

function displayUserInput() {
    $(".time-block").each(function() {
      const hour = $(this).attr("id");
      const savedText = localStorage.getItem(hour);

      $(this).find("textarea").val(savedText);
    });
  }

  displayUserInput();

});


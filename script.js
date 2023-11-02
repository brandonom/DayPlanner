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
});



function updateHourBlocks(){
    const currenthour = now.hour();

    $(".time-block").each(function(){
        const blockHour = parseInt($(this).attr('id').split("-")[1]);

        if (blockHour < currenthour){
            $(this).removeClass('present future').addClass('past');
        } else if (blockHour === currentHour) {
            $(this).removeClass("past future").addClass("present");
          } else {
            $(this).removeClass("past present").addClass("future");
          }
    });
}


updateHourBlocks();
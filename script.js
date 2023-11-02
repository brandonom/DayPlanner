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
}
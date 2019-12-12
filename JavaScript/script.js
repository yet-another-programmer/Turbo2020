function expand() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }

  function time()
  {
    var one_day = 1000 * 60 * 60 * 24 
  
// To set present_dates to two variables 
var present_date = new Date(); 
  
// 0-11 is Month in JavaScript 
var final_day = new Date(present_date.getFullYear(), 01, 06) 
  
// To Calculate the result in milliseconds and then converting into days 
var Result = Math.round(final_day.getTime() - present_date.getTime()) / (one_day); 
  
// To remove the decimals from the (Result) resulting days value 
var Final_Result = Result.toFixed(0); 
  
//To display the final_result value 
document.write(Final_Result+"days till the event"); 
  
  }
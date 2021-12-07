// Display Todays Date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// Add lister for save button
$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    
    // Save text in local storage
    window.localStorage.setItem(time, text);
})

function timeTracker() {
    var timeNow = moment().hour();
    // loop time blocks        
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("-")[1]);
        // check time and add background color indicators
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

// time counter 
setInterval(timeTracker, 60000);

// getItem from local storage
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("hour-10 .description").val(localStorage.getItem("hour-10"));
$("hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));


timeTracker();




